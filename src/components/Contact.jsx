import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Globe
} from 'lucide-react';
import { sendContactEmail } from '../services/emailService';
import { useTestimonials } from '../contexts/TestimonialContext';
import './Contact.css';

const Contact = () => {
  const { addTestimonial } = useTestimonials();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    rating: 5,
    service: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTestimonialChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');
    setErrorMessage('');

    try {
      // Client-side validation
      const requiredFields = ['name', 'email', 'subject', 'message'];
      const missingFields = requiredFields.filter(field => !formData[field]?.trim());
      
      if (missingFields.length > 0) {
        throw new Error(`Please fill in required fields: ${missingFields.join(', ')}`);
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      console.log('Submitting contact form...', { 
        name: formData.name, 
        email: formData.email, 
        hasSubject: !!formData.subject,
        messageLength: formData.message?.length 
      });

      // Send email using EmailJS
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setFormStatus('success');
        console.log('Contact form submitted successfully');
        
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          budget: '',
          timeline: ''
        });
      } else {
        console.error('Contact form submission failed:', result);
        setFormStatus('error');
        setErrorMessage(result.message || 'Failed to send email. Please try again later.');
        
        // Show specific error message if available
        if (result.error) {
          console.error('Error details:', result.error);
        }
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again later.');
      
      // Log additional error details for debugging
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        formData: { 
          ...formData, 
          email: formData.email ? '[email provided]' : '[no email]' 
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate testimonial data
      if (!testimonialData.name || !testimonialData.email || !testimonialData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Add testimonial to context (pending approval)
      await addTestimonial({
        ...testimonialData,
        timestamp: new Date().toISOString(),
        status: 'pending'
      });

      setFormStatus('testimonial-success');
      setTestimonialData({
        name: '',
        email: '',
        company: '',
        message: '',
        rating: 5,
        service: ''
      });
      setShowTestimonialForm(false);
    } catch (error) {
      console.error('Testimonial submission error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'rodillon.javy.32181@gmail.com',
      link: 'mailto:rodillon.javy.32181@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Available Mon-Fri, 9AM-6PM'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Remote Worldwide',
      link: null,
      description: 'Open to remote work'
    },
    {
      icon: <Clock size={20} />,
      label: 'Response Time',
      value: 'Within 24 hours',
      link: null,
      description: 'Usually respond faster'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/RvnXcnnrr',
      username: '@RvnXcnnrr'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      username: 'Javy Malisud Rodillon'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      url: 'mailto:rodillon.javy.32181@gmail.com',
      username: 'rodillon.javy.32181@gmail.com'
    },
    {
      icon: <Globe size={24} />,
      label: 'Website',
      url: '#',
      username: 'portfolio.dev'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. Simple websites take 1-2 weeks, while custom web applications can take 4-8 weeks. I always provide detailed timelines during our initial consultation.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'I typically work with a 50% upfront payment and 50% upon completion. For larger projects, we can arrange milestone-based payments to ensure comfort for both parties.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! I offer ongoing maintenance and support packages. This includes updates, bug fixes, and minor modifications to keep your website running smoothly.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! I enjoy collaborating with designers, marketers, and other developers. I\'m comfortable working with version control systems and project management tools.'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            Ready to bring your project to life? I'd love to hear about your ideas 
            and discuss how we can work together. Let's create something amazing!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-plus">$5,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-months">1-2 months</option>
                    <option value="3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's your project about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="form-message success">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully. I'll get back to you soon!</span>
                </div>
              )}

              {formStatus === 'testimonial-success' && (
                <div className="form-message success">
                  <CheckCircle size={20} />
                  <span>Thank you for your testimonial! It will be reviewed and added to the website soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-message error">
                  <AlertCircle size={20} />
                  <span>{errorMessage || 'Sorry, there was an error. Please try again or email me directly at rodillon.javy.32181@gmail.com'}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-details">
              <h3>Contact Information</h3>
              <div className="contact-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-text">
                      <strong>{info.label}</strong>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                      <small>{info.description}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-section">
              <h4>Let's Connect</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card card"
                  >
                    <div className="social-icon">
                      {social.icon}
                    </div>
                    <div className="social-info">
                      <strong>{social.label}</strong>
                      <span>{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card card">
              <h4>
                <MessageCircle size={20} />
                Current Availability
              </h4>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
              <p>
                I'm currently accepting new projects starting in August 2025. 
                Let's discuss your timeline and requirements!
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section">
          <div className="testimonial-header">
            <h3>Leave a Testimonial</h3>
            <p>Worked with me before? I'd love to hear about your experience!</p>
            {!showTestimonialForm && (
              <button 
                className="btn btn-secondary"
                onClick={() => setShowTestimonialForm(true)}
              >
                <MessageCircle size={20} />
                Share Your Experience
              </button>
            )}
          </div>

          {showTestimonialForm && (
            <form className="testimonial-form card" onSubmit={handleTestimonialSubmit}>
              <div className="form-header">
                <h4>Share Your Testimonial</h4>
                <button 
                  type="button" 
                  className="close-btn"
                  onClick={() => setShowTestimonialForm(false)}
                >
                  ×
                </button>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="testimonial-name">Your Name *</label>
                  <input
                    type="text"
                    id="testimonial-name"
                    name="name"
                    value={testimonialData.name}
                    onChange={handleTestimonialChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="testimonial-email">Email *</label>
                  <input
                    type="email"
                    id="testimonial-email"
                    name="email"
                    value={testimonialData.email}
                    onChange={handleTestimonialChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="testimonial-company">Company/Organization</label>
                  <input
                    type="text"
                    id="testimonial-company"
                    name="company"
                    value={testimonialData.company}
                    onChange={handleTestimonialChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="testimonial-service">Service You Used</label>
                  <select
                    id="testimonial-service"
                    name="service"
                    value={testimonialData.service}
                    onChange={handleTestimonialChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Custom Website Development">Custom Website Development</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="Website Optimization">Website Optimization</option>
                    <option value="React App Development">React App Development</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="testimonial-rating">Rating</label>
                  <select
                    id="testimonial-rating"
                    name="rating"
                    value={testimonialData.rating}
                    onChange={handleTestimonialChange}
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="testimonial-message">Your Testimonial *</label>
                  <textarea
                    id="testimonial-message"
                    name="message"
                    value={testimonialData.message}
                    onChange={handleTestimonialChange}
                    rows="4"
                    placeholder="Tell others about your experience working with me..."
                    required
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
              </button>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item card">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
