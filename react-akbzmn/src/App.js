import React from 'react';
import About from './components/about';
import Navbar from './components/navbar';
import Titlebar from './components/titlebar';
// import Timeline from './components/timeline';
import HorizontalTimeline from './components/horizontalTimeline';
import ResearchProjects from './components/researchProjects'
import Publications from './components/publications'
import Activities from './components/activities'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Titlebar />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="timeline">
        <HorizontalTimeline />
      </div>
      <div id="research">
        <ResearchProjects />
      </div>
      <div id="publications">
        <Publications />
      </div>
      <div id="activities">
        <Activities />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {/* other components */}
    </div>
  );
}


export default App;
