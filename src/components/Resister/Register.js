import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
      const {SignWithGoogle,handleUserRegister}=useAuth();
      const hanldeEmail = (e) => {
          setEmail(e.target.value);
        };
        const hanldePassword = (e) => {
          setPassword(e.target.value);
        };
        const handleRegister  = (e) => {
            handleUserRegister(email, password);
          console.log(email, password)
          e.preventDefault();
        };
    return (
        <Container className="w-50 m-auto">
        <div>
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={hanldeEmail} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={hanldePassword} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
            <Button onClick={handleRegister } variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    <p>Already Have an account ? <Link to="/login">Login</Link></p>
    <div>
        ---------------OR------------ <br />
        <button onClick={SignWithGoogle}>Google Sign In</button>
    </div>
        </div>
       </Container>
    );
};

export default Register;