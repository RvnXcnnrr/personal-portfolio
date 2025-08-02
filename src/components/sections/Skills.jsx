import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Settings,
  Star,
  TrendingUp
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [expandedCerts, setExpandedCerts] = useState({});

  const toggleCertDetails = (index) => {
    setExpandedCerts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'HTML5', level: 95, experience: '2+ years', color: '#e34f26' },
        { name: 'CSS3', level: 90, experience: '2+ years', color: '#1572b6' },
        { name: 'JavaScript', level: 85, experience: '1.5+ years', color: '#f7df1e' },
        { name: 'React', level: 75, experience: '1 year', color: '#61dafb' },
        { name: 'Responsive Design', level: 92, experience: '2+ years', color: '#38bdf8' },
        { name: 'Bootstrap', level: 88, experience: '1.5+ years', color: '#7952b3' }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: <Settings size={24} />,
      skills: [
        { name: 'WordPress', level: 95, experience: '2+ years', color: '#21759b' },
        { name: 'Git & GitHub', level: 80, experience: '1+ year', color: '#f05032' },
        { name: 'VS Code', level: 90, experience: '2+ years', color: '#007acc' },
        { name: 'Figma', level: 70, experience: '6 months', color: '#f24e1e' },
        { name: 'Chrome DevTools', level: 85, experience: '1.5+ years', color: '#4285f4' },
        { name: 'NPM', level: 75, experience: '1 year', color: '#cb0000' }
      ]
    },
    design: {
      title: 'Design & UX',
      icon: <Palette size={24} />,
      skills: [
        { name: 'UI/UX Design', level: 75, experience: '1+ year', color: '#ff6b6b' },
        { name: 'Adobe Photoshop', level: 70, experience: '1+ year', color: '#31a8ff' },
        { name: 'Color Theory', level: 80, experience: '1+ year', color: '#ffd93d' },
        { name: 'Typography', level: 75, experience: '1+ year', color: '#6c5ce7' },
        { name: 'Wireframing', level: 72, experience: '8 months', color: '#a29bfe' },
        { name: 'Prototyping', level: 68, experience: '6 months', color: '#fd79a8' }
      ]
    },
    learning: {
      title: 'Currently Learning',
      icon: <TrendingUp size={24} />,
      skills: [
        { name: 'Node.js', level: 60, experience: 'Learning', color: '#339933' },
        { name: 'MongoDB', level: 55, experience: 'Learning', color: '#47a248' },
        { name: 'TypeScript', level: 50, experience: 'Learning', color: '#3178c6' },
        { name: 'Next.js', level: 45, experience: 'Learning', color: '#000000' },
        { name: 'PHP', level: 40, experience: 'Learning', color: '#777bb4' },
        { name: 'MySQL', level: 55, experience: 'Learning', color: '#4479a1' }
      ]
    },
    networking: {
      title: 'Networking & Security',
      icon: <Globe size={24} />,
      skills: [
        { name: 'CCNA Enterprise Networking', level: 85, experience: 'Certified', color: '#1ba1e2' },
        { name: 'Network Security', level: 80, experience: 'Certified', color: '#e74c3c' },
        { name: 'Network Automation', level: 75, experience: 'Certified', color: '#9b59b6' },
        { name: 'Routing & Switching', level: 85, experience: 'Certified', color: '#27ae60' },
        { name: 'Network Troubleshooting', level: 80, experience: 'Certified', color: '#f39c12' },
        { name: 'LAN/WAN Configuration', level: 82, experience: 'Certified', color: '#34495e' }
      ]
    }
  };

  const certifications = [
    {
      title: 'Computer System Servicing NC II',
      provider: 'TESDA',
      academy: 'Technical Education and Skills Development Authority',
      date: '2024',
      hours: '320 Hours',
      credential: '/certificates/tesda-computer-system-servicing-nc2.pdf',
      description: 'National Certification for Computer System Servicing covering computer hardware troubleshooting, software installation, and system maintenance.',
      skillsLearned: 'Computer Hardware, System Troubleshooting, Software Installation, Hardware Maintenance',
      featured: true
    },
    {
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      provider: 'IT3R1 | Elective 2',
      academy: 'University of Science and Technology of Southern Philippines',
      instructor: 'Dr. John Benedict Bernardo',
      date: 'Jun 01, 2025',
      hours: '70 Hours',
      credential: '/certificates/_certificate_rodillon-javy-32181-gmail-com_b299fdfc-db46-4f4a-bf88-f4835c07935c.pdf',
      description: 'The third in a three-course series to build your networking skills and get ready for CCNA certification and associate-level jobs.',
      skillsLearned: 'CCNA: Enterprise Networking, Security, and Automation',
      featured: true
    },
    {
      title: 'Responsive Web Design',
      provider: 'freeCodeCamp',
      date: '2023',
      credential: 'https://freecodecamp.org/certification'
    },
    {
      title: 'JavaScript Algorithms',
      provider: 'freeCodeCamp',
      date: '2023',
      credential: 'https://freecodecamp.org/certification'
    },
    {
      title: 'Web Development',
      provider: 'Coursera',
      date: '2023',
      credential: 'https://coursera.org/certificate'
    },
    {
      title: 'WordPress Development',
      provider: 'Udemy',
      date: '2023',
      credential: 'https://udemy.com/certificate'
    }
  ];

  const getSkillIcon = (skillName) => {
    const icons = {
      'HTML5': '🌐',
      'CSS3': '🎨',
      'JavaScript': '⚡',
      'React': '⚛️',
      'WordPress': '📝',
      'Git & GitHub': '📁',
      'VS Code': '💻',
      'Figma': '🎯',
      'Node.js': '🚀',
      'MongoDB': '🍃',
      'TypeScript': '📘',
      'Next.js': '▲',
      'PHP': '🐘',
      'MySQL': '🗄️'
    };
    return icons[skillName] || '🔧';
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-intro">
          <p>
            My technical skills span across frontend development, design, and various tools. 
            I'm constantly learning and improving my abilities to stay current with industry trends.
          </p>
        </div>

        <div className="skills-content">
          {/* Category Navigation */}
          <div className="category-nav">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-title">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="skill-card card">
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-emoji">{getSkillIcon(skill.name)}</span>
                    <div>
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-experience">{skill.experience}</span>
                    </div>
                  </div>
                  <div className="skill-level-text">{skill.level}%</div>
                </div>
                
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications-section">
          <h3 className="certifications-title">
            <Star size={20} />
            Certifications & Achievements
          </h3>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className={`certification-card card ${cert.featured ? 'featured' : ''}`}>
                <div className="cert-icon">
                  <Star size={20} />
                </div>
                <h4>{cert.title}</h4>
                <p className="cert-provider">{cert.provider}</p>
                {cert.academy && (
                  <p className="cert-academy">Academy: {cert.academy}</p>
                )}
                {cert.instructor && (
                  <p className="cert-instructor">Instructor: {cert.instructor}</p>
                )}
                <p className="cert-date">Issued Date: {cert.date}</p>
                {cert.hours && (
                  <p className="cert-hours">Total Hours: {cert.hours}</p>
                )}
                
                {/* See More Button */}
                {(cert.description || cert.skillsLearned) && (
                  <button 
                    className="see-more-btn"
                    onClick={() => toggleCertDetails(index)}
                  >
                    {expandedCerts[index] ? 'See Less' : 'See More'} 
                    <span className={`arrow ${expandedCerts[index] ? 'up' : 'down'}`}>▼</span>
                  </button>
                )}

                {/* Expandable Content */}
                {expandedCerts[index] && (
                  <div className="cert-expanded-content">
                    {cert.description && (
                      <p className="cert-description">{cert.description}</p>
                    )}
                    {cert.skillsLearned && (
                      <div className="cert-skills">
                        <strong>Skills You Learn:</strong>
                        <p>{cert.skillsLearned}</p>
                      </div>
                    )}
                  </div>
                )}

                <a 
                  href={cert.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Credential →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-content">
            <div className="summary-text">
              <h3>Ready to Tackle New Challenges</h3>
              <p>
                With a strong foundation in web development fundamentals and a passion for learning, 
                I'm equipped to handle diverse projects and eager to expand my skill set. My goal is 
                to become a full-stack developer while maintaining expertise in frontend technologies.
              </p>
            </div>
            <div className="summary-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
