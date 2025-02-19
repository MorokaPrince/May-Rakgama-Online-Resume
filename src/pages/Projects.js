import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faChrome 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode,
  faStar,
  faExternalLinkAlt,
  faLaptopCode,
  faDatabase,
  faMobile
} from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filters = [
    { id: 'all', label: 'All', icon: faCode },
    { id: 'frontend', label: 'UI/UX', icon: faLaptopCode },
    { id: 'fullstack', label: 'Enterprise', icon: faChrome },
    { id: 'data', label: 'Analytics', icon: faDatabase },
    { id: 'mobile', label: 'Mobile', icon: faMobile }
  ];

  useEffect(() => {
    const filtered = selectedFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === selectedFilter);
    setFilteredProjects(filtered);
  }, [selectedFilter, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const ProjectCard = ({ project }) => {
    return (
      <motion.div
        className="project-card"
        variants={projectVariants}
        whileHover={{ y: -2 }}
      >
        <div className="project-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="projects-container">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1>Featured Projects</h1>
        <div className="header-decoration">
          <div className="decoration-line"></div>
        </div>
        <p>Explore my latest work and technical projects</p>
      </motion.div>

      <motion.div 
        className="filters-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={filter.icon} />
            <span>{filter.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={projectVariants}
              layout
              whileHover={{ y: -5 }}
            >
              {project.featured && (
                <motion.div 
                  className="featured-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FontAwesomeIcon icon={faStar} /> Featured
                </motion.div>
              )}
              
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
