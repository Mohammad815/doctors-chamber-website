import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Serviec.css'

const Service = (props) => {
    const {name,Description,Id,picture}= props.data
    return (
        
        <Col>
            <Card>
                <Card.Img variant="top" className="img" src={picture} />
                <Card.Body>
                <Card.Title>Doctors Name : {name}</Card.Title>
                <Card.Text>
                    <p>Description : {Description}</p>
                    </Card.Text>
                </Card.Body>
                <Link to={`/detail/${Id}`}><button>Show Details</button></Link>
            </Card>
    </Col>
    );
};

export default Service;