// timeline.js

import React from 'react';
import TimelineBlock from './timelineBlock';
import './timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container">
      <TimelineBlock
        position="timeline-block-right"
        title="Graduate Research Assistant"
        period="Feb 2020 - Present"
      >
        <p><a href="https://hybridatelier.uta.edu/" target="_blank" rel="noopener noreferrer">The Hybrid Atelier</a><br/>University of Texas at Arlington</p>
        <p>Supervisor: <a href="http://cearto.com/" target="_blank" rel="noopener noreferrer">Dr. César Torres</a></p>
      </TimelineBlock>

      <TimelineBlock
        position="timeline-block-left"
        title="Graduate Intern @ Dell"
        period="May 2021 - August 2021"
      >
        <p>Customer Experience Subdivision</p>
      </TimelineBlock>

      <TimelineBlock
        position="timeline-block-right"
        title="Graduate Intern @ Dell"
        period="June 2020 - July 2020"
      >
        <p>Infrastructure Solutions Group</p>
      </TimelineBlock>

      <TimelineBlock
        position="timeline-block-left"
        title="Graduate Research Assistant"
        period="January 2018 - January 2020"
      >
        <p>MIND Lab<br/>University of Texas at Arlington</p>
      </TimelineBlock>

      <TimelineBlock
        position="timeline-block-right"
        title="Undergraduate Researcher"
        period="August 2017 - October 2017"
      >
        <p>SMILE Lab<br/>University of Texas at Arlington</p>
      </TimelineBlock>

      <TimelineBlock
        position="timeline-block-left"
        title="Bachelor of Science in Computer Science"
        period="August 2013 - May 2017"
      >
        <p>Magna cum Laude; Math Minor</p>
      </TimelineBlock>

    </div>
  );
};

export default Timeline;
