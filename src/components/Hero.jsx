import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Coffee } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Web Developer',
    'WordPress Expert',
    'BSIT Student',
    'Frontend Enthusiast'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-element" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
            <Code size={24} />
          </div>
          <div className="floating-element" style={{ top: '30%', right: '15%', animationDelay: '2s' }}>
            <Coffee size={20} />
          </div>
          <div className="floating-element" style={{ bottom: '25%', left: '15%', animationDelay: '4s' }}>
            <Github size={20} />
          </div>
          <div className="floating-element" style={{ top: '15%', right: '25%', animationDelay: '1s' }}>
            <div className="code-bracket">{'{ }'}</div>
          </div>
          <div className="floating-element" style={{ bottom: '30%', right: '20%', animationDelay: '3s' }}>
            <div className="code-tag">{'</>'}</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-emoji">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              <span className="text-gradient">Javy Malisud Rodillon</span>
            </h1>
            
            <div className="hero-role">
              <span>I'm a </span>
              <span className="role-rotator">
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className={`role ${index === currentRole ? 'active' : ''}`}
                  >
                    {role}
                  </span>
                ))}
              </span>
            </div>

            <p className="hero-description">
              Passionate about creating amazing web experiences with modern technologies. 
              Currently pursuing BSIT while building responsive websites and WordPress solutions 
              for clients worldwide.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <strong>2+</strong>
                <span>Years Learning</span>
              </div>
              <div className="stat">
                <strong>15+</strong>
                <span>Projects Built</span>
              </div>
              <div className="stat">
                <strong>5+</strong>
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="hero-actions">
              <button onClick={handleContactClick} className="btn btn-primary">
                <Mail size={16} />
                Hire Me
              </button>
              <button onClick={handleProjectsClick} className="btn btn-outline">
                View Projects
              </button>
            </div>

            <div className="hero-social">
              <a 
                href="https://github.com/RvnXcnnrr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rodillon.javy.32181@gmail.com"
                className="social-link"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="hero-location">
              <MapPin size={16} />
              <span>Available for Remote Work</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Javy Malisud Rodillon - Web Developer" 
                  className="profile-photo"
                />
              </div>
              <div className="hero-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-square"></div>
                <div className="decoration-triangle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={handleScrollDown}>
          <div className="scroll-text">Scroll Down</div>
          <ChevronDown size={20} className="bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
