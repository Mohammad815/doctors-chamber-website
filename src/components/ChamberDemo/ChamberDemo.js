import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ChamberDemo.css'


const ChamberDemo = (props) => {
    const {name,picture,Description,Id} =props.chamber;
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
                <Link to={`/detail/${Id}`}><button>Show Details</button></Link>
                </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default ChamberDemo;