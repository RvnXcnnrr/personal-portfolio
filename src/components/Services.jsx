import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Settings, 
  Zap,
  CheckCircle,
  Clock,
  DollarSign,
  MessageCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { useTestimonials } from '../contexts/TestimonialContext';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { getApprovedTestimonials } = useTestimonials();
  
  const services = [
    {
      id: 1,
      icon: <Code size={32} />,
      title: 'Custom Website Development',
      shortDescription: 'Responsive, modern websites built from scratch using HTML, CSS, and JavaScript.',
      fullDescription: 'I create custom websites tailored to your specific needs using modern web technologies. Every website is built with responsive design principles, ensuring it looks and works perfectly on all devices. From simple landing pages to complex business websites, I deliver clean, efficient code that performs well and is easy to maintain.',
      features: [
        'Fully responsive design',
        'Modern HTML5 & CSS3',
        'Interactive JavaScript functionality',
        'Cross-browser compatibility',
        'SEO-friendly structure',
        'Fast loading times'
      ],
      pricing: 'Starting at $500',
      duration: '1-3 weeks',
      category: 'web-development'
    },
    {
      id: 2,
      icon: <Settings size={32} />,
      title: 'WordPress Development',
      shortDescription: 'Custom WordPress themes and plugins, site setup, and optimization.',
      fullDescription: 'Leverage the power of WordPress with custom solutions designed for your business. I develop custom themes from scratch, create functional plugins, and optimize existing WordPress sites for better performance and user experience. Whether you need a blog, business site, or e-commerce store, I can build it on WordPress.',
      features: [
        'Custom theme development',
        'Plugin development & customization',
        'WordPress site setup & configuration',
        'Content migration',
        'Performance optimization',
        'Security implementation'
      ],
      pricing: 'Starting at $800',
      duration: '2-4 weeks',
      category: 'wordpress'
    },
    {
      id: 3,
      icon: <Zap size={32} />,
      title: 'Website Optimization',
      shortDescription: 'Performance optimization, bug fixes, and website maintenance.',
      fullDescription: 'Improve your existing website\'s performance, fix bugs, and ensure everything runs smoothly. I analyze your site for performance bottlenecks, implement optimizations, and provide ongoing maintenance to keep your website fast, secure, and up-to-date.',
      features: [
        'Performance analysis & optimization',
        'Bug identification & fixing',
        'Code refactoring & cleanup',
        'SEO improvements',
        'Security updates',
        'Mobile responsiveness fixes'
      ],
      pricing: 'Starting at $200',
      duration: '3-7 days',
      category: 'optimization'
    },
    {
      id: 4,
      icon: <Smartphone size={32} />,
      title: 'React App Development',
      shortDescription: 'Modern React applications with interactive features and responsive design.',
      fullDescription: 'Build dynamic, interactive web applications using React.js. I create single-page applications (SPAs) that provide smooth user experiences with modern JavaScript frameworks. Perfect for dashboards, web apps, and interactive websites that need dynamic content and real-time updates.',
      features: [
        'React.js development',
        'Component-based architecture',
        'State management',
        'API integration',
        'Responsive design',
        'Modern JavaScript (ES6+)'
      ],
      pricing: 'Starting at $1000',
      duration: '3-6 weeks',
      category: 'react'
    }
  ];
  
  const testimonials = getApprovedTestimonials();

  const workProcess = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We discuss your needs, goals, and project requirements in detail.',
      icon: <MessageCircle size={24} />
    },
    {
      step: 2,
      title: 'Planning',
      description: 'I create a detailed plan, timeline, and design mockups for your approval.',
      icon: <Settings size={24} />
    },
    {
      step: 3,
      title: 'Development',
      description: 'I build your project using best practices and keep you updated on progress.',
      icon: <Code size={24} />
    },
    {
      step: 4,
      title: 'Launch',
      description: 'After testing and your approval, we launch your project and provide support.',
      icon: <CheckCircle size={24} />
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Services I Offer</h2>
        
        <div className="services-intro">
          <p>
            As a freelance web developer, I offer a comprehensive range of services 
            to help bring your digital vision to life. From custom websites to 
            WordPress solutions, I'm here to help your business succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card card ${selectedService === service.id ? 'expanded' : ''}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="service-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p className="service-short-desc">{service.shortDescription}</p>
                </div>
                <div className="service-pricing">
                  <div className="price">{service.pricing}</div>
                  <div className="duration">
                    <Clock size={14} />
                    {service.duration}
                  </div>
                </div>
              </div>

              {selectedService === service.id && (
                <div className="service-details">
                  <div className="service-description">
                    <p>{service.fullDescription}</p>
                  </div>

                  <div className="service-features">
                    <h4>What's included:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <CheckCircle size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-actions">
                    <a href="#contact" className="btn btn-primary">
                      Get Started
                      <ArrowRight size={16} />
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Ask Questions
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Work Process */}
        <div className="work-process">
          <h3 className="process-title">How I Work</h3>
          <div className="process-steps">
            {workProcess.map((step, index) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < workProcess.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">What Clients Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote>"{testimonial.text}"</blockquote>
                <div className="testimonial-author">
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                  <div className="service-tag">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>
              Let's discuss your needs and see how I can help bring your ideas to life. 
              I offer free consultations to understand your project requirements.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Free Initial Consultation</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Competitive Pricing</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>Quality Guarantee</span>
              </div>
            </div>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-primary">
                <MessageCircle size={16} />
                Get Free Quote
              </a>
              <a href="#projects" className="btn btn-outline">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
