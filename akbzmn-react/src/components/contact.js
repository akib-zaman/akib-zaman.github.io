import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  // Placeholder for form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert('Form submitted. Thank you!');
  };

  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <p>For inquiries, collaborations, or just to say hello, feel free to reach out.</p>

      <div className="contact-info">
        <p>Email: akbzmn@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/akib-zaman/" target="_blank" rel="noopener noreferrer" className="linkedin-link">Visit my LinkedIn profile</a></p>
        <p>GitHub: <a href="https://github.com/akib-zaman/" target="_blank" rel="noopener noreferrer" className="github-link">Visit my GitHub profile</a></p>
      </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
