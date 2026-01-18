import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'nlp', name: 'NLP' },
    { id: 'analytics', name: 'Analytics' },
  ];

  const projects = [
    {
      id: 1,
      title: "Adaptive Recommender System",
      description: "A continual-learning based recommendation algorithm that predicts user interactions and adapts to concept drift in e-commerce, maintaining performance as user patterns evolve.",
      image: "/recsys.jpg",
      tags: ["Python", "PyTorch", "LSTM", "Deep Learning", "Transformers"],
      category: "ml",
      github: "https://github.com/revatip2/Adaptive-RecSys-using-Continual-Learning",
      featured: true,
    },
    {
      id: 2,
      title: "e-Teaching Assistant",
      description: "An LLM-powered Teaching Assistant using Retrieval Augmented Generation to automate student query responses and act as a personalized tutor for coursework.",
      image: "/chatbot-1.jpg",
      tags: ["Python", "LLM", "RAG", "NLP", "BERT", "Embeddings"],
      category: "nlp",
      github: "https://github.com/revatip2/TutorBot-LLM-Based-Chatbot-for-Personalized-Academic-Support",
      featured: true,
    },
    {
      id: 3,
      title: "SmartScout",
      description: "A data-driven solution empowering football clubs to identify undervalued talent, optimize investments, and predict player market values for strategic decisions.",
      image: "/smartscout.png",
      tags: ["Python", "K-Means", "Analytics", "Machine Learning"],
      category: "analytics",
      github: "https://github.com/revatip2/smart-scout-football-analytics",
      featured: true,
    },
    {
      id: 4,
      title: "Survival Analysis (Healthcare)",
      description: "Statistical analysis of survival outcomes for PBC patients using Cox Proportional Hazards, Kaplan-Meier estimates, and log-rank tests.",
      tags: ["R", "Statistics", "Healthcare"],
      category: "analytics",
      github: "https://github.com/revatip2/Survival-Analysis-using-R",
      featured: false,
    },
    {
      id: 5,
      title: "Reddit Web Scraper & Clustering",
      description: "Python-based scraper that collects Reddit data, preprocesses it, and clusters posts using KMeans for interactive exploration.",
      tags: ["Python", "BeautifulSoup", "KMeans", "NLP"],
      category: "nlp",
      github: "https://github.com/revatip2/Reddit-Web-Scraper-and-Clustering",
      featured: false,
    },
    {
      id: 6,
      title: "Algorithmic Trading System",
      description: "Stock portfolio management combining LSTM-based price prediction with automated trading strategies and financial metrics calculation.",
      tags: ["Python", "TensorFlow", "Keras", "Finance"],
      category: "ml",
      github: "https://github.com/revatip2/Algorithmic-trading-and-Stock-Price-Analysis",
      featured: false,
    },
    {
      id: 7,
      title: "Social Network Analysis",
      description: "Community detection and betweenness centrality analysis for marketing targeting and customer engagement insights.",
      tags: ["Python", "PySpark", "Graph Analysis"],
      category: "analytics",
      github: "https://github.com/revatip2/Social-Network-Graphs-Community-Detection-and-Betweenness-Centrality",
      featured: false,
    },
    {
      id: 8,
      title: "Heritage Site Classification",
      description: "Computer vision classification of historical landmarks using transfer learning for cultural heritage preservation.",
      tags: ["Python", "Computer Vision", "Transfer Learning"],
      category: "ml",
      github: "https://github.com/revatip2/Multi-Task-Image-Classification-with-Transfer-Learning",
      featured: false,
    },
    {
      id: 9,
      title: "Market Basket Analysis",
      description: "Optimized SON algorithm with Apriori on grocery data, improving item set relevance by 20% for better recommendations.",
      tags: ["Python", "PySpark", "Data Mining"],
      category: "analytics",
      github: "https://github.com/revatip2/market-basket-analysis",
      featured: false,
    },
    // {
    //   id: 10,
    //   title: "EffiHR: Performance Insights",
    //   description: "ML-based workforce analysis evaluating employee performance with actionable insights for HR decision-making.",
    //   tags: ["Python", "ML", "Visualization", "Analytics"],
    //   category: "analytics",
    //   github: "https://github.com/revatip2/employee-performance-classifier",
    //   featured: false,
    // },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          {/* <p className="section-subtitle">
            A collection of projects showcasing my expertise in ML, NLP, and data science.
            Each one represents a real problem solved with practical impact.
          </p> */}
        </motion.div>

        {/* Filter */}
        {/* <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div> */}

        {/* Featured Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="featured-grid"
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card featured"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                  <span className="featured-badge">Featured</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              className="other-projects-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              More Projects
            </motion.h3>
            <motion.div
              className="other-projects-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="project-card compact"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="compact-header">
                    <div className="folder-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                      </svg>
                    </div>
                    <div className="compact-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="compact-link"
                        aria-label="GitHub"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h4 className="compact-title">{project.title}</h4>
                  <p className="compact-description">{project.description}</p>
                  <div className="compact-tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="project-tag small">{tag}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="github-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Want to see more?</p>
          <a
            href="https://github.com/revatip2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
