import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faNode, 
  faPython,
  faGit,
  faAws,
  faDocker,
  faJava,
  faMicrosoft,
  faWindows,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faServer, 
  faCode,
  faGears,
  faShieldAlt,
  faHeadset,
  faChartLine,
  faBug,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: faReact, level: 90 },
        { name: "JavaScript", icon: faJs, level: 85 },
        { name: "HTML5", icon: faHtml5, level: 95 },
        { name: "CSS3/Bootstrap", icon: faCss3Alt, level: 88 },
        { name: ".NET MVC", icon: faMicrosoft, level: 82 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: faNode, level: 82 },
        { name: "Python", icon: faPython, level: 78 },
        { name: "C#", icon: faCode, level: 85 },
        { name: "Java", icon: faJava, level: 75 }
      ]
    },
    {
      title: "Database & Infrastructure",
      skills: [
        { name: "SQL", icon: faDatabase, level: 88 },
        { name: "Microsoft SQL Server", icon: faDatabase, level: 85 },
        { name: "AWS", icon: faAws, level: 75 },
        { name: "Docker", icon: faDocker, level: 70 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: faGit, level: 85 },
        { name: "System Administration", icon: faServer, level: 80 },
        { name: "CI/CD", icon: faGears, level: 75 }
      ]
    },
    {
      title: "IT Support & Security",
      skills: [
        { name: "Network Security", icon: faShieldAlt, level: 85 },
        { name: "IT Support", icon: faHeadset, level: 90 },
        { name: "Troubleshooting", icon: faBug, level: 92 },
        { name: "ITIL", icon: faClipboardCheck, level: 85 }
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Quality Assurance", icon: faClipboardCheck, level: 88 },
        { name: "Performance Optimization", icon: faChartLine, level: 85 },
        { name: "Process Improvement", icon: faGears, level: 82 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="skills-container">
      <motion.div 
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Technical Skills</h1>
        <div className="header-decoration"></div>
        <p className="skills-subtitle">Comprehensive overview of my technical expertise and proficiency levels</p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skill-category"
            variants={itemVariants}
          >
            <h2>{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-card"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="progress-container">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <span className="progress-text">{skill.level}%</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="skills-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="certification-badge">
          <FontAwesomeIcon icon={faClipboardCheck} className="badge-icon" />
          <span>Professional Certifications Available</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
