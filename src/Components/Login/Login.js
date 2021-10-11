import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import img from '../../media/login.png';
import google from '../../media/google.png'
import facebook from '../../media/facebook.png'
import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className = "login-container">
            <div className = "d-flex justify-content-center align-items-center h-75">
                <div className ="img-container"><img src={img} alt=""/></div>
                <div className="form-container">
                    <h5 className = "welcome text-start">Welcome back</h5>
                    <h5 className = "login">Login to your account</h5>
                    <form className = "login-form d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
                        
                        <input placeholder = "Email" {...register("example")} />
                        
                        
                        <input placeholder = "Password" {...register("exampleRequired", { required: true })} />
                        
                        {errors.exampleRequired && <span style={{color:"red", margin:"10px"}}>This field is required</span>}
                        
                        <button className = "w-25 login-btn btn" type="submit">Login</button>
                    </form>
                    <br />
                    <p><NavLink className="create" to="/create-account">Create Account</NavLink></p>
                    <div>
                        <p>Or login with</p>
                        <NavLink className="login-logo" to="/create-account"><img src={google} alt="" /></NavLink>
                        <NavLink className="login-logo" to="/create-account"><img src={facebook} alt="" /></NavLink>
                    </div>
                    <br />
                    <p><NavLink className="create" to="/create-account">Forgot password?</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;