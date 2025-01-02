import React from 'react';
import './Education.css';

const Education = () => {
  const educationDetails = [
    {
      school: 'University of Southern California',
      course: 'Master of Science in Applied Data Science',
      duration: 'January 2023 - December 2024',
      gpa: 'GPA: 3.92/4.0',
      coursework: ['Machine Learning', 'Data Mining', 'Deep Learning', 'Big Data Analytics', 'Databases', 'NLP', 'Data Science for Business'],
    },
    {
      school: 'Maharashtra Institute of Technology',
      course: 'Bachelors in Electronics Engineering (Specialization in Artificial Intelligence)',
      duration: 'July 2017 - August 2021',
      gpa: 'GPA: 9.66/10.0',
      coursework: ['Algorithms', 'Operating Systems', 'Database Systems', 'Software Engineering'],
    },
  ];

  return (
    <section section id="education" className="education-section">
      <h2>./education</h2>
      <div className="education-list">
        {educationDetails.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-header">
              <h3 className="school-name">{edu.school}</h3>
              <p className="course-name">{edu.course}</p>
            </div>
            <p className="dates">{edu.duration}</p>
            <p className="gpa">{edu.gpa}</p>
            {/* <div className="coursework">
              <strong>Relevant Coursework:</strong>
              <ul>
                {edu.coursework.map((course, idx) => (
                  <li key={idx} className="course-item">
                    {course}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
