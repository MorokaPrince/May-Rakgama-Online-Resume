import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding,
  faMapMarkerAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';

const Experience = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="experience-container">
      <div className="experience-header" data-aos="fade-down">
        <h1>Professional Experience</h1>
        <p>My journey in the tech industry</p>
      </div>

      <div className="timeline">
        {data.map((experience, index) => (
          <div 
            key={index}
            className="timeline-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="timeline-content">
              <div className="experience-card">
                <div className="company-header">
                  <div className="company-logo">
                    <FontAwesomeIcon icon={faBuilding} />
                  </div>
                  <div className="company-info">
                    <h3>{experience.company}</h3>
                    <h4>{experience.role}</h4>
                  </div>
                </div>

                <div className="experience-details">
                  <div className="detail-item">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <div className="experience-description">
                  {experience.description && (
                    <p>{experience.description}</p>
                  )}
                  {experience.achievements && (
                    <ul className="achievements-list">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-footer" data-aos="fade-up">
        <p>Want to know more about my skills?</p>
        <a href="/skills" className="cta-button">
          View My Skills
        </a>
      </div>
    </div>
  );
};

export default Experience;