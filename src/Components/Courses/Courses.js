import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import Course from '../Course/Course';

const Courses = () => {
    const [courses] = useFullCourse();
    return (
        <Container className = "mt-5">
            <Row className ="gy-4">
                {
                     courses.map(course => <Course key={course.courseId} course = {course}></Course>)
                }
            </Row>
        </Container>
    );
};

export default Courses;