import React from 'react';
import {useState,useEffect } from 'react'
import {Container,Row} from 'react-bootstrap'
import Service from '../Service/Service';

const Services = () => {
    const [doctors, setdoctors]=useState([]);

    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setdoctors(data))
    },[])
    console.log(doctors)
    return (
        
        <Container>
            <Row xs={1} md={2} className="g-4">
                {
                    doctors.map(data=><Service data={data} key={data.Id}></Service>)
                }
            </Row>
         </Container>
        
    );
};

export default Services;