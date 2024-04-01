import React from 'react';
import './about.css';
import profilePic from '../images/profile-pic.jpeg';
import cvPDF from '../images/cv.pdf';

const skills = [
  { name: "Human-Centered Computing" }, // removed the Icons for now
  { name: "Datasets" },
  { name: "Machine Learning" },
  { name: "User Research" },
  { name: "Crowdsourcing" }
];

const About = () => {
  return (
    <div className="about-section">
      <img src={profilePic} alt="Akib Zaman" className="profile-img" />
      <h2></h2>
      <a href={cvPDF} className="btn download-cv-btn" target="_blank" rel="noopener noreferrer">View CV</a>
      <div className="about-description">
        <p>I am a PhD (ABD) <b>[Graduating: May 2024]</b> specializing in Human-Computer Interaction at the University of Texas at Arlington.</p>
        <p>My research focuses on data-centric methods to understand AI Explainability.</p>
        <p>I am supervised by <a href="http://cearto.com/" target="_blank" rel="noopener noreferrer">Dr. César Torres</a>.</p>
      </div>
      <div className="skills-container">
        <h3></h3>
        <ul className="skills">
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;