import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

const AdminPanel = () => {
    const [smSuccessShow, setSmSuccessShow] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [email, setEmail] = useState('');
    const [admins, setAdmins] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/users/admin?query=Admin')
            .then(res => res.json())
            .then(data => setAdmins(data))
    },[control])

    const handleOnBlur = e => {
        const input = e.target.value;
        setEmail(input);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const admin = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSmSuccessShow(true);
                    setControl(!control);
                    const emailField = document.getElementById('email-field');
                    emailField.value = '';
                }
            })
        
        
    }

    const handleRemove = email => {
        const confirmation = window.confirm('Are you sure you to remove this person from admin panel?');
        if (confirmation) {
            fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers:{'content-type':'application/json'}
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSmShow(true);
                    setControl(!control);
                }
            })
        }
        
    }
    return (
        <div className="container manage-container">
            <h1>Admin Panel</h1>
            <br />
            <form onSubmit={handleOnSubmit} className="d-flex mb-5">
                <Form.Control id="email-field" onBlur={handleOnBlur} size="lg" type="email" placeholder="Email address" />
                <Button type="submit" className="start-btn">Make Admin</Button>
            </form>
            <Modal
                size="sm"
                show={smSuccessShow}
                onHide={() => setSmSuccessShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Success Message
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Admin made successfully.
                </Modal.Body>
            </Modal>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Success Message
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Admin removed successfully.
                </Modal.Body>
            </Modal>

            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Admin Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admins.map((admin, index)=><tr key={admin._id}>
                            <td>{ index + 1 }</td>
                            <td>{ admin.name }</td>
                            <td>{ admin.email }</td>
                            <td><Button onClick = {()=>handleRemove(admin.email)} variant="danger">Remove</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AdminPanel;