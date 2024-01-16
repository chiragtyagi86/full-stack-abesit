import React from "react";
import "./StdNav.css";
import logo from "./college-logo.png";

import { Link } from "react-router-dom";

const StdNav = () => {
  return (
    <div className="stdnav">
      <div className="brand">
        <img src={logo} alt="" />
      </div>

      <div className="icons">
        <Link to="/Login">
          <button>LOGOUT</button>
        </Link>
      </div>
    </div>
  );
};

export default StdNav;
