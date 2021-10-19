import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../Hooks/useAuth'

const Header = () => {
    const {user, logout} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container >
                            <NavLink className="nav"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Health Care
                            </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                            <NavLink className="nav"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Home
                            </NavLink>
                            <NavLink
                                to="/services" className="nav"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Services
                            </NavLink>
                            <NavLink
                                to="/about" className="nav"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact" className="nav"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Contact
                            </NavLink>
                            <p className="text-danger">{user.displayName}</p>
                        
                            {
                                user.email? <button onClick={logout}>Logout</button>
                                :  <NavLink
                                to="/login" className="nav"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                            </NavLink>
                            }
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;