import React from 'react'
import { Link } from 'react-router-dom'
import './MainNav.css'

const MainNav = () => {
  return (
    <div className='mainblue'>
      <div className="pic">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      </div>
      <div className="mainnav">
        <ul>
        <Link>
        <li>
            DASHBORD
        </li>
        </Link>
        <Link>
        <li>
            ATTENDENCE
        </li>
        </Link>
        <Link>
        <li>
            TIME TABLE
        </li>
        </Link>
        <Link>
        <li>
            ACCOUNT & FEES
        </li>
        </Link>
        <Link>
        <li>
            ASSINMENTS
        </li>
        </Link>
        <Link>
        <li>
            SETINGS
        </li>
        </Link>
        </ul>
      </div>
      <div className="version">
        <h1>2.1.0</h1>
      </div>
    </div>
  )
}

export default MainNav
