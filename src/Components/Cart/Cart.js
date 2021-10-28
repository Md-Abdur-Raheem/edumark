import React from 'react';
import { Table } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses/useCourses';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import AddedCourse from '../AddedCourse/AddedCourse';
import './Cart.css'

const Cart = () => {
    const [courses] = useFullCourse();
    const [course] = useCourses(courses);

    return (
        <div className = "cart-container container">
            <Table striped bordered hover className="w-75">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Course Name</th>
                    <th>Category</th>
                        <th>Price</th>
                        <th>Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        course.map(crs => <AddedCourse key={crs.courseId} course={crs}></AddedCourse>)
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default Cart;