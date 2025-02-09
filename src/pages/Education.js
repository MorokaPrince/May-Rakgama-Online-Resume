import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCalendarAlt,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';

const Education = ({ education = [] }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="education-container">
      <div className="education-header" data-aos="fade-down">
        <h1>Education</h1>
        <p>My academic journey and qualifications</p>
      </div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="education-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="education-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            
            <div className="education-content">
              <div className="education-title">
                <h3>{edu.degree}</h3>
                <div className="institution">
                  <FontAwesomeIcon icon={faUniversity} />
                  <span>{edu.institution}</span>
                </div>
              </div>
              
              <div className="education-period">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>{edu.years}</span>
              </div>

              {edu.description && (
                <div className="education-description">
                  <p>{edu.description}</p>
                </div>
              )}

              {edu.achievements && (
                <div className="education-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.courses && (
                <div className="education-courses">
                  <h4>Key Courses:</h4>
                  <div className="courses-grid">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="education-footer" data-aos="fade-up">
        <div className="education-quote">
          <blockquote>
            "Education is not preparation for life; education is life itself."
          </blockquote>
          <cite>- John Dewey</cite>
        </div>
        
        <div className="education-cta">
          <p>Want to see my professional certifications?</p>
          <a href="/certificates" className="cta-button">
            View Certificates
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;