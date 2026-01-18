import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'AI / ML Engineer',
      company: 'Dragin Technologies LLC',
      location: 'New York, NY',
      duration: 'Feb 2025 - Present',
      type: 'Full-time',
      description: [
        'Accelerated financial underwriting by 90% (20 minutes to <2 minutes per deal) by engineering an end-to-end AI agent for company research and risk assessment using Python, LangGraph, PydanticAI, Docker, and AWS, generating 5,000+ hours in annual operational savings across 25+ clients processing 1,000+ daily deals',
        'Built a production-grade financial document processing pipeline that extracts structured transactions from financial documents, achieving 90%+ extraction accuracy across 77% of document, enabling underwriters to review financial statements faster with fewer errors, significantly accelerating lending decisions',
        'Achieved 3-5x end-to-end latency reduction on 100+ page documents by designing an async parallel inference system with semaphore-controlled worker pools, intelligent batching, and concurrent OCR + LLM orchestration, enabling scalable processing across 20+ transaction categories and zero-shot support for new document formats',
        // 'Cut LLM API costs 70% by designing hybrid ML classification system with rule-based routing and GPT-4o-mini fallback, serving 20+ transaction categories',
        // 'Reduced RAG retrieval costs by 40% by engineering 120k-token pipeline with token-aware chunking, LLM-guided relevancy scoring, and selective extraction',
      ],
      skills: ['LLMs', 'RAG', 'LangGraph', 'PydanticAI', 'Async Systems', 'AWS', 'Production ML', 'FinTech'],
      current: true,
    },
    {
      title: 'Data Science Intern',
      company: 'Ford Motor Company',
      location: 'Dearborn, MI',
      duration: 'May 2024 - Aug 2024',
      type: 'Internship',
      description: [
        'Improved sales forecasting accuracy by 44% across multiple vehicle segments by building and deploying regression and time-series models on GCP Vertex AI, enabling data-driven sales target adjustments and marketing strategy optimization',
        'Delivered production-ready forecasting model by collaborating with software engineers on model integration, API development, and automated deployment pipelines to support real-time business intelligence',
        'Translated complex model outputs into actionable business insights by partnering with cross-functional stakeholders in sales and marketing, directly influencing quarterly planning and resource allocation strategies',
      ],
      skills: ['Vertex AI', 'BigQuery', 'Time Series', 'Python'],
      current: false,
    },
    {
      title: 'AI Research Assistant',
      company: 'USC Information Sciences Institute',
      location: 'Los Angeles, CA',
      duration: 'May 2023 - May 2024',
      type: 'Research',
      description: [
        'Improved vision model inference speed by 30% for edge device deployment by implementing single-shot pruning and quantization techniques in PyTorch, supporting US Navy operational requirements',
        'Demonstrated applied research rigor by implementing published quantization and model pruning algorithms, validating compression techniques that maintained 85%+ accuracy while achieving 2x size reduction for edge deployment',
        'Accelerated experimentation cycles by 50% with distributed training on CUDA-enabled HPC clusters',
      ],
      skills: ['PyTorch', 'CUDA', 'Model Optimization', 'Research'],
      current: false,
    },
    {
      title: 'Software Engineer',
      company: 'USC Facilities Planning & Management',
      location: 'Los Angeles, CA',
      duration: 'May 2023 - Dec 2024',
      type: 'Internship',
      description: [
        'Improved operational efficiency by 60% by designing and implementing RESTful API integrations between Workday and AssetWorks systems for facilities and planning teams, automating asset management workflows',
        'Reduced equipment downtime by 35% by building predictive maintenance models using time-series forecasting to optimize resource allocation for work orders, improving uptime and reducing emergency repairs for Facilities and Planning Management team at USC',
      ],
      skills: ['REST APIs', 'Python', 'SQL', 'System Integration'],
      current: false,
    },
    {
      title: 'Software Engineer',
      company: 'Deloitte Consulting',
      location: 'Pune, India',
      duration: 'Sep 2021 - Nov 2022',
      type: 'Full-time',
      description: [
        'Improved enterprise finance data flows by 60% by designing and implementing RESTful APIs and backend integrations for Workday and Oracle Financials platforms supporting hedge fund client (Millennium), enhancing system reliability and downstream analytics',
        'Architected integration layer handling 3,000+ daily reimbursement claims across enterprise systems',
        'Achieved zero-defect deployments migrating legacy systems to Workday with 99.8% data accuracy',
  ],
      skills: ['APIs', 'SQL', 'Python', 'Enterprise Systems'],
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

                  <div className="job-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <ul className="job-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
