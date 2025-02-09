import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faExternalLinkAlt, faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificates.css';

const Certificates = ({ certificates: defaultCertificates }) => {
  const [certificates, setCertificates] = useState(defaultCertificates);
  const [uploadedCerts, setUploadedCerts] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newCerts = Array.from(files).map(file => {
      return {
        name: file.name.replace(/\.[^/.]+$/, ""),
        issuer: "Personal Upload",
        date: new Date().getFullYear(),
        file: URL.createObjectURL(file),
        isUploaded: true
      };
    });
    setUploadedCerts([...uploadedCerts, ...newCerts]);
  };

  const removeCertificate = (index) => {
    const newUploadedCerts = uploadedCerts.filter((_, i) => i !== index);
    setUploadedCerts(newUploadedCerts);
  };

  return (
    <div className="certificates-container">
      <div className="certificates-header" data-aos="fade-down">
        <h1>Professional Certifications</h1>
        <p>Validating expertise through recognized certifications</p>
      </div>

      <div className="upload-section" data-aos="fade-up">
        <div 
          className={`upload-area ${dragActive ? 'drag-active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <FontAwesomeIcon icon={faUpload} className="upload-icon" />
          <p>Drag and drop your certificates here or</p>
          <label className="upload-button">
            <span>Choose Files</span>
            <input
              type="file"
              multiple
              accept="image/*,.pdf"
              onChange={handleFileInput}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={`default-${index}`}
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

        {uploadedCerts.map((cert, index) => (
          <div
            key={`uploaded-${index}`}
            className="certificate-card uploaded"
            data-aos="fade-up"
            data-aos-delay={(certificates.length + index) * 100}
          >
            <button 
              className="remove-certificate" 
              onClick={() => removeCertificate(index)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="certificate-preview">
              {cert.file.endsWith('.pdf') ? (
                <div className="pdf-preview">PDF Document</div>
              ) : (
                <img src={cert.file} alt={cert.name} />
              )}
            </div>
            <div className="certificate-content">
              <h3>{cert.name}</h3>
              <div className="certificate-details">
                <span className="issuer">{cert.issuer}</span>
                <span className="date">{cert.date}</span>
              </div>
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