import React from 'react'
import StdNav from './components/StdNav/StdNav'
import './land.css'
import { Link } from 'react-router-dom'
const Land = () => {
  return (
    <div> 
      <StdNav/>
      <div className="grid0">
      <div>
        <Link to="/atendence">
        <div className="mycard">
          <div className="contet">
            <img src="https://cdn-icons-png.flaticon.com/512/2/2123.png" alt="" />
            <h2>Attendence</h2>
          </div>
        </div>
        </Link>
      </div>
      <div>
        <div className="mycard">
          <div className="contet">
            <img src="https://e7.pngegg.com/pngimages/975/594/png-clipart-computer-icons-others-miscellaneous-text.png" alt="" />
            <h2>Time Table</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="mycard">
          <div className="contet">
            <img src="https://cdn-icons-png.flaticon.com/512/4491/4491806.png" alt="" />
            <h2>Fess</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="mycard">
          <div className="contet">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-library-local-read-book-education-30502.png" alt="" />
            <h2>Library</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="mycard">
          <div className="contet">
            <img src="https://static.thenounproject.com/png/3202074-200.png" alt="" />
            <h2>Assinment</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="mycard">
          <div className="contet">
            <img src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/cog-settings-512.png" alt="" />
            <h2>Settings</h2>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Land

