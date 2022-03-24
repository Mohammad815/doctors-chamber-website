import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ChamberDemo.css";

const ChamberDemo = (props) => {
  const { name, picture, Description, Id } = props.chamber;
  return (
    <div>
      <Col>
        <Card className="h-100">
          <Card.Img className="img-demo" variant="top" src={picture} />
          <Card.Body>
            <Card.Title>Doctors Name : {name} </Card.Title>
            <Card.Text>
              <h5>Description: {Description}</h5>
            </Card.Text>
            <Link to={`/detail/${Id}`}>
              <Button variant="primary" className="p-2">Show Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ChamberDemo;
