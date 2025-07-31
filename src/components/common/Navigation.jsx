import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would place your actual resume file in the public folder
    link.download = 'Javy_Malisud_Rodillon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              <span className="logo-text text-gradient">Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={handleResumeDownload}
              className="btn btn-primary resume-btn"
            >
              <Download size={16} />
              Resume
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="btn btn-primary mobile-resume-btn"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
