import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Engineer',
      company: 'Dragin Technologies LLC',
      location: 'New York, NY',
      duration: 'Feb 2025 - Present',
      type: 'Full-time',
      description: [
        'Building end-to-end ML products for fintech applications',
        'Developing transformer-based document understanding systems',
        'Implementing agentic workflows and streamlined data pipelines',
      ],
      skills: ['Python', 'PyTorch', 'LLMs', 'NLP', 'AWS'],
      current: true,
    },
    {
      title: 'Data Science Intern',
      company: 'Ford Motor Company',
      location: 'Dearborn, MI',
      duration: 'May 2024 - Aug 2024',
      type: 'Internship',
      description: [
        'Developed ML models for vehicle data analysis and prediction',
        'Created data pipelines for processing large-scale automotive data',
        'Collaborated with cross-functional teams on analytics solutions',
      ],
      skills: ['Python', 'SQL', 'Machine Learning', 'Data Engineering'],
      current: false,
    },
    {
      title: 'Data Science & Software - Student Lead',
      company: 'University of Southern California',
      location: 'Los Angeles, CA',
      duration: 'May 2023 - Dec 2024',
      type: 'Internship',
      description: [
        'Led data science projects and mentored junior team members',
        'Developed software solutions for university research initiatives',
        'Managed project timelines and deliverables across teams',
      ],
      skills: ['Python', 'Leadership', 'Project Management', 'Data Science'],
      current: false,
    },
    {
      title: 'AI Research Assistant',
      company: 'USC Information Sciences Institute',
      location: 'Los Angeles, CA',
      duration: 'May 2023 - May 2024',
      type: 'Research',
      description: [
        'Conducted research on NLP and machine learning applications',
        'Built and evaluated ML models for various research projects',
        'Published findings and presented at internal research meetings',
      ],
      skills: ['NLP', 'Research', 'PyTorch', 'Deep Learning'],
      current: false,
    },
    {
      title: 'Software Engineer',
      company: 'Deloitte Consulting',
      location: 'Mumbai, India',
      duration: 'Sep 2021 - Nov 2022',
      type: 'Full-time',
      description: [
        'Developed enterprise software solutions for Fortune 500 clients',
        'Implemented data analytics and visualization dashboards',
        'Collaborated with global teams on large-scale projects',
      ],
      skills: ['Python', 'SQL', 'Analytics', 'Consulting'],
      current: false,
    },
    {
      title: 'Machine Learning Intern',
      company: 'Capgemini',
      location: 'Pune, India',
      duration: 'Mar 2020 - Jun 2020',
      type: 'Internship',
      description: [
        'Developed ML models for business process automation',
        'Worked on data preprocessing and feature engineering',
        'Gained hands-on experience with production ML pipelines',
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Header */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Where I've Worked</span>
          <h2 className="section-title">Experience</h2>
          {/* <p className="section-subtitle">
            Machine Learning | AI Engineering | Software Development | Data Science
          </p> */}
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.current ? 'current' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot">
                  {exp.current && <span className="pulse-ring"></span>}
                </div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="header-left">
                      <h3 className="job-title">{exp.title}</h3>
                      <p className="company-name">
                        {exp.company}
                        <span className="location"> • {exp.location}</span>
                      </p>
                    </div>
                    <div className="header-right">
                      <span className={`job-type ${exp.type.toLowerCase().replace('-', '')}`}>
                        {exp.type}
                      </span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="job-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="job-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
