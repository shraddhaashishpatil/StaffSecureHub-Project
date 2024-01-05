import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp"
import ForgetPass from './ForgetPass';
import EmpRegisterForm from './EmpRegisterForm';
import TableViewer from './TableViewer';
import Update from './Update';

function DashBoard() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Home />}></Route>
          <Route exact path="/login" element = { <SignIn />}></Route>
          <Route exact path="/signup" element = {<SignUp />}></Route>
          <Route exat path="/forgetPass" element={<ForgetPass />}></Route>
          <Route exat path="/empRegister" element={<EmpRegisterForm/>}></Route>
          <Route exat path="/tableViewer" element={<TableViewer/>}></Route>
          <Route exat path="/updateEmp" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      
     
      
    </div>
  )
}

export default DashBoard
