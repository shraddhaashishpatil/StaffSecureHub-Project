import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Employee } from "../api/employee"
import { useNavigate } from "react-router-dom";
 
function SignIn() {

  const history = useNavigate();

  // create state for form data and errors
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value,
     
    });
  };


  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate form data
    const validationErrors = {};

    // email validation
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    // password validation
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    // set errors in state
    setErrors(validationErrors);

    // if no validation errors, proceed with login
    if (Object.keys(validationErrors).length === 0) {
      try {
        const {result} = await Employee.login(formData);
        console.log("Response Data:", result);
    
        // Adjust this condition based on the actual structure of the server response
        if(result.status === 200){
          console.log("Login successful");
          alert("Login Successful");
          history("/");
        } else {
          console.log("Login Failed -other error");
          alert("Login Failed");
        }
      } catch (error) {
        console.error("Email or Password not found");
        alert("Email or Password not found");
      }
    }
  };

  return (
    <>
      <div className="bgcolor">
        <div className="welcome-pt">
          <h2>Welcome Back!</h2>
        </div>
        <div>
          <form className="from-hw" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control bottom-border ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label> 
              <input
                type="password"
                className={`form-control bottom-border ${errors.password ? "is-invalid" : ""}`}

                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <button type="submit" className="login-hw">
              Login
            </button>
            <br /><br />
            <div className="forgetpass">
              <Link to="/forgetPass">Forget Password ?</Link>
            </div>
          </form>
        </div>
        <div className="signin-pb">
          Don't have an account? <Link className="signin-link" to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
