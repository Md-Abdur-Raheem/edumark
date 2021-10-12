import React from 'react';
import { Form, Container } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <Container className="my-5 ">
            <h1>Get in touch</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className = "login-btn btn">Send Message</button>    
                    
            </Form>
           </Container>
        </div>
    );
};

export default Contact;