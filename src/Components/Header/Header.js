import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../media/logo.png'
import './Header.css'

const Header = () => {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        lineHeight: '72px',
        margin: '0 20px',
        fontSize: '18px'
    }
    return (
        <header>
            <Navbar expand="lg" className="navigation">
                <Container>
                    <Navbar.Brand href="/home"><img src= {img} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink activeClassName="selected" style = {linkStyle} to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" style = {linkStyle} to="/courses">Courses</NavLink>
                        <NavLink activeClassName="selected" style = {linkStyle} to="/about">About</NavLink>
                        <NavLink activeClassName="selected" style = {linkStyle} to="/contact">Contact</NavLink>
                        <i className="fas fa-user icon"></i><NavLink activeClassName="selected" style={linkStyle} to="/login">Log In</NavLink>
                        <p className = "phone"><i className="fas fa-phone-alt"></i> +880 1700 08 00 10 07</p>                            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;