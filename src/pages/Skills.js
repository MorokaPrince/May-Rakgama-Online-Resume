import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faCloud,
  faTools,
  faServer,
  faMobile,
  faGlobe,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';

const skillCategories = {
  'Frontend Development': {
    icon: faCode,
    skills: ['JavaScript', 'HTML/CSS/Bootstrap', 'React.js']
  },
  'Backend Development': {
    icon: faServer,
    skills: ['Node.js', 'C#', '.NET MVC', 'Java']
  },
  'Database': {
    icon: faDatabase,
    skills: ['SQL', 'Microsoft SQL Server', 'MongoDB']
  },
  'Cloud & DevOps': {
    icon: faCloud,
    skills: ['AWS', 'Docker', 'Git']
  },
  'Tools & Technologies': {
    icon: faTools,
    skills: ['Python', 'VS Code', 'Visual Studio']
  }
};

const Skills = ({ skills }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const getSkillLevel = (skill) => {
    // This could be enhanced with actual skill levels from the profile data
    const levels = {
      'JavaScript': 90,
      'React.js': 85,
      'Node.js': 80,
      'HTML/CSS/Bootstrap': 95,
      'SQL': 85,
      'Python': 75,
      'AWS': 70,
      'Docker': 65,
      'Git': 90,
      'C#': 80,
      '.NET MVC': 75,
      'Java': 70,
    };
    return levels[skill] || 70; // Default level if not specified
  };

  return (
    <div className="skills-container">
      <div className="skills-header" data-aos="fade-down">
        <h1>Technical Skills</h1>
        <p>My technical expertise and proficiency levels</p>
      </div>

      <div className="skills-categories">
        {Object.entries(skillCategories).map(([category, { icon, skills: categorySkills }], index) => (
          <div 
            key={category} 
            className="category-section"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="category-header">
              <FontAwesomeIcon icon={icon} className="category-icon" />
              <h2>{category}</h2>
            </div>
            <div className="skills-grid">
              {categorySkills.map((skill) => (
                <div key={skill} className="skill-card">
                  <div className="skill-info">
                    <h3>{skill}</h3>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar" 
                        style={{ width: `${getSkillLevel(skill)}%` }}
                      >
                        <span className="skill-percentage">
                          {getSkillLevel(skill)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-skills" data-aos="fade-up">
        <h2>Other Skills</h2>
        <div className="skills-cloud">
          {skills.filter(skill => 
            !Object.values(skillCategories)
              .flatMap(cat => cat.skills)
              .includes(skill)
          ).map((skill, index) => (
            <div 
              key={index}
              className="skill-tag"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-footer" data-aos="fade-up">
        <p>Interested in my work experience?</p>
        <a href="/experience" className="cta-button">
          View My Experience
        </a>
      </div>
    </div>
  );
};

export default Skills;