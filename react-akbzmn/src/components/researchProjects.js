import React, { useState } from 'react';
import './researchProjects.css';
import tnrPic from '../images/tnr-temp.png';
import bfPic from '../images/braidflow.png';
import dcPic from '../images/duckcheck.png';
import hrpPic from '../images/hrp.png';
import lbPic from '../images/ladderbot.png';

const projects = [
  { title: "DuckCheck", description: "Debugging, essential for software development, often imposes emotional challenges on novice programmers, despite the aid of integrated development environments (IDEs). DuckCheck, a hybrid debugging environment, integrates an interactive avatar, computational notebook plugin, and biosignal wristband, transforming debugging with playful and informative interactions, as demonstrated in a user study that also informs debugging tool design.", imageUrl: dcPic, id: 1 },
  { title: "BraidFlow", description: "A study establishes braidmaking as a method to induce flow, examining the experience in detail using biosignal wristbands and an instrumented Kumihimo braiding tool across 24 participants. This research contributes the first open-access platform for analyzing flow through physical activity data and Flow Short Scale scores, aiming to deepen understanding of flow states.", imageUrl: bfPic, id: 2 },
  { title: "Tag and Release", description: "The Tag-and-Release method, inspired by wildlife research, is introduced to examine biases in AI datasets, using the MNIST dataset to show how imbalances affect neural architectures and enhance ML explainability through crowd-sourced data annotation. This approach advocates for a data conservatory and stimulates discussions on models as ecosystems, aiming to develop balanced and fair datasets for explainable AI initiatives.", imageUrl: tnrPic, id: 3 },
  { title: "Hum, Rattle and Purr", description: "Creative spaces buzz with sounds that practitioners learn to use as feedback for adjusting behaviors and guiding creativity, encoding valuable information into their skills. This project outlines an audio-logging system designed for glass coldworking studios, showing how focused data collection enables the development of smart tool interactions and deep learning models despite the challenges of unsegmented and unlabeled data.", imageUrl: hrpPic, id: 4 },
  { title: "LadderBot", description: "Interviewing is essential for understanding user needs, but its complexity can overwhelm learners; virtual users offer a practice solution, although their impact on learning is not fully understood. This study explored interviewing skills through a workshop using both human and AI participants, finding themes in conversational dynamics and implications for training.", imageUrl: lbPic, id: 5 }
];

const ResearchProjects = () => {
  const centralIndex = Math.floor(projects.length / 2);
  const [activeIndex, setActiveIndex] = useState(centralIndex);

  const calculateOffset = (index) => {
    const baseOffset = 100; // Base offset for non-active cards
    let offset = (index - activeIndex) * baseOffset; // Calculate dynamic offset based on activeIndex
    return offset;
  };

  return (
    <div>
      <h2 className="section-title">Research Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index === activeIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${calculateOffset(index)}%) scale(${index === activeIndex ? 1.2 : 1})`,
              opacity: index === activeIndex ? 1 : 0.7,
              zIndex: index === activeIndex ? 2 : 1,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
