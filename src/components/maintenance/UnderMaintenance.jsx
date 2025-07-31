import React from 'react';
import { 
  Wrench, 
  Clock, 
  Mail, 
  Github, 
  Linkedin,
  Coffee,
  Code
} from 'lucide-react';
import './UnderMaintenance.css';

const UnderMaintenance = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        {/* Logo/Brand */}
        <div className="maintenance-brand">
          <div className="brand-logo">
            <Code className="logo-icon" />
            <span className="logo-text">JMR Portfolio</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="maintenance-main">
          <div className="maintenance-icon">
            <Wrench size={48} />
          </div>
          
          <h1 className="maintenance-title">
            Under Maintenance
          </h1>
          
          <p className="maintenance-description">
            I'm currently working on some exciting updates to bring you a better experience. 
            The site will be back online soon with fresh content and improved features.
          </p>

          <div className="maintenance-details">
            <div className="detail-item">
              <Clock size={20} />
              <span>Expected to be back soon</span>
            </div>
            <div className="detail-item">
              <Coffee size={20} />
              <span>Fueled by coffee and passion</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="maintenance-contact">
          <h3>Need to reach me?</h3>
          <p>Feel free to contact me through any of these channels:</p>
          
          <div className="contact-links">
            <a 
              href="mailto:javyrodillon@gmail.com" 
              className="contact-link"
              aria-label="Send email"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/RvnXcnnrr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub profile"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/javy-rodillon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="maintenance-footer">
          <p>© {currentYear} Javy Malisud Rodillon. All rights reserved.</p>
          <p className="footer-note">Thank you for your patience!</p>
        </div>
      </div>

      {/* Background Animation */}
      <div className="maintenance-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
