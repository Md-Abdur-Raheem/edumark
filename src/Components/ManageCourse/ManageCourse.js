import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAllAddedCourse from '../../hooks/useAllAddedCourse/useAllAddedCourse';
import useFullCourse from '../../hooks/useFullCourse/useFullCourse';
import './ManageCourse.css'

const ManageCourse = () => {
    const [control, setControl] = useState(false);
    const [courses] = useFullCourse(control);
    const [allAddedCourse] = useAllAddedCourse();
    
    const handleDelete = (id) => {
        const confirmation = window.confirm(' All the users enrolling this course will loose their data and access. \r\n Are you sure you want to delete?');
        if (confirmation) {
            fetch(`https://floating-ridge-99224.herokuapp.com/all-courses/${id}`, {
            method: "DELETE",
            headers:{'content-type': 'application/json'}
        })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount >= 1) {
                        alert('Course successfully deleted');

                        const sameAddedCourse = allAddedCourse.filter(c => c.addedCourses._id === id);
                        if (sameAddedCourse) {
                            sameAddedCourse.map(s => fetch(`https://floating-ridge-99224.herokuapp.com/addedCourse/${s?._id}`, {
                                method: "DELETE",
                                headers:{"content-type": "application/json"}
                                })
                                .then(res => res.json())
                                    .then(data => {
                                    if (data.deletedCount) {
                                        setControl(!control);
                                    }    
                                })
                            )
                        }
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
                    <th>#</th>
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
                   courses.map((c, index) => <tr key = {c._id}>
                        <td><b>{index+1}</b></td>
                        <td>{c?._id}</td>
                        <td><img src={c?.thumbs} alt="" className="thumbs"/></td>
                        <td><b>{c?.courseName}</b></td>
                        <td>{c?.category}</td>
                        <td>{c?.rating}</td>
                        <td><b>${c?.price}</b></td>
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