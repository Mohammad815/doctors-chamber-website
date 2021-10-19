import React from 'react';
import './Expert.css'
import img1 from "../../image/expart1.jpg"
import img2 from "../../image/expart2.jpg"
import img3 from "../../image/expart3.jpg"
import { Col, Container, Row } from 'react-bootstrap';

const Expart = () => {

    return (
      <Container className="mt-3">
         <h3>Meets Out Expert Doctors</h3>         
         <Row className="expart"> 
            <Col xs={12} md={4}>
            <img src={img1} alt="" />
            </Col>
            <Col xs={12} md={4}>
            <img src={img2} alt="" />
            </Col>
            <Col xs={12} md={4}>
            <img src={img3} alt="" />
            </Col>
         </Row>
      </Container>
    );
};
export default Expart;