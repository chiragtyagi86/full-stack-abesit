import React from 'react'
import './Css/Login.css'
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
const Login = () => {
  return (
    <div>
      <Navbar/>
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

      <Link to='/FacltyLogin'>
        <div className="link">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIF-wyvLq4F5Kym4ROkUsANwjdRvs0EFxOtg&usqp=CAU" alt="" />
         <h2> LOGIN AS FACULTY</h2>
        </div>
      </Link>
      </div>
    </div>
    <Footer/>
      </div>
  )
}

export default Login
