import React from 'react';
import './contact.css'; // Ensure this is correctly linked
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <h2>Contact Me</h2>
      <div className="contact-methods">
        <div className="contact-method">
          <FaEnvelope className="contact-icon" style={{ color: '#D14836' }}/> {/* Gmail Red */}
          <p className="contact-detail">akbzmn@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/akib-zaman" target="_blank" rel="noopener noreferrer" className="contact-method">
          <FaLinkedin className="contact-icon" style={{ color: '#0A66C2' }}/> {/* LinkedIn Blue */}
          <p className="contact-detail">LinkedIn</p>
        </a>
        <a href="https://github.com/akib-zaman" target="_blank" rel="noopener noreferrer" className="contact-method">
          <FaGithub className="contact-icon" style={{ color: '#333' }}/> {/* GitHub Black */}
          <p className="contact-detail">GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
