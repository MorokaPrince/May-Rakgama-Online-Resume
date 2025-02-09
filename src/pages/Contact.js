import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    // For now, we'll just show a success message
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus(''), 3000);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header" data-aos="fade-down">
        <h1>Get in Touch</h1>
        <p>Let's connect and discuss opportunities</p>
      </div>

      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-items">
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>

              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} />
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </div>
              </div>

              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div>
                  <h4>Location</h4>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a 
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;