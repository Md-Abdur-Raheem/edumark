import React from 'react';
import {  Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useHomeCourse from '../../hooks/useHomeCourse/useHomeCourse';
import Course from '../Course/Course';
import './PopularCourses.css'

const PopularCourses = () => {
    const [courses] = useHomeCourse();
    const history = useHistory();
    const handleMoreBtn = () => {
        history.push('/courses')
    }
    return (
        <Container>
            <div>
                <h1 className = "title">Popular Courses</h1>
            </div>
            <Row className ="gy-4">
                {
                     courses.map(course => <Course key={course.courseId} course = {course}></Course>)
                }
            </Row>
            <Button onClick = {handleMoreBtn} className = "more-btn my-5">More Courses</Button>
        </Container>
    );
};

export default PopularCourses;