import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Education from './Education';
// import Experience from './Experience';
import Footer from './Footer';  // Import the Footer component

import Contact from './Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        {/* No need for /projects route anymore */}
        <Route path="/education" element={<Education />} />
        {/* <Route path="/experiences" element={<Experiences />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Projects will be shown directly on the main page */}
      <Projects />
      {/* <Experience /> */}
      <Footer />
    </Router>
  );
}

export default App;
