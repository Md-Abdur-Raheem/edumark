import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import './ManageCourse.css'

const ManageCourse = () => {
    const [updating, setUpdating] = useState(false);
    const [courses] = useFullCourse(updating);
    
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete?');
        if (confirmation) {
            fetch(`https://floating-ridge-99224.herokuapp.com/all-courses/${id}`, {
            method: "DELETE",
            headers:{'content-type': 'application/json'}
        })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount >= 1) {
                        alert('Course successfully deleted')
                        setUpdating(true);
                }
            })
        }
        else {
            return;
        }
        
    }
    
    return (
        <Table className="manage-container">
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Thumbnail</th>
                    <th>Course Name</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Control</th>
                </tr>
            </thead>
            <tbody>
                {
                   courses.map(c => <tr key = {c.courseId}>
                        <td>{c.courseId}</td>
                        <td><img src={c.thumbs} alt="" className="thumbs"/></td>
                        <td>{c.courseName}</td>
                        <td>{c.category}</td>
                        <td>{c.rating}</td>
                        <td>{c.price}</td>
                        <td>
                        <button className="confirm-btn">Update Course</button>
                            <button className="delete-btn" onClick={()=>{handleDelete(c._id)}}>Delete Course</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default ManageCourse;