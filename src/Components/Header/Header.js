import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import img from '../../media/logo.png'
import userLogo from '../../media/user.png'
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
    
    const { user, logOut, admin } = useAuth();

   
        return (
            <header className="fixed-top">
                <Navbar expand="lg" className="navigation container">
                    <Navbar.Brand className="mx-auto" href="/home"><img src={img} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-auto  w-100">
                            <NavLink style={linkStyle} activeStyle={selected} to="/home"><i className="fas fa-home me-1"></i> Home</NavLink>
                            <NavLink style={linkStyle} activeStyle={selected} to="/courses"><i className="fas fa-book-open me-1"></i> Courses</NavLink>
                            <NavLink style={linkStyle} activeStyle={selected} to="/about"><i className="fas fa-info-circle me-1"></i> About</NavLink>
                            <NavLink style={linkStyle} activeStyle={selected} to="/contact"><i className="fas fa-envelope me-1"></i> Contact</NavLink>
                            <NavLink style={linkStyle} activeStyle={selected} to="/cart"><i className="fas fa-shopping-cart me-1"></i> Cart</NavLink>
                            {  
                                user.email ? <>
                                   <Dropdown>
                                        <Dropdown.Toggle
                                            as="img"
                                            className="user-photo me-1 mt-3"
                                            src={user.photoURL || userLogo}
                                            alt=""
                                            title={user.displayName}
                                            variant="light" id="dropdown-basic"></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                            {
                                                admin && <>
                                                     <Dropdown.Item as = {NavLink}  to="/adinPanel"><b>Admin Panel</b></Dropdown.Item>
                                                    <Dropdown.Item as = {NavLink}  to="/addNewCourse"><b>Add New Course</b></Dropdown.Item>
                                                    <Dropdown.Item as = {NavLink} to="/manageCourse"><b>Manage Courses</b></Dropdown.Item>
                                                    <Dropdown.Item as = {NavLink} to="/manageOrders"><b>Manage Orders</b></Dropdown.Item>
                                                </>
                                            }
                                        <Dropdown.Item as = {Button} onClick={logOut} to="/home"><b>Log out</b></Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </>
                                    : <div><NavLink style={linkStyle} activeStyle={selected} to="/register"><i className="fas fa-user-plus me-1"></i>Register</NavLink><NavLink style={linkStyle} activeStyle={selected} to="/login"><i className="fas fa-user me-1"></i> Log In</NavLink></div>
                            }
                            <p className="phone"><i className="fas fa-phone-alt"></i> +880 1700 08 00 10 07</p>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
   
    // return ;
    };
    

export default Header;