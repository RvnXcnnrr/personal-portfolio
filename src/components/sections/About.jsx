import React from 'react';
import { BookOpen, Award, Heart, Target, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const achievements = [
    {
      icon: <BookOpen size={24} />,
      title: 'IT Graduate',
      description: 'Fresh graduate with Bachelor of Science in Information Technology (2025)'
    },
    {
      icon: <Award size={24} />,
      title: 'CCNA Certified',
      description: 'Enterprise Networking, Security, and Automation certification from USTSP'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Collaborative approach to problem-solving and project development'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and development practices'
    }
  ];

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Network Security',
    'Enterprise Networking',
    'Open Source',
    'Mobile Apps',
    'Cloud Computing',
    'AI/ML'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>
                <Heart size={20} className="heart-icon" />
                Passionate Web Developer & IT Graduate
              </h3>
              <p>
                Hello! I'm Javy Malisud Rodillon, a dedicated web developer with a fresh 
                Bachelor of Science in Information Technology degree. My journey in web development 
                started during my college years, and I've been passionate about creating 
                amazing digital experiences ever since.
              </p>
            </div>

            <div className="about-story">
              <h4>My Journey</h4>
              <p>
                What began as curiosity about how websites work has evolved into a deep passion 
                for web development. I specialize in creating responsive, user-friendly websites 
                using modern technologies like HTML5, CSS3, JavaScript, and WordPress. I'm 
                constantly learning new frameworks and tools to stay current with industry trends.
              </p>
              
              <p>
                As a fresh IT graduate with networking expertise through CCNA certification, I bring 
                both web development skills and technical infrastructure knowledge to every project. 
                This unique combination allows me to create websites that are not only visually 
                appealing but also technically sound and performance-optimized.
              </p>
            </div>

            <div className="about-goals">
              <h4>
                <Target size={20} />
                Current Goals
              </h4>
              <ul>
                <li>Secure a full-time web developer position in a dynamic tech company</li>
                <li>Master React.js and Node.js for full-stack development</li>
                <li>Build enterprise-level applications with modern frameworks</li>
                <li>Contribute to open-source projects and developer community</li>
                <li>Integrate networking knowledge with web development for better solutions</li>
              </ul>
            </div>

            <div className="about-interests">
              <h4>What I'm Interested In</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>

            <div className="personal-info">
              <h4>Quick Facts</h4>
              <div className="info-list">
                <div className="info-item">
                  <strong>Full Name:</strong>
                  <span>Javy Malisud Rodillon</span>
                </div>
                <div className="info-item">
                  <strong>Age:</strong>
                  <span>24 years old</span>
                </div>
                <div className="info-item">
                  <strong>Birthday:</strong>
                  <span>May 12, 2001</span>
                </div>
                <div className="info-item">
                  <strong>Location:</strong>
                  <span>Available for Remote Work</span>
                </div>
                <div className="info-item">
                  <strong>Education:</strong>
                  <span>Bachelor of Science in Information Technology (2025)</span>
                </div>
                <div className="info-item">
                  <strong>Experience:</strong>
                  <span>2+ Years Development Experience</span>
                </div>
                <div className="info-item">
                  <strong>Certifications:</strong>
                  <span>CCNA Enterprise Networking</span>
                </div>
                <div className="info-item">
                  <strong>Availability:</strong>
                  <span>Open to Opportunities</span>
                </div>
                <div className="info-item">
                  <strong>Languages:</strong>
                  <span>English, Filipino</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-content">
            <h3>Ready to Work Together?</h3>
            <p>
              As a fresh IT graduate with both web development and networking expertise, 
              I'm excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how my unique skill combination can help bring your vision to life!
            </p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
