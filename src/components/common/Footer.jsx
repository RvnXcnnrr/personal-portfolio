import React from 'react';
import { 
  Heart, 
  ArrowUp,
  Code,
  Coffee,
  Globe,
  Clock
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
                <span className="logo-text text-gradient">JMR Portfolio</span>
              </div>
              <p className="brand-description">
                Passionate BSIT student and web developer creating amazing digital experiences 
                with modern technologies. Specializing in React.js, WordPress, and responsive design.
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

            <div className="footer-section">
              <h4>Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        aria-label={`Navigate to ${link.label} section`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
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

            {/* Contact & Professional Info */}
            <div className="footer-section footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <p className="availability-status">
                  <span className="status-dot available"></span>
                  Available for freelance projects
                </p>
                <p className="response-time">
                  <Clock size={16} />
                  Usually responds within 24 hours
                </p>
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
              <div className="footer-links-inline">
                <a 
                  href="#privacy" 
                  onClick={(e) => e.preventDefault()}
                  aria-label="Privacy Policy"
                >
                  Privacy
                </a>
                <a 
                  href="#terms" 
                  onClick={(e) => e.preventDefault()}
                  aria-label="Terms of Service"
                >
                  Terms
                </a>
                <a 
                  href="#sitemap" 
                  onClick={(e) => e.preventDefault()}
                  aria-label="Website Sitemap"
                >
                  Sitemap
                </a>
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
