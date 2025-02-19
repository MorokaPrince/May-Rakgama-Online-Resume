import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faTrophy, 
  faCode, 
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = ({ profile }) => {
  return (
    <section className="about-section">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-underline"></div>
        </div>

        <div className="about-content">
          <motion.div 
            className="introduction-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 
              }}
            >
              {profile.about.introduction}
            </motion.p>
          </motion.div>

          <div className="expertise-grid">
            {profile.about.expertise.map((item, index) => (
              <motion.div 
                key={index}
                className="expertise-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>
                  <FontAwesomeIcon icon={faLightbulb} className="card-icon" />
                  {item.area}
                </h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="achievements-section">
            <h3>
              <FontAwesomeIcon icon={faTrophy} className="section-icon" />
              Key Achievements
            </h3>
            <ul className="achievements-list">
              {profile.about.keyAchievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="approach-section">
            <h3>
              <FontAwesomeIcon icon={faCode} className="section-icon" />
              Professional Approach
            </h3>
            <p>{profile.about.professionalApproach}</p>
          </div>

          <div className="interests-section">
            <h3>
              <FontAwesomeIcon icon={faRocket} className="section-icon" />
              Areas of Interest
            </h3>
            <div className="interests-grid">
              {profile.about.interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  className="interest-tag"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {interest}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
