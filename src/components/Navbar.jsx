import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        HONEY
        <span>SUTHAR</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#work">WORK</a></li>
        <li><a href="#process">PROCESS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <a href="#contact" className="btn-outline">LET'S TALK →</a>
    </nav>
  );
};

export default Navbar;
