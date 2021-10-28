import React from 'react';
import { useParams } from 'react-router';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import './CourseDetails.css';

const CourseDetails = () => {
    const { id } = useParams();

    const [courses] = useFullCourse(false);
    
    const filteredCourse = courses.filter(course => course.courseId == id);
   
    return (
        <div className="details-container">
            {
                filteredCourse.length && <h1>{filteredCourse[0].courseName}</h1>
            }
        </div>
    );
};

export default CourseDetails;