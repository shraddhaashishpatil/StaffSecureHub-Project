import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid nav-bgcolor">
        <div className="row align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-4 ">
                <i className="fa fa-heart ml-heart"></i>
              </div>
              <div className="col-md-8">
                <p className="mr-medium">Medium</p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <NavLink className="nav-bar-link" to="/empRegister">RegisterEmp</NavLink>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Story
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;  
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <NavLink className="nav-bar-link" to="/login">Sign In</NavLink>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
              <NavLink className="nav-bar-link" to="/signup">Sign Up</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <a href="#">
              <button className="getstarted">Get Started</button>
            </a>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/image_1.png"
                  className="d-block w-100 slider-hw"
                  alt="img1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/image_2.png"
                  className="d-block w-100 slider-hw"
                  alt="img2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/image_3.png" 
                  className="d-block w-100 slider-hw"
                  alt="img3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-1"> 
            <i className="fa fa-line-chart  ml-mt" aria-hidden="true"></i>
          </div>
          <div className="col-md-2"> 
            <p className="tMedium-mr-mt">Trending on Medium</p>
          </div>
          <div className="col-md-9">

          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
