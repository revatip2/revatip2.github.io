import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section section id="contact" className="contact-section">
      <h2>./contact</h2>
      <p className="contact-description">
      If you'd like to learn more about me, chat about data science, or discuss potential collaborations, I'm just an email away.    </p>
      <a href="mailto:pawar.revatirajesh@gmail.com" className="contact-email">
        pawar.revatirajesh@gmail.com
      </a>
    </section>
  );
};

export default Contact;
