import React from 'react';
import './Projects.css';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Slider from 'react-slick';


const projects = [
  {
    title: "Adaptive Recommender System",
    description: "A continual-learning based recommendation algorithm designed to predict the next user interaction and adapt to changing behaviors (concept drift) in e-commerce, maintaining performance as user patterns evolve.",
    skills: ["Python", "PyTorch", "LSTM", "PySpark", "Deep Learning", "Transformers"],
    githubLink: "https://github.com/revatip2/Adaptive-RecSys-using-Continual-Learning",
    image: "/recsys.jpg"
  },
  {
    title: "e-Teaching Assistant",
    description: "An LLM-powered Teaching Assistant using Retrieval Augmented Generation to automate student query responses and act as a personalized tutor for coursework",
    skills: ["Python", "NLP", "LLM", "Machine Learning", "BERT", "RAG", "Embeddings"],
    githubLink: "https://github.com/revatip2/TutorBot-LLM-Based-Chatbot-for-Personalized-Academic-Support",
    image: "/chatbot-1.jpg"
  },
  {
    title: "SmartScout ",
    description:  "A data-driven solution empowering football clubs to identify undervalued talent, optimize youth investments, negotiate contracts effectively, and predict player market values, driving strategic and cost-effective decisions.",
    skills: ["Python",  "Pandas", "Analytics", "K-Means", "Machine Learning"],
    githubLink: "https://github.com/revatip2/smart-scout-football-analytics",
    image: "/smartscout.png"
  },
];

const carouselProjects = [
    {
    title: "Survival Analysis (Healthcare)",
    description: "A statistical analysis of survival outcomes for Primary Biliary Cirrhosis patients using Cox Proportional Hazards, Kaplan-Meier estimates, and log-rank tests to identify drug-related factors",
    skills: ["R", "Statistics"],
    githubLink: "https://github.com/revatip2/Survival-Analysis-using-R"
    },
    {
      title: "Reddit Web Scraper and Cluster Analysis",
      description: "A Python-based web scraper that collects Reddit post data, preprocesses it, clusters posts using KMeans, and allows interactive querying of clusters through a menu interface.",
      skills: ["Python", "BeautifulSoup", "Requests", "Pandas", "KMeans", "Scikit-learn", "Plotly", "NLTK", "Regex"],
      githubLink: "https://github.com/revatip2/Reddit-Web-Scraper-and-Clustering"
    },
    {
    title: "Social Network Analysis",
    description: "Social Network analysis to identify key communities, providing insights for better marketing targeting and customer engagement",
    skills: ["Python", "NLP", "LLM", "BERT", "RAG"],
    githubLink: "https://github.com/revatip2/Social-Network-Graphs-Community-Detection-and-Betweenness-Centrality"
    },
    {
    title: "CV-Based Heritage Site Classification ",
    description: "A classification algorithm using computer vision and transfer learning to categorize historical landmarks for the preservation, cataloging, and mapping of cultural heritage sites.",
    skills: ["Python", "Computer Vision", "Deep Learning"],
    githubLink: "https://github.com/revatip2/Multi-Task-Image-Classification-with-Transfer-Learning"
    },
    {
    title: "Market Basket Analysis",
    description: "Optimized the SON algorithm with Apriori on grocery transaction data, improving the relevance of item sets by 20%, enhancing market basket analysis for better product recommendations and promotions.",
    skills: ["Python", "PySpark", "Data Mining", "Optimization"],
    githubLink: "https://github.com/revatip2/market-basket-analysis"
    },
    {
    title: "EffiHR: ML based Performance Insights",
    description: "ML-based workforce analysis solution that evaluates employee performance, offering actionable insights for HR teams to streamline decision-making and optimize workforce management through data-driven solutions.",
    skills: ["Python", "Data Analytics", "Matplotlib", "Visualization", "Machine Learning"],
    githubLink: "https://github.com/revatip2/employee-performance-classifier"
    }
  ];
  
function Projects() {

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <div className="custom-next"><FontAwesomeIcon icon={faChevronRight} /></div>,
        prevArrow: <div className="custom-prev"><FontAwesomeIcon icon={faChevronLeft} /></div>,
       
      };
  return (
 
    <section id="projects" className="projects-section">
      <h2>./projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Skills:</strong> {project.skills.join(', ')}</p>
            <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
            </a>
          </div>
        </div>
      ))}
       {/* Horizontal Carousel */}
       <div className="carousel-section">
        {/* <h2 className="carousel-title">Explore More Projects</h2> */}
        <Slider {...carouselSettings} className="carousel-container">
          {carouselProjects.map((project, index) => (
            <div key={index} className="carousel-project">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p><strong>Skills:</strong> {project.skills.join(', ')}</p>
              {/* <div className="skills">
    {project.skills.map((skill, idx) => (
      <div key={idx} className="skill-item">{skill}</div>
    ))}
  </div> */}
              <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
   </section>
  );
}

export default Projects;
