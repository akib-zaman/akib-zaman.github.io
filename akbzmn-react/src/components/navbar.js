import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>Akib Zaman</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
