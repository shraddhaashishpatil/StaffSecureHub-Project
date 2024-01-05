import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Emp } from "../api/emp";   //***api folder/emp.js   ***//
import { useLocation, useNavigate } from "react-router-dom";

const Update = (props) => { 
    const { state } = useLocation()
console.log(state);
    // destructing for validation and contains validation error
    const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm();

    // pre-fill form fields with state data
    useEffect(()=> {
        if(state){
            Object.keys(state).forEach((key) => {
               setValue(key, state[key]); 
            });
        }
    }, [state, setValue]);
    
    
    // Update data using update(Put)
    const onSubmit = async (data) => {
        try{

             //empId is a property in the state object
             const empId = state.empId;
             
            const response = await Emp.update(empId, data);
            console.log(data);
            
            //check response 
            if(response.result){
                // positive
                console.log("Data updated successfully")
            } else {
                // negative
                setError("failed to updated");
            }
        } catch (error) {
            console.log("Error occured", error);
            setError("Failed to update data. Please try again.");
        }
    }; 
    
    //Navigate to home page.
    var showData = useNavigate();
    const handleShowData = () => {
        showData("/tableViewer");
    }

    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <h5 className="text-center">Employee Update Form</h5>
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <form className="form-m-t" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col">
                                        <input className="input-hw" {...register("empFirstName", { required: "firstname is required", minlength: { value: 2, message: "firstname must be at least min 2 char long" } })} type="text" placeholder="FirstName *" />
                                        {errors.empFirstName && <p className="error-color">{errors.empFirstName.message}</p>}
                                    </div>
                                    <div className="col">
                                        <input className="input-hw" {...register("empLastName", { required: "lastname is required", minlength: { value: 2, message: "last name must be at least 2 char long" } })} type="text" placeholder="LastName *" />
                                        {errors.empLastName && <p className="error-color" >{errors.empLastName.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col radio-h-w">
                                        <p className="ml-gender-isEmpActive">Gender : </p>
                                        <div className="radio-buttons">
                                            <label>
                                                <input type="radio" name="gender" value="Male" {...register("gender", { required: "Please select a gender" })} className="input-w" />
                                                Male
                                            </label>
                                            <label>
                                                <input type="radio" name="gender" value="female" {...register("gender", { required: "please select a gender" })} className="input-w" />
                                                Female
                                            </label>
                                            <label>
                                                <input type="radio" name="gender" value="others" {...register("gender", { required: "please select a gender" })} className="input-w" />
                                                Others
                                            </label>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;
                                        {errors.gender && <p className="error-color">{errors.gender.message}</p>}

                                    </div>
                                    <div className="col">
                                        <input {...register("salary", { required: "salary is required" })} className="input-hw" type="number" placeholder="Salary *" />
                                        {errors.salary && <p className="error-color">{errors.salary.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input {...register("city", { required: "city is required" })} className="input-hw" type="text" placeholder="city *" />
                                        {errors.city && <p className="error-color">{errors.city.message}</p>}
                                    </div>

                                    <div className="col">
                                        <input {...register("email", { required: "email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} className="input-hw" type="email" placeholder="email *" />
                                        {errors.email && <p className="error-color">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input {...register("password", { required: "password is required", minlength: { value: 6, message: "password must be atleast 6 char long" } })} className="input-hw" type="password" placeholder="password *" />
                                        {errors.password && <p className="error-color">{errors.password.message}</p>}
                                    </div>

                                    <div className="col">
                                        <input {...register("phoneNumber", {
                                            required: "Phone Number is required", pattern: {
                                                value: /^\d{10}$/,
                                                message: "Invalid phone number format"
                                            }
                                        })} className="input-hw" type="tel" placeholder="phoneNumber *" />
                                        {errors.phoneNumber && <p className="error-color">{errors.phoneNumber.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input {...register("birthDate", { required: "birthDate is required" })} className="input-hw" type="text" placeholder="birthDate *" />
                                        {errors.birthDate && <p className="error-color">{errors.birthDate.message}</p>}
                                    </div>

                                    <div className="col radio-h-w">
                                        <p className="ml-gender-isEmpActive">IsEmpActive : </p>
                                        <div className="radio-buttons">
                                            <label>
                                                <input type="radio" name="isEmpActive" value="true" {...register("isEmpActive", { required: "isEmpActive is required" })} className="input-w" />
                                                True
                                            </label>
                                            <label>
                                                <input type="radio" name="isEmpActive" value="false" {...register("isEmpActive", { required: "isEmpActive is required" })} className="input-w" />
                                                False
                                            </label>
                                        </div>
                                        &nbsp;&nbsp;
                                        {errors.isEmpActive && <p className="error-color">{errors.isEmpActive.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input {...register("hireDate", { required: "hireDate is required" })} className="input-hw" type="text" placeholder="hireDate *" />
                                        {errors.hireDate && <p className="error-color">{errors.hireDate.message}</p>}
                                    </div>

                                    <div className="col">
                                        <select {...register("country", { required: "Country is required" })} className="input-hw">
                                            <option value="">Select Country</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Iran">Iran</option>
                                            <option value="India">India</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                        {errors.country && <p className="error-color">{errors.country.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <select {...register("countryCode", { required: "countryCode is required" })} className="input-hw">
                                            <option value="">Select Country Code</option>
                                            <option value="+93">+93 Afg </option>
                                            <option value="+880">+880 Banlg</option>
                                            <option value="+98">+98 Irn</option>
                                            <option value="+91">+91 Ind</option>
                                            <option value="+960">+960 Malvs</option>
                                            <option value="+260">+260 Zibw</option>
                                        </select>
                                        {errors.countryCode && <p className="error-color">{errors.countryCode.message}</p>}
                                    </div>
                                    <div className="col">
                                        <select {...register("officeLocation", { required: "office location is required" })} className="input-hw">
                                            <option value="">Select Office location</option>
                                            <option value="Pune">Pune</option>
                                            <option value="Mumbai">Mumbai</option>
                                            <option value="Banglore">Banglore</option>
                                        </select>
                                        {errors.officeLocation && <p className="error-color">{errors.officeLocation.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input {...register("bankAccountNo", { required: "bankAccountNo is required" })} className="input-hw" type="text" placeholder="bankAccountNo *" />
                                        {errors.bankAccountNo && <p className="error-color">{errors.bankAccountNo.message}</p>}
                                    </div>
                                    <div className="col">
                                        <input {...register("ifscCode", { required: "ifscCode is required" })} className="input-hw" type="text" placeholder="ifscCode *" />
                                        {errors.ifscCode && <p className="error-color">{errors.ifscCode.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input {...register("aadharCardNo", { required: "aadharCardNo is required", pattern: { value: /^\d{12}$/, message: "Invalid Adhar Card Number" } })} className="input-hw" type="text" placeholder="aadharCardNo *" />
                                        {errors.aadharCardNo && <p className="error-color">{errors.aadharCardNo.message}</p>}
                                    </div>
                                    <div className="col">
                                        <input {...register("panCardNo", { required: "Pan card number is required", pattern: { value: /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, message: " Invalid PAN card number" } })} className="input-hw" type="text" placeholder="panCardNo *" />
                                        {errors.panCardNo && <p className="error-color">{errors.panCardNo.message}</p>}
                                    </div>
                                </div>
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info">Update</button>
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-info" onClick={handleShowData}>Show Data</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Update

