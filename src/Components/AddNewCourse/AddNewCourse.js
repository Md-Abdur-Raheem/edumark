import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewCourse.css'

const AddNewCourse = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { courseName, category, thumbs, rating, price, description } = data;
        const newCourse = { courseName, category, thumbs, rating, price, description };
        
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
                <label className="me-3">Course Name :</label>
                <input className="px-2 py-1 w-25"  type="text" placeholder="Course Name" {...register("courseName", { required: true })} />
                <br /><br />
                <label className="me-5">Category :</label>
                <input className="px-2 py-1 w-25" type="text" placeholder="Category" {...register("category", { required: true })} />
                <br /><br />
                <label className="me-5">Img URL :</label>
                <input className="ms-1 px-2 py-1 w-25" type="text" placeholder="Img URL" defaultValue="https://i.ibb.co/m413Dmf/alison-icon-default.png" {...register("thumbs", { required: true })} />
                <br /><br />
                <label className="me-5">Rating :</label>
                <input className="ms-3 px-2 py-1 w-25" type="text" placeholder="Rating" {...register("rating", { required: true })} />
                <br /><br />
                <label className="me-5">Price :</label>
                <input className="ms-4 px-2 py-1 w-25" type="number" placeholder="Price" {...register("price", { required: true })} />
                <br /><br />
                <textarea className="p-4 py-1 w-50" rows="10" type="number" placeholder="Description" {...register("description", { required: true })} />
                <br /><br />
                {errors.exampleRequired && <span>This field is required</span>}
      
                <input className = "login-btn btn mb-5" type="submit" />
            </form>
        </div>
    );
};

export default AddNewCourse;