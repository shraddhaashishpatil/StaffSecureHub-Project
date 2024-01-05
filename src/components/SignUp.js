import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Employee } from "../api/employee";


function SignUp() {
  const [signupData, setSignUpData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    city:"",
    zipCode:""
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    //clear the error when your start writing
    setError({
      ...error,
      [name] :"",
    });

      setSignUpData({
      ...signupData,
      [name] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!signupData.firstName.trim()) {
      validationErrors.firstName = "FirstName is required";
    } else if (signupData.firstName.trim().length <3) {
      validationErrors.firstName = "FirstName should be atleast more than 3 char";
    }

    if (!signupData.lastName.trim()) {
      validationErrors.lastName = "lastName is required";
    } else if (signupData.lastName.trim().length < 3) {
      validationErrors.lastName = "lastName should be atleast more than 3 char";
    }

    if (!signupData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
      validationErrors.email= "Email is not valid";
    }

    if (!signupData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (signupData.password < 2) {
      validationErrors.password = "Password is not valid";
    }

    if(!signupData.city.trim()){
      validationErrors.city="City is required";
    }
    
    if(!signupData.zipCode.trim()){
      validationErrors.zipCode= "zipCode is required";
    } else if(signupData.zipCode.trim().length < 6){
      validationErrors.zipCode="zipCode is not valid";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = await Employee.create(signupData) 
      console.log("create ",data);
      alert("submitted!!!")

    }
    
  };

  const backbtn = useNavigate();
  const handleback = () => {
    backbtn("/")
  }

  return (
    <>
    <div className="signup-bgcolor">
      <div className ="Signup-mt">
        <h2>Sign Up Form</h2>
      </div>
      <form className="signup-hw" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4" className="fontstyle">First Name</label>
            <input
              type="text"
              className={`form-control bottom-border ${error.firstName ? "is-invalid" : ""}`}  //it checks error.firstName is true it show error
              placeholder="Enter Your First Name"
              name="firstName"
              value={signupData.firstName}
              onChange={handleChange}
            />
            {error.firstName && <div className="invalid-feedback">{error.firstName}</div> }
          </div>
          <br/>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4"className="fontstyle">Last Name</label>
            <input
              type="text"
              className={`form-control bottom-border ${error.lastName ? "is-invalid" : ""}`}
              placeholder="Enter Your Last Name"
              name="lastName"
              value={signupData.lastName}
              onChange={handleChange}
            />
            {error.lastName && <div className="invalid-feedback">{error.lastName}</div> }
          </div>
        </div>
        <br/>
        <div className="form-group col-md-12">
          <label htmlFor="inputAddress" className="fontstyle">Email</label>
          <input
            type="email"
            className={`form-control bottom-border ${error.email ? "is-invalid" : ""}`}
            placeholder="Enter your email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
          {error.email && <div className="invalid-feedback">{error.email}</div> }
        </div>
        <br/>
        <div className="form-group col-md-12">
          <label htmlFor="inputAddress2" className="fontstyle">Password</label>
          <input
            type="password"
            className={`form-control bottom-border ${error.password ? "is-invalid" : ""}`}
            placeholder="Enter Your Password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
          />
          {error.password && <div className="invalid-feedback">{error.password}</div> }
        </div>
        <br/>
        <div className="form-group col-md-12">
          <label htmlFor="inputAddress2" className="fontstyle">City</label>
          <input
            type="text"
            className={`form-control bottom-border ${error.city ? "is-invalid" : ""}`}
            placeholder="Enter Your City"
            name="city"
            value={signupData.city}
            onChange={handleChange}
          />
          {error.city && <div className="invalid-feedback">{error.city}</div> }
        </div>
        <br/>
        <div className="form-group col-md-12">
          <label htmlFor="inputAddress2" className="fontstyle">ZipCode</label>
          <input
            type="number"
            className={`form-control bottom-border ${error.zipCode ? "is-invalid" : ""}`}
            placeholder="Enter Your Zip"
            name="zipCode"
            value={signupData.zipCode}
            onChange={handleChange}
          />
          {error.zipCode && <div className="invalid-feedback">{error.zipCode}</div> }
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-ml">
          Submit
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-primary" onClick={handleback}>
          Back
        </button>
      </form>
      <div className="signup-pt">
          if you have allready account ? <Link className="signup-link" to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
