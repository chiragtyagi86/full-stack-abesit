import React, { useState } from "react";
import "./StdLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StdLogin = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/student");
        }else{
          toast.warning("User Not Found")
        }
      });
  };
  return (
    <div className="login-op">
      <div className="login-container">
        <h2>STUDENT LOGIN</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setusername(e.target.value)}
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
       <div className="toast">
       <ToastContainer/>
       </div>
      </div>
    </div>
  );
};

export default StdLogin;
