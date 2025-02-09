import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBriefcase, 
  faGraduationCap, 
  faCertificate,
  faLaptopCode,
  faEnvelope,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', icon: faHome, text: 'Home' },
    { path: '/experience', icon: faBriefcase, text: 'Experience' },
    { path: '/skills', icon: faLaptopCode, text: 'Skills' },
    { path: '/education', icon: faGraduationCap, text: 'Education' },
    { path: '/certificates', icon: faCertificate, text: 'Certificates' },
    { path: '/projects', icon: faLaptopCode, text: 'Projects' },
    { path: '/contact', icon: faEnvelope, text: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-text">May Rakgama</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              <span className="nav-text">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;