import React from 'react';
import './Expert.css'
import img1 from "../../image/expart1.jpg"
import img2 from "../../image/expart2.jpg"
import img3 from "../../image/expart3.jpg"

const Expart = () => {
    return (
        <div className="mt-3">
            <h3>Our Expert Doctors</h3>
            <div className="doctor">
                <div><img src={img1} alt="" /></div>
                <div><img src={img2} alt="" /></div>
                <div><img src={img3} alt="" /></div>
            </div>
        </div>
    );
};

export default Expart;