import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAddedCourse from '../../hooks/useAddedCourse/useAddedCourse';
import AddedCourse from '../AddedCourse/AddedCourse';
import './Cart.css'

const Cart = () => {
    const [control, setControl] = useState(false);
    const [addedCourse] = useAddedCourse(control);



    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure to delete the course?');
        if (confirmation) {
            fetch(`https://floating-ridge-99224.herokuapp.com/addedCourse/${id}`, {
            method: "DELETE",
            headers:{"content-type": "application/json"}
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Successfully deleted');
                    setControl(!control);
                }    
            })
        }
        else {
            return;
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
                        addedCourse.map((crs, index) => <AddedCourse key={crs.addedCourses._id} course={crs} index={index} handleDelete={()=>handleDelete(crs?._id)}></AddedCourse>)
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default Cart;