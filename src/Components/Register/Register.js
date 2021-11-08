import React from 'react';
import './Register.css'
import { useForm } from "react-hook-form";
import img from '../../media/register.jpg';
import google from '../../media/google.png';
import facebook from '../../media/facebook.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';


const Register = () => {

    const { loginWithGoogle, error, setError, registerUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { name, email, password, rePassword } = data;

        if (password !== rePassword) {
            setError("Password doesn't match");
            return;
        }
        else {
            registerUser(email, password, name)
        }
    }

    return (
        <div className = "reg-container">
            <div className = "d-flex justify-content-center align-items-center h-75">
                <div className="reg-form-container">
                    <h5 className = "register text-end">Register Now</h5>
                    <h3 className = "sign">Sign up</h3>
                    <form className = "reg-form d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
                        
                        <input type="text" placeholder="Full name" className="fontAwesome" {...register("name", { required: true })} />
                        
                        <input type="email" placeholder = "Email" {...register("email", { required: true })} />
                        
                        <input type="password" placeholder="Password" {...register("password", { required: true })} />
                        
                        <input type="password" placeholder="Re enter password" {...register("rePassword", { required: true })} />
                        
                        <div>
                            <h6 style={{display: 'inline-block'}}>Photo</h6>
                            <input style={{ border: "none", backgroundColor: "#6f3dde", color: "white", width:"fit-content"}} type="file" name = "Profile picture" ref={register} {...register("photo")} />
                        </div>
                        
                        {errors.exampleRequired && <span style={{color:"red", margin:"10px"}}>This field is required</span>}
                        <p style={{color:"red"}}>{error}</p>
                        <button type="submit" className = "w-25 login-btn btn mt-5">Register</button>
                    </form>
                    <br />
                    <div>
                        <p><b>Or sign up with</b></p>
                        <NavLink onClick = {loginWithGoogle} className="login-logo" to="/home"><img src={google} alt="" /></NavLink>
                        <NavLink className="login-logo" to="/create-account"><img src={facebook} alt="" /></NavLink>
                    </div>
                </div>
                <div className ="reg-img-container"><img src={img} alt=""/></div>
            </div>
        </div>
    );
};

export default Register;