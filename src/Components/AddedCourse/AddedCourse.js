import React from 'react';
import { NavLink } from 'react-router-dom';
import './AddedCourse.css'

const AddedCourse = (props) => {
    const { courseName, category, price, courseId } = props.course.addedCourses;
    const { handleDelete } = props;
    const { index } = props;
    
return (
        <tr>
        <td>{index+1}</td>
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