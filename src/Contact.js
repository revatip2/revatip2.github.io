import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="contact-title">Let's work together</h4>

          {/* <a href="mailto:pawar.revatirajesh@gmail.com" className="contact-email">
            pawar.revatirajesh@gmail.com
          </a> */}

          <div className="contact-links">
            <a 
              href="mailto:pawar.revatirajesh@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Email
            </a>
            <span className="divider">/</span>
            <a
              href="https://www.linkedin.com/in/revatipawar29"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="divider">/</span>
            <a
              href="https://github.com/revatip2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
