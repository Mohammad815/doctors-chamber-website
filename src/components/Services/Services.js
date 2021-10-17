import React from 'react';
import {useState,useEffect } from 'react'

const Services = () => {
    const [doctors, setdoctors]=useState([]);

    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setdoctors(data))
    },[])
    console.log(doctors)
    return (
        <div>
            this is service section
        </div>
    );
};

export default Services;