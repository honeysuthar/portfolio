import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
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
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>HOME</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#work" onClick={closeMenu}>WORK</a>
        <a href="#process" onClick={closeMenu}>PROCESS</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
        <a href="#contact" className="btn-outline" onClick={closeMenu}>LET'S TALK →</a>
      </div>
    </>
  );
};

export default Navbar;
