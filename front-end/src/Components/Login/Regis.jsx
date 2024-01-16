import React from "react";
// import "./StdLogin.css";
import './regis.css'
import { Link, useNavigate } from "react-router-dom";
import  axios  from "axios";
import { useState } from "react";

const Regis = () => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const [name, setname] = useState()
    const [roll_no, setroll_no] = useState()
    const [empID, setempID] = useState()
    const [fname, setfname] = useState()
    const [department, setdepartment] = useState()
    const [fpassword, setfpassword] = useState()
    // const [photo, setphoto] = useState()
    // const navigate= useNavigate()
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3001/regis', {username,password, name, roll_no })
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }
    const handleSubmit2 = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3001/regis2', {empID,fname, fpassword, department})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }
  return (
    <div className="doip">
      <div className="my-flex">
        <div className="my-flex-left">
        <div className="login-container">
        <h2>Student Register</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setusername(e.target.value)}
            required
          />
           <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setname(e.target.value)}
            required
          /> <label htmlFor="roll_no">Roll NO:</label>
          <input
            type="number"
            id="roll_no"
            name="roll_no"
            onChange={(e) => setroll_no(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
            <button type="submit">Login</button>
        </form>
      </div>

        </div>
        <div className="my-flex-right">
        <div className="login-containerp">
        <h2>Faculty Register</h2>
        <form id="loginForm2" onSubmit={handleSubmit2}>
          <label htmlFor="username">Faculty ID:</label>
          <input
            type="text"
            id="empID"
            name="empId"
            onChange={(e) => setempID(e.target.value)}
            required
          />
           <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(e) => setfname(e.target.value)}
            required
          /> <label htmlFor="roll_no">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            onChange={(e) => setdepartment(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="fpassword"
            name="fpassword"
            required
            onChange={(e) => setfpassword(e.target.value)}
          />
            <button type="submit">Login</button>
        </form>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Regis;
