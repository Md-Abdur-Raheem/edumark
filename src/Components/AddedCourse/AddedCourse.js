import React from 'react';

const AddedCourse = (props) => {
    const { courseName } = props.course;
    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    );
};

export default AddedCourse;