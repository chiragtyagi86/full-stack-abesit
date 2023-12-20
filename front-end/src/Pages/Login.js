import React from 'react'
import './Css/Login.css'
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div id='banner'></div>
      <div className="login">

      <div className="login-left">
        <h1>LOGIN</h1>
      </div>
      <div className="login-right">
      
      <Link to='/stdLogin'>
       <div className="link">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIrHmdP9tQMLbfp-Wv5M63BGN_tNQKvACiA&usqp=CAU" alt="" />
          <h2>LOGINN AS STUDENT</h2>
        </div>
      </Link> 

      <Link to='/facultyLogin'>
        <div className="link">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIF-wyvLq4F5Kym4ROkUsANwjdRvs0EFxOtg&usqp=CAU" alt="" />
         <h2> LOGIN AS FACULTY</h2>
        </div>
      </Link>
      </div>
    </div>
      </div>
  )
}

export default Login
