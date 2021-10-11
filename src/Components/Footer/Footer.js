import React from 'react';
import './Footer.css'
import img from '../../media/logo.png'

const Footer = () => {
    return (
        <div className="footer mt-5 pb-3">
            <h5 className = "mt-5"    style={{ display: "inline-block", marginRight: "10px" }}>Connect With </h5>
            <img src= {img} alt="" />
            <div className = "icon-container my-5">
                <a href = "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" rel ="noreferrer" target = "_blank"><i className="fab fa-twitter-square"></i></a>
                <a href = "https://www.facebook.com/" rel ="noreferrer" target = "_blank"><i className="fab fa-facebook-square"></i></a>
                <a href = "https://www.instagram.com/accounts/login/" rel ="noreferrer" target = "_blank"><i className="fab fa-instagram-square"></i></a>
                <a href = "https://www.youtube.com/" rel ="noreferrer" target = "_blank"><i className="fab fa-youtube"></i></a>
            </div>
            <div>
                <small className = "text-dark">Copyright ©2021 All rights reserved | This site is made with <i className="far fa-heart"></i> by A. Raheem</small>
            </div>
        </div>
    );
};

export default Footer;