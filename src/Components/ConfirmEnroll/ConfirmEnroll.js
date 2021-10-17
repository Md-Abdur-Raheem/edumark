import React from 'react';
import './ConfirmEnroll.css'
import user from '../../media/user.png'

const ConfirmEnroll = () => {
    return (
        <div className = "App confirm-container">
            <h1>Your enrolling has been confirmed.</h1>
            <img src={user} alt="" />
        </div>
    );
};

export default ConfirmEnroll;