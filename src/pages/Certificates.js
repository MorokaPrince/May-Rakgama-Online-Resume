import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFilePdf, 
  faExternalLinkAlt,
  faCircle,
  faPlus,
  faLink,
  faMedal,
  faQuoteRight,
  faImage,
  faEye,
  faDownload,
  faTimes,
  faCloudUploadAlt,
  faFile,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import './Certificates.css';

const Certificates = () => {
  const [uploadedItems, setUploadedItems] = useState({
    certificates: [],
    testimonials: [],
    badges: [],
    links: []
  });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadType, setUploadType] = useState('certificate');
  const [newLink, setNewLink] = useState({
    url: '',
    title: '',
    description: ''
  });

  // Load saved items from localStorage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem('portfolioItems');
    if (savedItems) {
      setUploadedItems(JSON.parse(savedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(uploadedItems));
  }, [uploadedItems]);

  const certificates = [
    {
      id: 1,
      name: "Full Stack Software Engineering",
      issuer: "IBM",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/XXXXX",
      image: "https://images.credly.com/size/680x680/images/5a53000d-fed4-4877-b17d-d769a50eeb4e/image.png"
    },
    {
      id: 2,
      name: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/YYYYY",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7W7YDUPQO9O9/CERTIFICATE_LANDING_PAGE~7W7YDUPQO9O9.jpeg"
    },
    {
      id: 3,
      name: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/verify/ZZZZZ",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5WKBU190YI6U/CERTIFICATE_LANDING_PAGE~5WKBU190YI6U.jpeg"
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convert file to base64 for storage
      const reader = new FileReader();
      reader.onloadend = () => {
        const newItem = {
          id: Date.now(),
          name: file.name,
          type: file.type,
          date: new Date().toLocaleDateString(),
          url: reader.result // Store base64 data
        };

        setUploadedItems(prev => ({
          ...prev,
          [uploadType + 's']: [...prev[uploadType + 's'], newItem]
        }));
      };
      reader.readAsDataURL(file);
      setShowUploadModal(false);
    }
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    if (newLink.url && newLink.title) {
      const newItem = {
        id: Date.now(),
        ...newLink,
        date: new Date().toLocaleDateString()
      };

      setUploadedItems(prev => ({
        ...prev,
        links: [...prev.links, newItem]
      }));
      setNewLink({ url: '', title: '', description: '' });
      setShowUploadModal(false);
    }
  };

  const removeItem = (type, id) => {
    setUploadedItems(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id)
    }));
  };

  const uploadButtons = [
    { type: 'certificate', icon: faFilePdf, label: 'Certificate' },
    { type: 'testimonial', icon: faQuoteRight, label: 'Testimonial' },
    { type: 'badge', icon: faMedal, label: 'Badge' },
    { type: 'link', icon: faLink, label: 'Link' }
  ];

  const handleUploadClick = (type) => {
    setUploadType(type);
    setShowUploadModal(true);
  };

  const handleItemClick = (item) => {
    if (item.type?.includes('pdf') || item.url?.endsWith('.pdf')) {
      window.open(item.url, '_blank');
    } else if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  const getItemIcon = (item) => {
    if (item.type?.includes('pdf')) return faFilePdf;
    if (item.type?.includes('image')) return faImage;
    if (item.url) return faLink;
    return faFile;
  };

  const ItemCard = ({ item, type }) => (
    <div className="item-card">
      <div className="item-content" onClick={() => handleItemClick(item)}>
        <FontAwesomeIcon icon={getItemIcon(item)} className="item-icon" />
        <div className="item-details">
          <div className="item-name">{item.name || item.title}</div>
          <div className="item-date">{item.date}</div>
        </div>
      </div>
      <button 
        className="remove-btn"
        onClick={() => removeItem(type, item.id)}
        aria-label="Remove item"
      >
        <FontAwesomeIcon icon={faCircle} className="remove-icon" />
      </button>
    </div>
  );

  return (
    <div className="certificates-container">
      <div className="page-header">
        <h1>Certificates & Credentials</h1>
        <p>Manage your professional achievements</p>
      </div>

      {/* Quick Actions Row */}
      <div className="quick-actions-bar">
        {uploadButtons.map(({ type, icon, label }) => (
          <button 
            key={type}
            className="upload-button-compact"
            onClick={() => handleUploadClick(type)}
          >
            <FontAwesomeIcon className="icon" icon={icon} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Recent Updates Row */}
      <section className="recent-updates">
        <h2 className="section-header">Recent Updates</h2>
        <div className="recent-updates-grid">
          {Object.values(uploadedItems)
            .flat()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 6)
            .map(item => (
              <div 
                key={item.id}
                className="update-item"
                onClick={() => handleItemClick(item)}
                role="button"
                tabIndex={0}
              >
                <div className="update-item-content">
                  <FontAwesomeIcon 
                    icon={getItemIcon(item)} 
                    className="update-item-icon" 
                  />
                  <div className="update-item-details">
                    <div className="update-item-name">{item.name || item.title}</div>
                    <div className="update-item-date">{item.date}</div>
                  </div>
                </div>
                <div className="update-item-actions">
                  <button 
                    className="action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(item.type + 's', item.id);
                    }}
                    title="Remove"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* IBM Certificates Section */}
      <section className="certificates-section">
        <h2 className="section-header">IBM Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card">
              <img src={cert.image} alt={cert.name} className="certificate-image" />
              <div className="certificate-details">
                <h3>{cert.name}</h3>
                <div className="issuer">{cert.issuer}</div>
                <div className="date">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}</h3>
              <button 
                className="close-modal-btn"
                onClick={() => setShowUploadModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            {uploadType === 'link' ? (
              <form onSubmit={handleAddLink} className="link-form">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={newLink.title}
                    onChange={e => setNewLink(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>URL</label>
                  <input
                    type="url"
                    value={newLink.url}
                    onChange={e => setNewLink(prev => ({ ...prev, url: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={newLink.description}
                    onChange={e => setNewLink(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>
                <button type="submit" className="submit-btn">Add Link</button>
              </form>
            ) : (
              <div className="upload-area">
                <input
                  type="file"
                  accept={uploadType === 'certificate' ? '.pdf,.jpg,.jpeg,.png' : '.pdf,.doc,.docx,.jpg,.jpeg,.png'}
                  onChange={handleFileUpload}
                  className="file-input"
                  id="file-input"
                />
                <label htmlFor="file-input" className="upload-label">
                  <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
                  <p>Drop files here or click to browse</p>
                </label>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;

