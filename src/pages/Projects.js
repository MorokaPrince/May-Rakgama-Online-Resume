import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faReact,
  faNodeJs,
  faJs,
  faPython
} from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faDatabase,
  faServer,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const technologyIcons = {
  'React': faReact,
  'Node.js': faNodeJs,
  'JavaScript': faJs,
  'Python': faPython,
  'MongoDB': faDatabase,
  'Express': faServer,
  'Firebase': faDatabase,
  'Redux': faCode
};

const Projects = ({ projects }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-header" data-aos="fade-down">
        <h1>My Projects</h1>
        <p>A showcase of my latest work and contributions</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="project-content">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                <h4>Technologies Used:</h4>
                <div className="tech-icons">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="tech-icon" title={tech}>
                      <FontAwesomeIcon 
                        icon={technologyIcons[tech] || faCode} 
                        className={tech.toLowerCase().replace('.', '-')}
                      />
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>View Code</span>
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="project-hover-info">
              <div className="hover-content">
                <h4>Key Features:</h4>
                <ul>
                  {project.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  )) || (
                    <li>Interactive user interface</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer" data-aos="fade-up">
        <div className="github-cta">
          <h3>More Projects on GitHub</h3>
          <p>Check out my GitHub profile for more projects and contributions</p>
          <a 
            href="https://github.com/mayrakgama"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;