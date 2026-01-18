import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  // Tech stack with SVG icons from simple-icons CDN
  const technologies = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch' },
    { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow' },
    { name: 'Keras', icon: 'https://cdn.simpleicons.org/keras' },
    { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy' },
    { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas' },
    { name: 'Scikit-Learn', icon: 'https://cdn.simpleicons.org/scikitlearn' },
    { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface' },
    { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain' },
    { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai' },
    { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
    { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="skills-label">Technologies I work with</span>
        <div className="tech-strip">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-icon"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              title={tech.name}
            >
              <img src={tech.icon} alt={tech.name} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
