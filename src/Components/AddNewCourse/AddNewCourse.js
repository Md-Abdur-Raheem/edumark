import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewCourse.css'

const AddNewCourse = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { courseId, courseName, category, thumbs, rating, price, description } = data;
        const newCourse = { courseId, courseName, category, thumbs, rating, price, description };
        
        fetch('https://floating-ridge-99224.herokuapp.com/add-new-course', {
            method:"POST",
            headers: {
                'content-type':"application/json"
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Course Successfully Added')
                    reset()
                }
            })
    }

    return (
        <div className="add-new-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="me-3">Courseid :</label>
                <input className="px-2 py-1 w-25" type="number" placeholder="Course ID" {...register("courseId", { required: true })} />
                <br /><br />
                <label className="me-3">Course Name :</label>
                <input className="px-2 py-1 w-25"  type="text" placeholder="Course Name" {...register("courseName", { required: true })} />
                <br /><br />
                <label className="me-3">Category :</label>
                <input className="px-2 py-1 w-25" type="text" placeholder="Category" {...register("category", { required: true })} />
                <br /><br />
                <label className="me-3">Img URL :</label>
                <input className="px-2 py-1 w-25" type="text" placeholder="Img URL" {...register("thumbs", { required: true })} />
                <br /><br />
                <label className="me-3">Rating :</label>
                <input className="px-2 py-1 w-25" type="text" placeholder="Rating" {...register("rating", { required: true })} />
                <br /><br />
                <label className="me-3">Price :</label>
                <input className="px-2 py-1 w-25" type="number" placeholder="Price" {...register("price", { required: true })} />
                <br /><br />
                <textarea className="px-2 py-1 w-25 h-25" type="number" placeholder="Description" {...register("description", { required: true })} />
                <br /><br />
                {errors.exampleRequired && <span>This field is required</span>}
      
                <input className = "login-btn btn mb-5" type="submit" />
            </form>
        </div>
    );
};

export default AddNewCourse;