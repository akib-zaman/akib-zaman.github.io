// src/components/about.js

import React from 'react';
import './about.css';
import profilePic from '../images/profile-pic.jpeg';

const About = () => {
  return (
    <div className="about-section">
      <img src={profilePic} alt="Akib Zaman" className="profile-img" />
      <a href="akib-cv.pdf" className="btn" download>Download CV</a>
      <p>
        I am a PhD (ABD) <b>[Graduating: May 2024]</b> specializing in Human-Computer Interaction
        at the University of Texas at Arlington. My research focuses on data-centric methods to understand AI
        Explainability. I am supervised by <a href="http://cearto.com/" target="_blank" rel="noopener noreferrer">Dr. César Torres</a>.
      </p>
      <div className="skills-container">
        <ul className="skills">
          <li>Human-Centered Computing</li>
          <li>Datasets</li>
          <li>Machine Learning</li>
          <li>User Research</li>
          <li>Crowdsourcing</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
