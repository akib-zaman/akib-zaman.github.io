import React from 'react';
import './activities.css'; // Make sure to create and link this CSS file

// Assuming you have images or icons for each interest
import badmintonImg from '../images/badminton-1.jpg';
import billiardsImg from '../images/billiards-1.png';
import pcBuildingImg from '../images/pc-build.jpg';

const interests = [
  { title: "Badminton", image: badmintonImg, description: "Texas Intercollegiate Badminton Tournament." },
  { title: "Billiards", image: billiardsImg, description: "Texas Intercollegiate Billiards Tournament." },
  { title: "PC Building", image: pcBuildingImg, description: "Assembling PCs from scratch combines my love for technology and creativity." },
  // { title: "Volunteering", image: volunteeringImg, description: "Leading workshops and volunteering fuels my passion for community service." },
  // { title: "Traveling", image: travelingImg, description: "Exploring new cultures and landscapes through travel broadens my perspective." },
];

const Activities = () => {
  return (
    <div className="lifestyle-interests-section">
      <h2>Extracurricular Activities</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div className="interest-card" key={index}>
            <img src={interest.image} alt={interest.title} className="interest-image" />
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
