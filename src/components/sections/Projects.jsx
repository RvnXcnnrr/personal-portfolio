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
import { projectsData, projectCategories } from '../../data/projects';
import { PROJECT_CATEGORIES } from '../../constants';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState(PROJECT_CATEGORIES.ALL);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = projectsData;

  const filteredProjects = filter === PROJECT_CATEGORIES.ALL 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  // Use imported categories or create dynamic ones
  const categories = projectCategories;

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
                    key={category.value}
                    className={`filter-tab ${filter === category.value ? 'active' : ''}`}
                    onClick={() => setFilter(category.value)}
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
