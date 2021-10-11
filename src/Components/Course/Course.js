import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Course.css'

const Course = (props) => {
    const { courseName, category, thumbs, rating, price} = props.course;
    const history = useHistory();
    const handleStartBtn = () => {
        history.push('/login');
    }
    return (
        <Col lg={4}  className = "card-container mx-auto">
            <CardGroup className = "h-100">
                <Card>
                    <div  className="thumbs-container">
                    <Card.Img className = "course-thumbs" variant="top" src= {thumbs} />
                    </div>
                    <Card.Body className="text-start">
                        <Card.Text style = {{color:"grey"}}>{category}</Card.Text>
                        <Card.Title  className = "card-title">{courseName}</Card.Title>
                    </Card.Body>
                    <Button onClick = {handleStartBtn} className = "mb-2 start-btn w-50">Start</Button>
                    <Card.Footer className="foot">
                        <div className = "d-flex justify-content-between">
                            <div>
                                <Rating
                                    emptySymbol={<i className="far fa-star star"></i>}
                                    fullSymbol={<i className="fas fa-star star"></i>}
                                    initialRating={rating}
                                    readonly
                                /> {rating}
                            </div>
                            <p><b>${price}</b></p>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default Course;