import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science & Software - Student Lead',
      company: 'University of Southern California',
      duration: 'August 2024 - December 2024',
      description: 'Working on recommendation algorithms to personalize content for users.',
      skills: ['Python', 'Machine Learning', 'Collaborative Filtering', 'Data Engineering'],
    },
    {
      title: 'Data Science Intern',
      company: 'Ford Motor Company',
      duration: 'May 2024 - August 2024',
      description: 'Working on recommendation algorithms to personalize content for users.',
      skills: ['Python', 'Machine Learning', 'Collaborative Filtering', 'Data Engineering'],
    },
    {
      title: 'Data Science & Software Intern',
      company: 'University of Southern California',
      duration: 'May 2023 - May 2024',
      description: 'Built sales forecasting models using XGBoost and OLS regression.',
      skills: ['XGBoost', 'OL Regression', 'Data Visualization', 'SQL'],
    },
    {
      title: 'Research Assistant',
      company: 'USC Information Sciences Institute',
      duration: 'May 2023 - May 2024',
      description: 'Built sales forecasting models using XGBoost and OLS regression.',
      skills: ['XGBoost', 'OL Regression', 'Data Visualization', 'SQL'],
    },
    {
      title: 'Software Engineer - Analyst',
      company: 'Deloitte Consulting',
      duration: 'September 2021 - November 2022',
      description: 'Analyzed financial data to provide actionable insights for clients.',
      skills: ['Python', 'Data Analysis', 'Bayesian Inference', 'Survival Analysis'],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Capgemini',
      duration: 'March 2020 - June 2020',
      description: 'Analyzed financial data to provide actionable insights for clients.',
      skills: ['Python', 'Data Analysis', 'Bayesian Inference', 'Survival Analysis'],
    },
  ];

  return (
    <section section id="experience" className="experience-section">
      <h2>./experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="company-name">{exp.company}</p>
            </div>
            <p className="dates">{exp.duration}</p>
            {/* <p className="description">{exp.description}</p> */}
            <div className="skills">
              {/* {exp.skills.map((skill, idx) => (
                <div className="skill-tile" key={idx}>
                  {skill}
                </div>
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
