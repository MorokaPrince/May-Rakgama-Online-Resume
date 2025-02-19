import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faClock, faBuilding, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Vodacom ASOC (IOCO Contractors)",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEZhqd-eccj3w/company-logo_100_100/company-logo_100_100/0/1699590352029?e=1747872000&v=beta&t=6GDylDZEvhlh0m1vZ-NTQ5bMoES5tEaxS00zN2vbUJU",
      role: "Core IT Network Fault Management Support Technician",
      duration: "Oct 2023 - Present",
      location: "Cape Town, Western Cape, South Africa",
      type: "Contract",
      workMode: "On-site",
      description: "As a dedicated Core IT Applications Support Specialist at Vodacom ASOC, I thrive in the dynamic world of multiple systems operation and support.",
      responsibilities: [
        {
          title: "System Operation & Maintenance",
          description: "Excel in the day-to-day operation and maintenance of critical systems, ensuring optimal performance and reliability."
        },
        {
          title: "Escalation Management",
          description: "Well-versed in handling escalations with precision, providing swift resolutions to minimize disruptions."
        },
        {
          title: "Collaboration",
          description: "Working hand-in-hand with the development team, facilitating seamless system applications maintenance and core support."
        },
        {
          title: "Quality Assurance",
          description: "Commitment to quality assurance guarantees that systems run efficiently, meeting and exceeding client expectations."
        },
        {
          title: "Performance Optimization",
          description: "Constantly seeking opportunities for performance enhancement, fine-tuning systems for optimal efficiency."
        }
      ],
      skills: ["IT Support", "System Administration", "Network Security", "Troubleshooting", "ITIL"]
    },
    {
      id: 2,
      company: "SpaceSoft Technology",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFNnUjOqcJHNA/company-logo_100_100/company-logo_100_100/0/1631351154896?e=1747872000&v=beta&t=JOQbVoX_YYGmdJBkoPxopfzPDmOpHV4iY_ov-30jRbQ",
      role: "Junior Software Developer",
      duration: "Mar 2022 - Jun 2023 · 1 yr 4 mos",
      location: "Cape Town, Western Cape, South Africa",
      type: "Contract",
      workMode: "Remote",
      description: "Developed and maintained web applications using .NET framework and modern web technologies.",
      responsibilities: [
        {
          title: "Development",
          description: "Assisted in development, testing, and debugging of web applications using ASP.NET"
        },
        {
          title: "Collaboration",
          description: "Collaborated with senior developers to implement new features and functionalities"
        },
        {
          title: "Documentation",
          description: "Wrote and maintained code documentation for future reference and team communication"
        }
      ],
      skills: [".NET", "C#", "ASP.NET", "HTML/CSS", "JavaScript", "Git"]
    },
    {
      id: 3,
      company: "Santam Insurance",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF-JPxYy5beFg/company-logo_100_100/company-logo_100_100/0/1725376579719/santam_logo?e=1747872000&v=beta&t=86pepPOwNCzdPqOSRzFIB27Ib1mqdweFdBm6A0RIP8s",
      role: "Quality Auditor",
      duration: "Mar 2021 - Feb 2022 · 1 yr",
      location: "City of Johannesburg, Gauteng, South Africa",
      type: "Contract",
      workMode: "Remote",
      description: "Served as a Quality Auditor ensuring high standards and compliance with quality requirements.",
      responsibilities: [
        {
          title: "Quality Reporting",
          description: "Preparing reports on quality related matters"
        },
        {
          title: "Audit Management",
          description: "Plan, execute and close issues on audits (Quality System audits, Process Audits, Product Audits) on customer and quality standard requirements"
        },
        {
          title: "Quality Metrics",
          description: "Create quality measurements to track improvement in products"
        },
        {
          title: "Process Improvement",
          description: "Developing quality assurance standards and company processes"
        },
        {
          title: "Standards Compliance",
          description: "Adhering to industry quality and safety standards"
        },
        {
          title: "Product Quality",
          description: "Ensuring products meet customer expectations and demand"
        },
        {
          title: "Documentation",
          description: "Creating reports documenting errors and issues for fixing"
        },
        {
          title: "Team Collaboration",
          description: "Working closely with the development team to improve existing products"
        }
      ],
      skills: ["Quality Assurance", "Auditing", "Process Improvement", "Documentation", "Quality Control"]
    },
    {
      id: 4,
      company: "Santam Insurance",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF-JPxYy5beFg/company-logo_100_100/company-logo_100_100/0/1725376579719/santam_logo?e=1747872000&v=beta&t=86pepPOwNCzdPqOSRzFIB27Ib1mqdweFdBm6A0RIP8s",
      role: "Client Consultant Agent",
      duration: "Jan 2020 - Feb 2021 · 1 yr 2 mos",
      location: "Cape Town, Western Cape, South Africa",
      type: "Contract",
      workMode: "Hybrid",
      description: "Provided exceptional customer service and support to clients.",
      responsibilities: [
        {
          title: "Client Relations",
          description: "Establishing positive client relationships through efficient customer service assistance"
        },
        {
          title: "Client Support",
          description: "Interacting with clients to identify their needs, answer inquiries, and handle issues and complaints, resolving them promptly and efficiently"
        }
      ],
      skills: ["Customer Service", "Client Relations", "Problem Resolution", "Communication"]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="experience-container">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gradient-text">Professional Journey</h1>
        <div className="header-decoration"></div>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className={`experience-card glass-effect ${expandedId === exp.id ? 'expanded' : ''}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-header glass-effect" onClick={() => toggleExpand(exp.id)}>
              <div className="company-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="header-content">
                <h3 className="gradient-text">{exp.role}</h3>
                <div className="company-info">
                  <FontAwesomeIcon icon={faBuilding} className="icon-gradient" />
                  <span>{exp.company}</span>
                  <span className="employment-type gradient-bg">{exp.type}</span>
                </div>
                <div className="job-meta">
                  <span className="duration">
                    <FontAwesomeIcon icon={faClock} className="icon-gradient" />
                    {exp.duration}
                  </span>
                  <span className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="icon-gradient" />
                    {exp.location} · {exp.workMode}
                  </span>
                </div>
              </div>
              <FontAwesomeIcon 
                icon={expandedId === exp.id ? faChevronUp : faChevronDown}
                className="expand-icon icon-gradient"
              />
            </div>

            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  className="card-details glass-effect"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="description">{exp.description}</p>
                  <div className="responsibilities">
                    <h4 className="gradient-text">Key Responsibilities:</h4>
                    {exp.responsibilities.map((resp, index) => (
                      <div key={index} className="responsibility-item">
                        <h5 className="gradient-text">{resp.title}</h5>
                        <p>{resp.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="skills-section">
                    <h4 className="gradient-text">Skills:</h4>
                    <div className="skills-list">
                      {exp.skills.map((skill, index) => (
                        <span key={index} className="skill-tag gradient-bg">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
