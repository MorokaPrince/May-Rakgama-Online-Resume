import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faCalendar, 
  faMapMarker, 
  faBook,
  faCertificate,
  faTrophy,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = ({ education }) => {
  const [selectedId, setSelectedId] = useState(null);

  const quotes = [
    "Learning is a continuous journey of growth and discovery",
    "Education is the foundation of innovation",
    "Knowledge shapes our future"
  ];

  const toggleDetails = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <>
      <div className="education-page-wrapper" />
      <div className="education-container">
        <motion.div 
          className="education-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gradient-text">Academic Background</h1>
          <div className="header-decoration"></div>
        </motion.div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`education-card ${selectedId === edu.id ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => toggleDetails(edu.id)}
          >
            <div className="education-content">
              {/* Basic Info */}
              <div className="education-header">
                <div className="logo-container">
                  <img 
                    src={edu.logo || "/images/logos/default-education.png"} 
                    alt={edu.school} 
                    className="institution-logo"
                  />
                  {edu.status === 'In Progress' && (
                    <span className="status-badge">Current</span>
                  )}
                </div>
                <div className="education-title">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  {edu.institution && (
                    <p className="institution">at {edu.institution}</p>
                  )}
                </div>
              </div>

              <div className="education-meta">
                <p><FontAwesomeIcon icon={faCalendar} /> {edu.startDate} - {edu.endDate}</p>
                <p><FontAwesomeIcon icon={faMapMarker} /> {edu.location}</p>
                <p><FontAwesomeIcon icon={faCertificate} /> {edu.type}</p>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedId === edu.id && (
                  <motion.div
                    className="education-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="details-grid">
                      <div className="detail-section">
                        <h4><FontAwesomeIcon icon={faBook} /> Key Courses</h4>
                        <ul>
                          {edu.courses.map((course, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              {course}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {edu.achievements && (
                        <div className="detail-section">
                          <h4><FontAwesomeIcon icon={faTrophy} /> Achievements</h4>
                          <ul>
                            {edu.achievements.map((achievement, idx) => (
                              <motion.li 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.projects && (
                        <div className="detail-section">
                          <h4><FontAwesomeIcon icon={faProjectDiagram} /> Projects</h4>
                          <ul>
                            {edu.projects.map((project, idx) => (
                              <motion.li 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {project}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div 
                className="quote-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="quote-text">{quotes[index % quotes.length]}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Education;
