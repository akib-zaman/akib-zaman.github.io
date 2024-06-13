import React from 'react';
import './about.css';
import profilePic from '../images/profile-pic.jpeg';
import cvPDF from '../images/cv.pdf';

const skills = [
  { name: "Human-Centered Computing" }, // removed the Icons for now
  { name: "Datasets" },
  { name: "Machine Learning" },
  { name: "Explainable AI" },
  { name: "User Research" },
  { name: "Crowdsourcing" }
];

const About = () => {
  return (
    <div className="about-section">
      <img src={profilePic} alt="Akib Zaman" className="profile-img" />
      {/* Highlight Banner */}
      <div className="highlight-banner">
        <p>Exciting News: I have graduated in May 2024 and am actively seeking new opportunities in Human-Computer Interaction, Machine Learning and related fields. Let's <a href="#contact" className="banner-link">connect!</a></p>
      </div>
      <a href={cvPDF} className="btn download-cv-btn" target="_blank" rel="noopener noreferrer">View CV</a>
      <div className="about-description">
        <p>I am a recent PhD graduate specializing in Human-Computer Interaction and Exlainable AI at the University of Texas at Arlington.</p>
        <p>I'm particularly interested in roles that challenge me to apply my research in AI Explainability, enhancing the way humans interact with complex systems.</p>
        <p>I was supervised by <a href="http://cearto.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>Dr. César Torres</a>.</p>
      </div>
      <div className="skills-container">
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