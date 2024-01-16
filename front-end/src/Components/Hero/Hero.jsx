import React from 'react'
import Slider from '../Slider/Slider'
import Features from '../Features/Features'
import Reser from '../Section & Reserch/Reser'
import Temp from '../Template/Temp'
import Card from '../Card/Card'
import Recu from '../Recurters/Recu'
import Life from '../Life/Life'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Features/>
      <Card/>
      <Temp/>
      <Reser/>
      <Recu/>
      <Life/>
      <Footer/>
      
       </div>
  )
}

export default Hero
