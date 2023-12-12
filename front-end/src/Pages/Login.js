// src/App.js
import React, { useState } from 'react';
import './Css/Login.css'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const notify = () => 
  
  toast("USER REGESTERD");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3500/api/register', formData);
      console.log(response.data);

    } catch (error) {
      console.error(error.response.data);
      // Handle error, display an error message, or redirect to an error page
    }
  };

  return (
    <div className="login">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>

          <input type="text" name="username" onChange={handleChange} placeholder='USERNAME' required />

          <input type="email" name="email" onChange={handleChange} placeholder='EMAIL' required />

          <input type="password" name="password" onChange={handleChange} placeholder='PASSWORD' required />

        <button type="submit" onClick={notify}>SUBMIT REVIEW</button>
        <ToastContainer/>
      </form>
    </div>
  );
}

export default App;
