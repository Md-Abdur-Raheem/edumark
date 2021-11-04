import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses] = useFullCourse(false);
    return (
        <div className = "courses-container">
            <Container className = "my-5 ">
                <Row className ="gy-4">
                    {
                        courses.map(course => <Course key={course._id} course = {course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;