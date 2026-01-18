import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
