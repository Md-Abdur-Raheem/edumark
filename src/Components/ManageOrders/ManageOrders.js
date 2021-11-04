import React from 'react';
import { Table } from 'react-bootstrap';
import useAllAddedCourse from '../../hooks/useAllAddedCourse/useAllAddedCourse';

const ManageOrders = () => {
    const [allAddedCourse] = useAllAddedCourse();
    return (
        <Table className="manage-container">
        <thead>
            <tr>
                <th>#</th>
                <th>Enrolled id</th>
                <th>User Email</th>
                <th>Enrolled Course Id</th>
                <th>Course Name</th>
            </tr>
        </thead>
        <tbody>
            {
               allAddedCourse.map((c, index) => <tr key = {c._id}>
                    <td><b>{index+1}</b></td>
                    <td>{c?._id}</td>
                    <td><b>{ c?.email}</b></td>
                    <td>{c?.addedCourses?._id}</td>
                    <td><b>{c?.addedCourses?.courseName}</b></td>
                    <td>
                    {/* <button className="confirm-btn">Update Course</button> */}
                        {/* <button className="delete-btn" onClick={()=>{handleDelete(c._id)}}>Delete Course</button> */}
                    </td>
                </tr>)
            }
        </tbody>
    </Table>
    );
};

export default ManageOrders;