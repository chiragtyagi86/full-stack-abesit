import React from 'react'
import './StdLogin.css'
import { Link } from 'react-router-dom'

const StdLogin = () => {

  return (
    <div>
      <div id='banner'></div>
      <div className="stdlogin">
        <div className='form'>
          <h1>STUDENT LOGIN</h1>
          <input type="text" placeholder='ENTER YOUR ADMISISON NUMBER' />
          <input type="password" name="" id=""  placeholder='password'/>
        <Link to='/student'><button>LOGIN</button></Link>
        </div>
      </div>
    </div>
  )
}

export default StdLogin
