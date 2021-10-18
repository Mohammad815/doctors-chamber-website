import React, { useEffect, useState } from 'react';
import {
    useParams
  } from "react-router-dom";

const Details = () => {
    const{ id } = useParams();
    const [details, setDetails] = useState([])
   

    useEffect(()=>{
        fetch('/doctorsDetail.JSON')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
   console.log(details)
    return (
        <div>
            <h3>Doctor Id {id}</h3>
            
        </div>
    );
};

export default Details;