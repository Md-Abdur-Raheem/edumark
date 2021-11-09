import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './CourseDetails.css';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    useEffect(() => {
        fetch(`https://floating-ridge-99224.herokuapp.com/all-course/${id}`)
            .then(res => res.json())
        .then(data => setCourse(data))
    },[id])
   
    return (
        <div className="details-container">
            <h1>{ course?.courseName }</h1>
        </div>
    );
};

export default CourseDetails;