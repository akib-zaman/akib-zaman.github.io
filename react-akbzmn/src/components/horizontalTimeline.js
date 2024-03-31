import React, { useEffect } from 'react';
import './horizontalTimeline.css';
import thaPic from '../images/tha.png';
import utaPic from '../images/uta.webp';
import dellPic from '../images/dell.png';


const events = [
  { title: "Ph.D. in Computer Science", subTitle: "University of Texas at Arlington", date: "Expected Graduation: MAY 2024", description: "Human-Computer Interaction", icon: utaPic, backgroundColor: "#edced6" },
  { title: "Graduate Research Assistant", subTitle: "University of Texas at Arlington", date: "Jan 2020 - May 2024", description: "The Hybrid Atelier", icon: thaPic, backgroundColor: "#aee6b0" },
  { title: "Graduate Intern", subTitle: "Dell Technologies Inc.", date: "May 2021 - Aug 2021", description: "Customer Experience Subdivision", icon: dellPic, backgroundColor: "#f0e4d7" },
  { title: "Graduate Intern", subTitle: "Dell Technologies Inc.", date: "Jun 2020 - Jul 2020", description: "Infrastructure Solutions Group", icon: dellPic, backgroundColor: "#f0e4d7" },
  { title: "Graduate Research Assistant", subTitle: "University of Texas at Arlington", date: "Jan 2018 - Jan 2020", description: "MIND Lab", icon: utaPic, backgroundColor: "#aee6b0" },
  { title: "Undergraduate Researcher", subTitle: "University of Texas at Arlington", date: "Aug 2020 - Oct 2020", description: "SMILE Lab", icon: utaPic, backgroundColor: "#f0e4d7" },
  { title: "Bachelor of Science", subTitle: "University of Texas at Arlington", date: "Aug 2013 - May 2017", description: "Computer Science (Math Minor)", icon: utaPic, backgroundColor: "#edced6" }
];

const HorizontalTimeline = () => {
  const adjustTimelineAlignment = () => {
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
      const viewportWidth = window.innerWidth;
      const contentWidth = timelineContainer.scrollWidth;

      if (contentWidth > viewportWidth) {
        timelineContainer.classList.remove('center-content');
      } else {
        timelineContainer.classList.add('center-content');
      }
    }
  };

  // useEffect to handle resizing and initial load
  useEffect(() => {
    adjustTimelineAlignment(); // Call on initial render

    window.addEventListener('resize', adjustTimelineAlignment); // Add resize listener

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustTimelineAlignment);
    };
  }, []);

  return (
    <div>
      <div className="color-key-container">
        <div className="color-key">
          <span className="color-box" style={{ backgroundColor: "#edced6" }}></span> <b> Academics </b>
        </div>
        <div className="color-key">
          <span className="color-box" style={{ backgroundColor: "#f0e4d7" }}></span> <b> Internships </b>
        </div>
        <div className="color-key">
          <span className="color-box" style={{ backgroundColor: "#aee6b0" }}></span> <b> Research </b>
        </div>
      </div>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div 
            className="timeline-item" 
            key={index}
            style={{ backgroundColor: event.backgroundColor }}
          >
            <div className="timeline-content">
              <div className="title-with-icon">
                <div className="titles">
                  <h3>{event.title}</h3>
                  <h4>{event.subTitle}</h4>
                </div>
                <div className="timeline-icon">
                  <img src={event.icon} alt="Icon" />
                </div>
              </div>
              <p>{event.description}</p>
              <div className="timeline-date">
                <span>{event.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default HorizontalTimeline;
