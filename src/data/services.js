// Services data for the portfolio
export const servicesData = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom websites built with modern technologies, fully responsive and optimized for performance.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Modern UI/UX'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    pricing: {
      basic: { price: 500, currency: 'USD', features: ['5 Pages', 'Responsive Design', 'Basic SEO'] },
      standard: { price: 1000, currency: 'USD', features: ['10 Pages', 'CMS Integration', 'Contact Forms', 'Analytics'] },
      premium: { price: 2000, currency: 'USD', features: ['Unlimited Pages', 'E-commerce', 'Custom Features', 'Maintenance'] }
    },
    icon: 'code'
  },
  {
    id: 2,
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins tailored to your business needs.',
    features: [
      'Custom Theme Development',
      'Plugin Development',
      'Site Migration',
      'Performance Optimization',
      'Security Hardening'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    pricing: {
      basic: { price: 300, currency: 'USD', features: ['Theme Customization', 'Basic Setup'] },
      standard: { price: 800, currency: 'USD', features: ['Custom Theme', 'Plugin Integration'] },
      premium: { price: 1500, currency: 'USD', features: ['Full Custom Development', 'Advanced Features'] }
    },
    icon: 'wordpress'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and drive conversions.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Usability Testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    pricing: {
      basic: { price: 200, currency: 'USD', features: ['Basic Wireframes', 'Style Guide'] },
      standard: { price: 500, currency: 'USD', features: ['Complete Design System', 'Prototypes'] },
      premium: { price: 1000, currency: 'USD', features: ['Full UX Research', 'Interactive Prototypes'] }
    },
    icon: 'palette'
  },
  {
    id: 4,
    title: 'IT Support & Technical Services',
    description: 'Remote IT support and technical assistance for individuals and small businesses.',
    features: [
      'Remote Computer Troubleshooting',
      'System Configuration & Setup',
      'Software Installation & Updates',
      'Network Configuration',
      'Data Backup & Recovery',
      'Hardware Diagnostics',
      'Technical Consultation'
    ],
    technologies: ['Windows', 'Remote Desktop', 'Network Tools', 'System Diagnostics'],
    pricing: {
      basic: { price: 25, currency: 'USD', features: ['1 Hour Remote Support', 'Basic Troubleshooting'] },
      standard: { price: 40, currency: 'USD', features: ['2 Hours Support', 'System Optimization', 'Software Setup'] },
      premium: { price: 75, currency: 'USD', features: ['Monthly Support Package', 'Priority Response', 'Preventive Maintenance'] }
    },
    icon: 'headset',
    remote: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    company: 'Local Bakery',
    content: 'Javy created a beautiful website for my bakery. The design is clean, mobile-friendly, and has helped increase my online orders significantly.',
    rating: 5,
    image: '/images/testimonials/sarah.jpg'
  },
  {
    id: 2,
    name: 'Mark Rodriguez',
    role: 'Marketing Manager',
    company: 'Tech Startup',
    content: 'Professional work and great communication throughout the project. Delivered exactly what we needed on time and within budget.',
    rating: 5,
    image: '/images/testimonials/mark.jpg'
  }
];
