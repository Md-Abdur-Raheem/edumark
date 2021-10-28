import React from 'react';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses/useCourses';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';

const AddedCourse = (props) => {
    const [courses] = useFullCourse();
    const [course] = useCourses(courses);
    const { courseName, category, price, courseId } = props.course;
    const addedCourses = course.find(c => c.courseId === courseId);
    let index = course.map(() => course.indexOf(addedCourses));
    
return (
        <tr>
        <td>{index[0]+1}</td>
            <td>{courseName}</td>
            <td>{category}</td>
        <td>{price}</td>
        <td>
            <NavLink to="/confirmEnroll"><button >Confirm Enroll</button></NavLink>
            <NavLink to="/confirmEnroll"><button >Delete Course</button></NavLink>
        </td>
        </tr>
    );
};

export default AddedCourse;