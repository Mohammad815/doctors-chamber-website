import React, { useEffect, useState } from 'react';
import {
    useParams
  } from "react-router-dom";

const Details = () => {
    const{ id } = useParams();
    const [details, setDetails] = useState([])
    const [singledata, setSingleData]= useState({})
   

    useEffect(()=>{
        fetch('/doctorsDetail.JSON')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
   console.log(details)
   useEffect(()=>{
       const findSingleData = details?.find(data=>data?.Id == id)
       console.log(findSingleData)
       setSingleData(findSingleData)
       
   },[details])
    console.log(singledata)

    return (
        <div>
            <h3>Doctor Id : {id}</h3>
            <h3>Doctors Name : {singledata?.name} </h3>
            <h3>Doctor Fee : {singledata?.DoctorFee} </h3>
            
        </div>
    );
};

export default Details;