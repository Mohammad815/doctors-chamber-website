import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";
import img1 from "../../image/1.jpg";
import img2 from "../../image/2.jpg";
import img3 from "../../image/3.jpg";

const Banner = () => {
  return (
    <div className="">
   
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img3} alt="First slide" />
            <Carousel.Caption className="text-black">
              <h3>Welcome to our Website</h3>
              <p>We are Ready Online ot Help</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img1} alt="Second slide" />
            <Carousel.Caption className="text-black">
              <h3>Welcome to our Website</h3>
              <p>Modern and Latest Technology and Treatment</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />
            <Carousel.Caption className="text-black">
              <h3>Welcome to Our Website</h3>
              <p>We have Highly Experienced Doctor in our hospital</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
    </div>
  );
};

export default Banner;
