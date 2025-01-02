import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import './MainContent.css';


const MainContent = () => {
  return (
    <div className="main-content">
      <div className="column">
        <Education />
      </div>
      <div className="column">
        <Experience />
      </div>
      {/* <Contact/> */}
    </div>
  );
};

export default MainContent;
