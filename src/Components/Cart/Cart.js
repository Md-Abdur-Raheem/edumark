import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses/useCourses';
import AddedCourse from '../AddedCourse/AddedCourse';
import { removeFromDb } from '../utilities/localStorage';
import './Cart.css'

const Cart = () => {
    const [updating, setUpdating] = useState(false);
    const [course] = useCourses(updating);

    const handleDelete = (id) => {
        const confirmation = window.confirm('are you sure?');
        if (confirmation) {
            removeFromDb(id);
            setUpdating(true);
        }
    }

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
                        course.map(crs => <AddedCourse key={crs.courseId} course={crs} handleDelete={handleDelete}></AddedCourse>)
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default Cart;