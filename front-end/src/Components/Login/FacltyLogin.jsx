import React from 'react'
import  { useState } from "react";
import "./FacltyLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FacltyLogin = () => {
  const [empID, setempID] = useState();
  const [fpassword, setfpassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/faculty", { empID, fpassword })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/Dashbord");
        }
      });
  };
  return (
    <div className="login-op">
      <div className="login-container">
        <h2> FACULTY LOGIN</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setempID(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setfpassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};


export default FacltyLogin
