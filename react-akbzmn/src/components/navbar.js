import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand"></div>
      <div className="nav-links">
        <Link to="home" smooth={true} duration={500} className="nav-item">Home</Link>
        <Link to="about" smooth={true} duration={500} className="nav-item">About</Link>
        <Link to="research" smooth={true} duration={500} className="nav-item">Research</Link>
        <Link to="publications" smooth={true} duration={500} className="nav-item">Publications</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-item">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
