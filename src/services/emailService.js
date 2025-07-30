import emailjs from '@emailjs/browser';

// EmailJS configuration - Uses environment variables for security
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_service_id';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_template_id'; 
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Development mode check
const isDevelopment = import.meta.env.DEV;

// Validate configuration
const validateConfig = () => {
  const missing = [];
  if (!SERVICE_ID || SERVICE_ID === 'service_your_service_id') missing.push('SERVICE_ID');
  if (!TEMPLATE_ID || TEMPLATE_ID === 'template_your_template_id') missing.push('TEMPLATE_ID');
  if (!PUBLIC_KEY || PUBLIC_KEY === 'your_public_key') missing.push('PUBLIC_KEY');
  
  if (missing.length > 0) {
    const errorMsg = `Missing EmailJS configuration: ${missing.join(', ')}. Please update your .env file with actual EmailJS credentials.`;
    
    if (isDevelopment) {
      console.warn(`
🔧 EmailJS Configuration Required!

To enable email functionality:
1. Go to https://dashboard.emailjs.com/
2. Create a service and template
3. Update your .env file with:
   - VITE_EMAILJS_SERVICE_ID=your_service_id
   - VITE_EMAILJS_TEMPLATE_ID=your_template_id  
   - VITE_EMAILJS_PUBLIC_KEY=your_public_key

Current values:
- SERVICE_ID: ${SERVICE_ID}
- TEMPLATE_ID: ${TEMPLATE_ID}
- PUBLIC_KEY: ${PUBLIC_KEY}
      `);
    }
    
    throw new Error(errorMsg);
  }
};

// Initialize EmailJS only if config is valid
try {
  validateConfig();
  emailjs.init(PUBLIC_KEY);
  console.log('✅ EmailJS initialized successfully');
} catch (error) {
  console.error('❌ EmailJS initialization failed:', error.message);
  
  if (isDevelopment) {
    console.info(`
📧 Development Mode: Email functionality disabled
   
To enable emails in development:
1. Copy .env.example to .env
2. Add your EmailJS credentials to .env
3. Restart the development server

For production deployment, make sure to set these environment variables:
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY
    `);
  }
}

/**
 * Send contact form email with enhanced error handling
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.subject - Email subject
 * @param {string} formData.message - Email message
 * @param {string} [formData.budget] - Optional budget
 * @param {string} [formData.timeline] - Optional timeline
 * @returns {Promise<Object>} - Result object with success/error info
 */
export const sendContactEmail = async (formData) => {
  try {
    // Validate configuration first
    validateConfig();

    // Validate required form data
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Missing required fields: name, email, and message are required');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Invalid email format');
    }

    // Template parameters - ensure these match your EmailJS template variables exactly
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      to_name: 'Javy Malisud Rodillon',
      to_email: 'rodillon.javy.32181@gmail.com',
      reply_to: formData.email
    };

    console.log('Sending email with params:', {
      serviceId: SERVICE_ID,
      templateId: TEMPLATE_ID,
      templateParams: { ...templateParams, to_email: '[hidden]' } // Hide email in logs
    });

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!',
      response
    };
    
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Enhanced error handling
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.text) {
      // EmailJS specific error
      console.error('EmailJS Error Details:', error.text);
      if (error.text.includes('template')) {
        errorMessage = 'Email template configuration error. Please contact the site administrator.';
      } else if (error.text.includes('service')) {
        errorMessage = 'Email service configuration error. Please contact the site administrator.';
      } else if (error.text.includes('user')) {
        errorMessage = 'Email authentication error. Please contact the site administrator.';
      }
    } else if (error.message) {
      // Custom validation errors
      if (error.message.includes('Missing EmailJS configuration')) {
        if (isDevelopment) {
          errorMessage = 'Email service is not configured for development. Check console for setup instructions.';
        } else {
          errorMessage = 'Email service is not properly configured. Please contact the site administrator.';
        }
      } else if (error.message.includes('Missing required fields')) {
        errorMessage = error.message;
      } else if (error.message.includes('Invalid email format')) {
        errorMessage = 'Please enter a valid email address.';
      }
    }

    return {
      success: false,
      message: errorMessage,
      error: error.message || error.text || 'Unknown error',
      details: {
        name: error.name,
        status: error.status,
        text: error.text,
        isDevelopment: isDevelopment,
        configState: {
          hasServiceId: SERVICE_ID !== 'service_your_service_id',
          hasTemplateId: TEMPLATE_ID !== 'template_your_template_id',
          hasPublicKey: PUBLIC_KEY !== 'your_public_key'
        }
      }
    };
  }
};

/**
 * Send testimonial submission email
 * @param {Object} testimonialData - The testimonial data
 * @param {string} testimonialData.name - Client's name
 * @param {string} testimonialData.email - Client's email
 * @param {string} testimonialData.company - Client's company
 * @param {string} testimonialData.message - Testimonial message
 * @param {number} testimonialData.rating - Rating (1-5)
 * @param {string} testimonialData.service - Service type
 * @returns {Promise} - EmailJS send promise
 */
export const sendTestimonialEmail = async (testimonialData) => {
  try {
    const templateParams = {
      from_name: testimonialData.name,
      from_email: testimonialData.email,
      company: testimonialData.company,
      testimonial_message: testimonialData.message,
      rating: testimonialData.rating,
      service: testimonialData.service,
      to_name: 'Javy Malisud Rodillon',
      to_email: 'rodillon.javy.32181@gmail.com',
      subject: `New Testimonial Submission from ${testimonialData.name}`
    };

    const response = await emailjs.send(
      SERVICE_ID,
      'template_testimonial_id', // Replace with your testimonial template ID
      templateParams
    );

    console.log('Testimonial email sent successfully:', response);
    return {
      success: true,
      message: 'Testimonial submitted successfully!'
    };
  } catch (error) {
    console.error('Testimonial email sending failed:', error);
    return {
      success: false,
      message: 'Failed to submit testimonial. Please try again later.',
      error: error.message
    };
  }
};

// Configuration guide for setting up EmailJS
export const emailSetupGuide = {
  steps: [
    '1. Go to https://www.emailjs.com/ and create an account',
    '2. Create a new email service (Gmail, Outlook, etc.)',
    '3. Create email templates for contact form and testimonials',
    '4. Get your Service ID, Template IDs, and Public Key',
    '5. Replace the placeholder values in this file',
    '6. Test the email functionality'
  ],
  templateVariables: {
    contact: [
      'from_name',
      'from_email', 
      'subject',
      'message',
      'to_name',
      'to_email',
      'reply_to'
    ],
    testimonial: [
      'from_name',
      'from_email',
      'company',
      'testimonial_message',
      'rating',
      'service',
      'to_name',
      'to_email',
      'subject'
    ]
  }
};
