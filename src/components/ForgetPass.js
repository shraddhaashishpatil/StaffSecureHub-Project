import React from "react";
import { useForm } from "react-hook-form";
import { Employee } from "../api/employee";

const ForgetPass = () => {

    const {register, handleSubmit, watch, formState: { errors }, setError } = useForm();
    
    const onSubmit = async (data) => {
        try {
            const response = await Employee.forgotpassword(data);
            console.log(response);

            //check response
            if(response.result){
                // password reset successful
                console.log("Password reset successful");
            } else {
                // password reset failed handle the error
                setError("email", {message: response.err || "Password reset failed"});
            }
        } catch (error){
            console.log("Error occured", error);
        }
    }
    return (
        <>
            <div className="container-fluid bg-color">
                <div className="row row-height"></div>
                <div className="row text-center">
                    <div className="col-4"></div>
                    <div className="col-4 forgetPass-lm-p">

                        <h2>Reset account Password</h2>
                        <p>Enter a new password</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})}
                                    //^S+@\S+$/i/ 
                                    type="text" 
                                    placeholder="Enter Email" 
                                    className="text-hw" 
                                    autoComplete="off" />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                            <br />
                            <div className="form-group">
                                <input {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                                    type="password" 
                                    placeholder="Enter New Password" 
                                    className="text-hw " 
                                    autoComplete="off" />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <br />
                            <div className="form-group">
                                <input {...register("confirmPassword", { validate: value => value === watch('password') || "Passwords do not match" })}
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    className="text-hw" 
                                    autoComplete="off" />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                            </div>
                            <br />                        
                            <button type= "submit" className="resetPass">Reset Password</button>
                        </form> 
                    </div> 
                    <div className="col4"></div>
                </div>
                <div className="row row-height"></div>  
            </div>
        </>
    )

}
export default ForgetPass