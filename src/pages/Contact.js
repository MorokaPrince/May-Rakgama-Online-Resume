import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web-development',
    preferredContact: 'email',
    urgency: 'normal',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'web-development',
        preferredContact: 'email',
        urgency: 'normal',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className="contact-container">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Let's Connect</h1>
        <p>Available for IT Support, Web Development, and Technical Consulting</p>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="info-card">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>{profile.phone}</p>
            </div>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>{profile.location}</p>
            </div>
          </div>
          
          <div className="social-links">
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="web-development">Web Development</option>
                <option value="it-support">IT Support</option>
                <option value="consulting">Technical Consulting</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="6"
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="loading-spinner" />
              ) : (
                <>
                  <span>Send Message</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </motion.button>
            {submitStatus && (
              <motion.div
                className={`submit-status ${submitStatus}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {submitStatus === 'success' 
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
