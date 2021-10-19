import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ChamberDemo from '../ChamberDemo/ChamberDemo';

const Home = () => {
    const [chamberDemo, setChamberDemo] = useState([]);

    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setChamberDemo(data))
    },[])
    const doctors = chamberDemo.slice(0,6)
    console.log(doctors)

    return (
        <div>
            <div className="container mt-3">
            <Row xs={1} md={2} className="g-4">
            
            {
                doctors.map(chamber=><ChamberDemo chamber={chamber} unique={chamber.Id} ></ChamberDemo>)
            }
        </Row>
        </div>  
        </div>
    );
};

export default Home;