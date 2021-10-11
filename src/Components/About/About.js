import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="my-5">A power for good</h1>
            <p className="mx-5"> We believe that education, more than anything, has the power to break through boundaries and transform lives. <br /> Edumark is one of the world’s largest learning platforms for education and skills training. It is a for-profit social enterprise dedicated to making it possible for anyone, to study anything, anywhere, at any time, at any subject level. Through our mission we are a catalyst for positive social change, creating opportunity, prosperity, and equality for everyone.</p>
            
            <div className="my-5">
            <h3 className = "my-5">Our Values</h3>
            <CardGroup>
                    <Card className = "mx-5">
                    <Card.Body>
                    <Card.Title>Empowerment</Card.Title>
                    <Card.Text>
                    We are driven by our belief in the power of education and skills training to change people’s lives for the better and are passionate about providing an overall learning experience that meets their needs and helps them to achieve life goals.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "mx-5">
                    <Card.Body>
                    <Card.Title>Knowledge</Card.Title>
                    <Card.Text>
                    We are experts in the field of online education and are rigorous in delivering high quality learning materials, services and experiences that deliver the learning outcomes we have promised.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "mx-5">
                    <Card.Body>
                    <Card.Title>Innovation</Card.Title>
                    <Card.Text>
                    We will not be constrained by what already exists but will lead the way in introducing new ways to achieve our mission. Our DNA is entrepreneurial and we understand and embrace the pioneering spirit that motivates other entrepreneurs.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            </div>
        </div>
    );
};

export default About;