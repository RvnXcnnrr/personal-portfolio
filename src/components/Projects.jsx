import React, { useState } from 'react';
import { 
  ExternalLink,
  Github, 
  Eye, 
  Code, 
  Calendar,
  Tag,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce website built with HTML, CSS, and JavaScript. Features include product catalog, shopping cart, and checkout process.',
      longDescription: 'This project showcases my ability to create a complete e-commerce solution from scratch. It includes dynamic product filtering, cart management, local storage for persistence, and a clean, modern design that works perfectly across all devices.',
      image: '/images/projects/ecommerce-website.jpg', // Add your project screenshot here
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'web',
      liveDemo: 'https://demo-ecommerce.netlify.app',
      sourceCode: 'https://github.com/RvnXcnnrr/ecommerce-site',
      date: '2023-12',
      featured: true,
      status: 'completed'
    },
    {
      id: 2,
      title: 'WordPress Business Site',
      description: 'Custom WordPress theme for a local business with custom post types, contact forms, and SEO optimization.',
      longDescription: 'Developed a custom WordPress theme tailored for a local restaurant business. Includes custom post types for menu items, events, and testimonials. Features responsive design, contact forms, Google Maps integration, and comprehensive SEO optimization.',
      image: '/images/projects/wordpress-business.jpg', // Add your project screenshot here
      technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript'],
      category: 'wordpress',
      liveDemo: 'https://businesssite-demo.com',
      sourceCode: 'https://github.com/RvnXcnnrr/wp-business-theme',
      date: '2023-11',
      featured: true,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Task Manager App',
      description: 'A React-based task management application with drag-and-drop functionality and local storage.',
      longDescription: 'Built with React and modern JavaScript, this task manager features drag-and-drop functionality, category organization, priority levels, and deadline tracking. Data persists using local storage, and the interface is fully responsive.',
      image: '/images/projects/task-manager.jpg', // Add your project screenshot here
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      category: 'react',
      liveDemo: 'https://taskmanager-react.netlify.app',
      sourceCode: 'https://github.com/RvnXcnnrr/react-task-manager',
      date: '2023-10',
      featured: false,
      status: 'completed'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my skills and projects with dark/light theme toggle.',
      longDescription: 'This very portfolio you\'re viewing! Built with React and modern CSS, featuring smooth animations, responsive design, dark/light theme toggle, and optimized performance. Demonstrates my frontend development skills and attention to detail.',
      image: '/images/projects/portfolio-website.jpg', // Add your project screenshot here
      technologies: ['React', 'CSS3', 'JavaScript', 'Vite'],
      category: 'react',
      liveDemo: '#',
      sourceCode: 'https://github.com/javyrodillon/portfolio',
      date: '2023-12',
      featured: true,
      status: 'completed'
    },
    {
      id: 5,
      title: 'Restaurant Landing Page',
      description: 'Modern landing page for a restaurant with animations, menu showcase, and reservation system.',
      longDescription: 'A visually stunning landing page for a fine dining restaurant. Features smooth scroll animations, interactive menu showcase, image gallery, customer testimonials, and an integrated reservation system. Fully responsive and optimized for performance.',
      image: '/images/projects/restaurant-landing.jpg', // Add your project screenshot here
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
      category: 'web',
      liveDemo: 'https://restaurant-landing.netlify.app',
      sourceCode: 'https://github.com/RvnXcnnrr/restaurant-landing',
      date: '2023-09',
      featured: false,
      status: 'completed'
    },
    {
      id: 6,
      title: 'Blog CMS (In Progress)',
      description: 'Full-stack blog management system built with React and Node.js (currently in development).',
      longDescription: 'A comprehensive blog content management system featuring user authentication, rich text editor, image uploads, comment system, and admin dashboard. This project demonstrates my growing full-stack development skills.',
      image: '/images/projects/blog-cms.jpg', // Add your project screenshot here
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      liveDemo: null,
      sourceCode: 'https://github.com/RvnXcnnrr/blog-cms',
      date: '2024-01',
      featured: false,
      status: 'in-progress'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { key: 'react', label: 'React Apps', count: projects.filter(p => p.category === 'react').length },
    { key: 'wordpress', label: 'WordPress', count: projects.filter(p => p.category === 'wordpress').length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  const getTechColor = (tech) => {
    const colors = {
      'HTML5': '#e34f26',
      'CSS3': '#1572b6',
      'JavaScript': '#f7df1e',
      'React': '#61dafb',
      'WordPress': '#21759b',
      'PHP': '#777bb4',
      'Node.js': '#339933',
      'MongoDB': '#47a248',
      'Bootstrap': '#7952b3',
      'Vite': '#646cff'
    };
    return colors[tech] || '#6b7280';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-intro">
          <p>
            Here's a showcase of my recent work, ranging from responsive websites to 
            WordPress themes and React applications. Each project represents my growth 
            as a developer and my commitment to quality code.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-section">
          <h3 className="featured-title">
            <Eye size={20} />
            Highlighted Work
          </h3>
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="featured-project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      <a 
                        href={project.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                  <div className="project-status">
                    <span className={`status-badge ${project.status}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <div className="project-date">
                      <Calendar size={14} />
                      {new Date(project.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                  </div>
                  
                  <p className="project-description">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="tech-tag"
                        style={{ borderColor: getTechColor(tech) }}
                      >
                        <Tag size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="all-projects-section">
          <div className="section-header">
            <h3>All Projects</h3>
            <div className="filter-controls">
              <Filter size={16} />
              <div className="filter-tabs">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-tab ${filter === category.key ? 'active' : ''}`}
                    onClick={() => setFilter(category.key)}
                  >
                    {category.label}
                    <span className="count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-thumbnail">
                  <img src={project.image} alt={project.title} />
                  <div className="thumbnail-overlay">
                    <div className="quick-actions">
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="quick-action"
                          title="View Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      <a 
                        href={project.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quick-action"
                        title="View Source Code"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <div className="project-meta">
                    <h4>{project.title}</h4>
                    <span className={`status-indicator ${project.status}`}></span>
                  </div>
                  
                  <p>{project.description}</p>
                  
                  <div className="project-footer">
                    <div className="tech-stack">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="mini-tech-tag"
                          style={{ backgroundColor: getTechColor(tech) + '20', color: getTechColor(tech) }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="project-links">
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <div className="cta-content">
            <Code size={32} />
            <h3>Want to see more?</h3>
            <p>
              Check out my GitHub profile for additional projects, contributions, 
              and code snippets. I'm always working on something new!
            </p>
            <a 
              href="https://github.com/RvnXcnnrr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={16} />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
