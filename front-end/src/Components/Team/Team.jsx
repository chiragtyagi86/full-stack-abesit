import React from 'react'
import './Team.css'
import divu from '../Assets/divu.jpg'
import moti from '../Assets/moti.jpg'
import dhulu from '../Assets/op.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Team = () => {
  return (
<div className='poi'>
    <Navbar/>
<div className="banner"></div>
        <h1>"MEET OUR TEAM"</h1>
    <div className="team">
        <div className="card">
            <div className="card-img">
                <img src="https://chiragtyagi.netlify.app/static/media/home.e77db9e7334f89e1c3c5.jpeg" alt="" />
            </div>
            <div className="card-data">
                <h2>CHIRAG TYAGI</h2>
                <p>2202900100069</p>
                <h3>Software Developer</h3>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={dhulu} alt="" />
            </div>
            <div className="card-data">
                <h2>DHRUVE SRIVASTAVA</h2>
                <p>2202900100077</p>
                <h3>Software Developer</h3>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={moti} alt="" />
            </div>
            <div className="card-data">
                <h2>DEPANSHI RAUTALA</h2>
                <p>2202900100071</p>
                <h3>Software Developer</h3>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src={divu} alt="" />
            </div>
            <div className="card-data">
                <h2>DIVYENDU KUMAR</h2>
                <p>2202900100081</p>
                <h3>Software Developer</h3>
            </div>
        </div>
    </div>
    <Footer/>
</div>

  )
}

export default Team
