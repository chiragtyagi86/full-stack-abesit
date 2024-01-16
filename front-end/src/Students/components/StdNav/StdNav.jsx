import React from 'react'
import './StdNav.css'
import logo from './college-logo.png'

import { Link } from 'react-router-dom'

const StdNav = () => {
  return (
    <div className='stdnav'>
      <div className="brand">
        <img src={logo} alt="" />

      </div>
  
      <div className="icons">
        <button>LOGOUT</button>
      </div>

    </div>
  )
}

export default StdNav
