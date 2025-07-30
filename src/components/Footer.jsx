import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp,
  Code,
  Coffee,
  Globe
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'WordPress Development',
    'React Applications',
    'UI/UX Design',
    'Website Optimization',
    'SEO & Analytics'
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      url: 'https://github.com/RvnXcnnrr',
      handle: '@RvnXcnnrr'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      handle: 'Javy Malisud Rodillon'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      url: 'mailto:rodillon.javy.32181@gmail.com',
      handle: 'rodillon.javy.32181@gmail.com'
    }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <span className="logo-text text-gradient">Portfolio</span>
              </div>
              <p className="brand-description">
                Passionate web developer creating amazing digital experiences 
                with modern technologies. Always learning, always building.
              </p>
              <div className="brand-stats">
                <div className="stat">
                  <Code size={16} />
                  <span>Clean Code</span>
                </div>
                <div className="stat">
                  <Coffee size={16} />
                  <span>Fueled by Coffee</span>
                </div>
                <div className="stat">
                  <Globe size={16} />
                  <span>Remote Ready</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="footer-section">
              <h4>Let's Connect</h4>
              <div className="contact-info">
                <p>Available for freelance projects</p>
                <a href="mailto:rodillon.javy.32181@gmail.com" className="contact-email">
                  rodillon.javy.32181@gmail.com
                </a>
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={`Connect with me on ${social.label}`}
                  >
                    {social.icon}
                    <span className="social-handle">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Javy Malisud Rodillon. Made with{' '}
                <Heart size={14} className="heart-icon" fill="currentColor" />{' '}
                and lots of coffee.
              </p>
            </div>
            
            <div className="footer-meta">
              <span className="built-with">
                Built with React & Modern CSS
              </span>
              <div className="footer-links-inline">
                <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Sitemap</a>
              </div>
            </div>

            <button 
              className="scroll-to-top"
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-background">
        <div className="footer-shape footer-shape-1"></div>
        <div className="footer-shape footer-shape-2"></div>
        <div className="footer-shape footer-shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
