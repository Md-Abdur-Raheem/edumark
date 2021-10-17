import React from 'react';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses/useCourses';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import AddedCourse from '../AddedCourse/AddedCourse';
import './Cart.css'

const Cart = () => {
    const [courses] = useFullCourse();
    const [course] = useCourses(courses);

    return (
        <div className = "cart-container">
            <h1>I am from cart</h1>
            {
                course.map(crs => <AddedCourse key = {crs.courseId} course = {crs}></AddedCourse>)
            }
            <NavLink to = "/confirmEnroll"><button>Confirm Enroll</button></NavLink>
        </div>
    );
};

export default Cart;