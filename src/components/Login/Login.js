import React, { useState } from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const {SignWithGoogle,handleUserLogin}=useAuth();
    const hanldeEmail = (e) => {
        setEmail(e.target.value);
      };
      const hanldePassword = (e) => {
        setPassword(e.target.value);
      };
      const handleLogin = (e) => {
        handleUserLogin(email, password);
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
                <Button onClick={handleLogin} variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        <p>Create account ? <Link to="/register">Register</Link></p>
        <div>
            ---------------OR------------ <br/>
            <button onClick={SignWithGoogle}>Google Sign In</button>
        </div>
            </div>
           </Container>

    );
};

export default Login;