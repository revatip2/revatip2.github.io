// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="about-content">
//         {/* Profile image */}
//         <div className="image-container">
//           <img src="/mee.jpg" alt="Revati Pawar" className="profile-image" />
//         </div>
        
//         {/* Text content */}
//         <div className="text-content">
//           <h2>Hi! I'm Revati Pawar.</h2>
//           <p>
//             I'm a recent graduate from USC with a passion for data science, software engineering, and machine learning.
//             I'm excited to apply my skills and make an impact through innovative solutions and meaningful projects.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Profile video */}
        <div className="video-container">
          <video
            src="/memoji.mp4"
            alt="Revati Pawar"
            className="profile-video"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Text content */}
        <div className="text-content">
          <h2>Hi! I'm Revati Pawar.</h2>
          <p>
          I'm Revati Pawar, a fintech Machine Learning Engineer in New York (M.S., Applied Data Science — USC). I build end-to-end ML products that help finance teams make faster, more reliable decisions — from transformer based document understanding and text classification to agentic workflows and streamlined data pipelines. I'm passionate about AI, ML, NLP, and clean software engineering — and I love translating research into production systems that move the needle. When I'm not building models you'll find me hiking, playing pickleball, or making art.    </p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/revatipawar29" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/revatip2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
        {/* Downward Arrow */}
        <div className="scroll-arrow">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default About;
