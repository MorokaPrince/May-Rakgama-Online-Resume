import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificates.css';

const Certificates = ({ certificates }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="certificates-container">
      <div className="certificates-header" data-aos="fade-down">
        <h1>Professional Certifications</h1>
        <p>Validating expertise through recognized certifications</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="certificate-icon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <div className="certificate-content">
              <h3>{cert.name}</h3>
              <div className="certificate-details">
                <span className="issuer">{cert.issuer}</span>
                <span className="date">{cert.date}</span>
              </div>
              <a
                href={cert.link}
                className="view-certificate"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="certificates-footer" data-aos="fade-up">
        <p>Continuously learning and expanding my skill set through professional certifications</p>
      </div>
    </div>
  );
};

export default Certificates;