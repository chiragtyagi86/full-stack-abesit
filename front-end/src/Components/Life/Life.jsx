import React from 'react'
import './Life.css'

const Life = () => {
  return (
    <div className='ramo'>
        <h1>Life @ ABESIT</h1>
        <h3>Take a look at our world class facilities!</h3>
        <div className="life">
        <div className="life-left">
        <ul>
            <li>Academic Faculities</li>
            <hr />
            <li>campus Faculties</li>
        </ul>
        <button id='blue'>Virtual Campus TOUR</button>
        </div>
        <div className="life-right">
            <img src="https://www.abesit.in/wp-content/themes/abesit/images/class-19.jpg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Life
