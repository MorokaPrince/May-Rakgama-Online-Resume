import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin,
  faStackOverflow,
  faMedium 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone,
  faMapMarkerAlt,
  faArrowRight,
  faBriefcase,
  faCode,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = ({ profile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const socialLinks = [
    { 
      icon: faGithub, 
      name: 'GitHub', 
      url: 'https://github.com/settings/profile' 
    },
    { 
      icon: faLinkedin, 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/may-rakgama-4a9aa4136/' 
    },
    { 
      icon: faEnvelope, 
      name: 'Email', 
      url: 'mailto:luckyrakgama@gmail.com' 
    }
  ];

  const stats = {
    experience: {
      value: '5+',
      label: 'Years',
      icon: faBriefcase,
      details: 'Development'
    },
    projects: {
      value: '6',
      label: 'Projects',
      icon: faCode,
      details: 'Full Stack'
    },
    technologies: {
      value: '12',
      label: 'Tech Stack',
      icon: faLaptopCode,
      details: 'Core Skills'
    }
  };

  return (
    <>
      <motion.div 
        className="home-container"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="background-elements">
          <div className="blur-circle circle-1"></div>
        </div>

        <section className="hero-section">
          <motion.div className="hero-content">
            <motion.div 
              className="profile-image-container"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {!imageError ? (
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQHVYbNbNuKJrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671710217930?e=1745452800&v=beta&t=C99aEJtIlLpI7Y5MwbDZsnnV2H9AlH4C3PDYtYxM6hs"
                  alt="May Rakgama"
                  className="profile-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="initials-fallback">
                  MR
                </div>
              )}
            </motion.div>

            <div className="profile-info">
              <h1 className="name">{profile.name}</h1>
              <div className="title-wrapper">
                <TypewriterComponent
                  options={{
                    strings: [
                      profile.title,
                      "Full Stack Developer",
                      "IT Professional",
                      "Problem Solver"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 100,
                  }}
                />
              </div>
              
              <motion.div 
                className="introduction-quote"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p>{profile.about.introduction}</p>
              </motion.div>

              <div className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                <span>{profile.location}</span>
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={link.icon} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="stats-section" data-aos="fade-up" data-aos-delay="300">
          <div className="stats-grid">
            {Object.entries(stats).map(([key, stat]) => (
              <motion.div 
                key={key}
                className="stat-card"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                </div>
                <motion.span 
                  className="stat-value"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-details">{stat.details}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="quick-links" data-aos="fade-up" data-aos-delay="400">
          <div className="section-title">
            <h2>Explore My Portfolio</h2>
          </div>
          <div className="grid">
            {[
              { to: "/experience", title: "Experience", desc: "Journey" },
              { to: "/skills", title: "Skills", desc: "Expertise" },
              { to: "/education", title: "Education", desc: "Academic" },
              { to: "/certificates", title: "Certificates", desc: "Achievements" },
              { to: "/projects", title: "Projects", desc: "Portfolio" },
              { to: "/contact", title: "Contact", desc: "Connect" }
            ].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={link.to} className="quick-link-card">
                  <h3>{link.title}</h3>
                  <p>{link.desc}</p>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
