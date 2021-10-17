import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Nav className="m-auto">
                        <NavLink
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                            >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                            >
                            Services
                        </NavLink>
                        <NavLink
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                            >
                            About
                        </NavLink>
                        <NavLink
                            to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                            >
                            Login
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;