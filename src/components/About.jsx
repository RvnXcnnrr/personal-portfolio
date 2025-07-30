import React from 'react';
import { BookOpen, Award, Heart, Target, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const achievements = [
    {
      icon: <BookOpen size={24} />,
      title: 'BSIT Student',
      description: 'Currently pursuing Bachelor of Science in Information Technology'
    },
    {
      icon: <Award size={24} />,
      title: 'Certified Developer',
      description: 'Completed courses on freeCodeCamp, Coursera, and other platforms'
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
                Passionate Web Developer & BSIT Student
              </h3>
              <p>
                Hello! I'm Javy Malisud Rodillon, a dedicated web development enthusiast currently pursuing my 
                Bachelor of Science in Information Technology. My journey in web development 
                started during my first year of college, and I've been passionate about creating 
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
                As a freelancer, I've had the opportunity to work with diverse clients, helping 
                them bring their digital visions to life. Each project teaches me something new 
                and reinforces my love for problem-solving through code.
              </p>
            </div>

            <div className="about-goals">
              <h4>
                <Target size={20} />
                Current Goals
              </h4>
              <ul>
                <li>Master React.js and Node.js for full-stack development</li>
                <li>Build a strong portfolio of diverse web projects</li>
                <li>Contribute to open-source projects</li>
                <li>Land my first full-time developer role after graduation</li>
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
                  <span>BSIT (Expected 2025)</span>
                </div>
                <div className="info-item">
                  <strong>Experience:</strong>
                  <span>2+ Years Self-Learning</span>
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
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how I can help bring your ideas to life!
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
