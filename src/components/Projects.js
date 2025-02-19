import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub,
  faChrome 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faExternalLinkAlt,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      variants={projectVariants}
      whileHover={{ y: -5 }}
    >
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Source
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Patient Management System",
      description: "ASP.NET MVC application for managing patient records, appointments, and medical history with role-based access control.",
      technologies: ["C#", "ASP.NET MVC", "SQL Server", "Bootstrap"],
      github: "https://github.com/username/healthcare-management",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with product management, cart functionality, and secure payments.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-manager",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className="projects-section">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1>Featured Projects</h1>
        <div className="header-line"></div>
        <p>Explore my latest work and technical projects</p>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
