import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone,
  faMapMarkerAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = ({ profile }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <div className="profile-image-container">
            <div className="profile-image">
              {/* Profile image placeholder with initials */}
              <span>{profile.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
          
          <h1 className="name">{profile.name}</h1>
          <h2 className="title">{profile.title}</h2>
          
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{profile.location}</span>
          </div>

          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="social-link">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <a href={`tel:${profile.phone}`} className="social-link">
              <FontAwesomeIcon icon={faPhone} /> Call
            </a>
          </div>
        </div>
      </section>

      <section className="summary-section" data-aos="fade-up" data-aos-delay="200">
        <div className="summary-content">
          <h3>About Me</h3>
          <p>{profile.summary}</p>
        </div>
      </section>

      <section className="quick-links" data-aos="fade-up" data-aos-delay="400">
        <div className="grid">
          <Link to="/experience" className="quick-link-card">
            <h3>Experience</h3>
            <p>View my professional journey</p>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>

          <Link to="/skills" className="quick-link-card">
            <h3>Skills</h3>
            <p>Explore my technical expertise</p>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>

          <Link to="/projects" className="quick-link-card">
            <h3>Projects</h3>
            <p>Check out my latest work</p>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>

          <Link to="/contact" className="quick-link-card">
            <h3>Contact</h3>
            <p>Let's get in touch</p>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </section>

      <section className="skills-preview" data-aos="fade-up" data-aos-delay="600">
        <h3>Key Skills</h3>
        <div className="skills-container">
          {profile.skills.slice(0, 8).map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
        <Link to="/skills" className="see-more-link">
          See all skills <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </section>
    </div>
  );
};

export default Home;