// src/App.js

import React from 'react';
import About from './components/about';
import Navbar from './components/navbar';
import Timeline from './components/timeline';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Timeline />
      {/* other components */}
    </div>
  );
}

export default App;
