import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
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
    const selected = {
        color: "#04d2c8"
    }
    

    const { user, logOut } = useAuth();
    return (
        <header>
            <Navbar expand="lg" className="navigation">
                <Container>
                    <Navbar.Brand href="/home"><img src= {img} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink style = {linkStyle} activeStyle={selected} to="/home"><i class="fas fa-home me-1"></i> Home</NavLink>
                        <NavLink style = {linkStyle} activeStyle={selected} to="/courses"><i class="fas fa-book-open me-1"></i> Courses</NavLink>
                        <NavLink style = {linkStyle} activeStyle={selected} to="/about"><i class="fas fa-info-circle me-1"></i> About</NavLink>
                        <NavLink style = {linkStyle} activeStyle={selected} to="/contact"><i class="fas fa-envelope me-1"></i> Contact</NavLink>
                        <NavLink style = {linkStyle} activeStyle={selected} to="/cart"><i class="fas fa-shopping-cart me-1"></i> Cart</NavLink>
                            {
                                user.email ? <NavLink onClick = {logOut} style={linkStyle} to="/home"><img className="user-photo me-1" src={user.photoURL || img} alt="" title = {user.displayName}></img> Log Out</NavLink>
                                           : <div><NavLink style = {linkStyle} activeStyle={selected} to="/register"><i className="fas fa-user-plus me-1"></i>Register</NavLink><NavLink style={linkStyle} activeStyle={selected} to="/login"><i className="fas fa-user me-1"></i> Log In</NavLink></div>
                            }
                        <p className = "phone"><i className="fas fa-phone-alt"></i> +880 1700 08 00 10 07</p>                            
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;