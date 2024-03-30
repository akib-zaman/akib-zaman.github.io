// timelineBlock.js

import React from 'react';

const TimelineBlock = ({ position, title, period, children }) => {
  return (
    <div className={`timeline-block ${position}`}>
      <div className="marker"></div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <span>{period}</span>
        {children}
      </div>
    </div>
  );
};

export default TimelineBlock;
