import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Outlet, Link } from "react-router-dom";
import "../Navbar.css";


function Navbar() {
  
  const [clicked, setClicked] = useState(false) ;

  function handleClick(){
    setClicked(!clicked)
  }
  
  return (
    <>
      <nav className="nav-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-container">
            <AcUnitIcon className="site-icon" fontSize="large"/>
            <h1>PROCAST</h1>
          </div>
        </Link>
        <div className="nav-links">
          {/* //dropdown menu for resposnive navigation */}
          <ul className={clicked ? "nav-list-container active" : "nav-list-container"}>
            <li id="home">
              <Link to="/" style={{ textDecoration: 'none' }}>HOME</Link>
            </li>
            <li id="about">
              <Link to="/about" style={{ textDecoration: 'none' }}>ABOUT</Link>
            </li>
            <li id="contact">
              <Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link>
            </li>
          </ul>
        </div>
        {/* //changes the dropdown icon if clicked */}
        <div className="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}>
            {clicked ? <FaTimes /> : <FaBars />}
          </i>
        </div>
      </nav>

    <Outlet />
    </>
  )
}

export default Navbar