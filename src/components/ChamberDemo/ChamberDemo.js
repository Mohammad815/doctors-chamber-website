import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ChamberDemo.css'


const ChamberDemo = (props) => {
    const {name,picture,Description} =props.chamber;
    return (
        <div>
            <Col>
            <Card>
                <Card.Img className='img-demo' variant="top" src={picture} />
                <Card.Body>
                <Card.Title>Doctors Name : {name} </Card.Title>
                <Card.Text>
                    <h5>Description: {Description}</h5>
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default ChamberDemo;