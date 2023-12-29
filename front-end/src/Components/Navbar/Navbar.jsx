
// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png.webp'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
    <div className="brand">
        <img src={logo} alt="logo" />
     </div>
     <div className="menu-items">
     <Link to="/" style={{textDecoration: 'none', color: 'white'} }>   <li className="items">HOME</li></Link>
        <Link to="/about" style={{textDecoration: 'none', color: 'white'} } ><li className="items">ABOUT</li></Link>
        <Link to="/team" style={{textDecoration: 'none', color: 'white'} } ><li className="items">Team</li></Link>
       <Link to="/login" style={{textDecoration: 'none', color: 'white'} } ><li className="items">LOGIN</li></Link>
       <Link to="/contact" style={{textDecoration: 'none', color: 'white'} } ><li className="items">Contact</li></Link>
     </div>
    </div>
  );
};

export default Navbar;
