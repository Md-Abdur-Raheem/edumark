import React from 'react';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses/useCourses';
import './AddedCourse.css'

const AddedCourse = (props) => {
    const [course] = useCourses(false);
    
    const { courseName, category, price, courseId } = props.course;
    const { handleDelete } = props;

    const addedCourses = course.find(c => c.courseId === courseId);
    let index = course.map(() => course.indexOf(addedCourses));
    if (!index.length) {
        index = [''];
    }

 
    
return (
        <tr>
        <td>{index[0]+1}</td>
            <td>{courseName}</td>
            <td>{category}</td>
        <td>{price}</td>
        <td>
            <NavLink to="/confirmEnroll"><button className="confirm-btn">Confirm Enroll</button></NavLink>
            <button className="delete-btn" onClick={()=>{handleDelete(courseId)}}>Delete Course</button>
        </td>
        </tr>
    );
};

export default AddedCourse;