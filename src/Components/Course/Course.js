import React from 'react';
import { useState } from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import useAddedCourse from '../../hooks/useAddedCourse/useAddedCourse';
import useAuth from '../../hooks/useAuth/useAuth';
import './Course.css'

const Course = (props) => {
    const [control, setControl] = useState(false);
    const { user } = useAuth();
    const { course } = props;
    const { courseName, category, thumbs, rating, price, _id } = props.course;
    const [addedCourse] = useAddedCourse(control);

    
    const handleStartBtn = (course, id) => {
        const isAdded = addedCourse.find(c => c?.addedCourses?._id === id);
        if (isAdded) {
            alert('Already added')
            return;
        }
        else {
            const newCourse = { email: user.email, addedCourses: course };
            fetch('https://floating-ridge-99224.herokuapp.com/addedCourse', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newCourse)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Course added successfully');
                        setControl(!control);
                    }
                })
        }
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
                    <Button onClick={()=>{handleStartBtn(course, _id)}} className="mb-2 start-btn w-50">Start</Button>
                    <NavLink to={`/courseDetails/${_id}`}>View Details</NavLink>
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