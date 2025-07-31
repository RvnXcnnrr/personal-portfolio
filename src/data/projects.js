// Project data for the portfolio
export const projectsData = [
  {
    id: 1,
    title: 'Product Sales and Inventory Management System',
    description: 'A comprehensive sales and inventory management system built with HTML, CSS, and JavaScript using local database storage. Features include product management, sales tracking, and inventory monitoring.',
    longDescription: 'This project demonstrates my ability to create a complete business management solution for local operations. It includes product catalog management, sales transaction processing, inventory level monitoring, and reporting features - all powered by local database storage for offline functionality.',
    image: '/images/projects/ecommerce-website.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'IndexedDB'],
    category: 'web',
    liveDemo: 'https://demo-ecommerce.netlify.app',
    sourceCode: 'https://github.com/RvnXcnnrr/ecommerce-site',
    date: '2023-12',
    featured: true,
    highlights: [
      'Product catalog management with CRUD operations',
      'Sales transaction tracking and history',
      'Real-time inventory level monitoring',
      'Local database storage for offline functionality',
      'Responsive design for desktop and mobile use'
    ]
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React.js and modern CSS. Features dark/light mode toggle and smooth animations.',
    longDescription: 'This very website you\'re viewing! Built with React 18, featuring component-based architecture, context API for state management, and modern development practices. Includes theme switching, responsive design, and performance optimizations.',
    image: '/images/projects/portfolio-website.jpg',
    technologies: ['React', 'JavaScript', 'CSS3', 'Vite'],
    category: 'web',
    liveDemo: 'https://rodillondev.netlify.app/',
    sourceCode: 'https://github.com/RvnXcnnrr/personal-portfolio',
    date: '2024-01',
    featured: true,
    highlights: [
      'React 18 with hooks and context API',
      'Dark/Light mode toggle',
      'Smooth scrolling navigation',
      'Component-based architecture'
    ]
  },
  {
    id: 3,
    title: 'WordPress Business Site',
    description: 'A professional business website built with WordPress, featuring custom themes and responsive design.',
    longDescription: 'Custom WordPress development project for a local business. Includes custom post types, advanced custom fields, and a fully responsive design. Features include contact forms, service showcase, and blog functionality.',
    image: '/images/projects/wordpress-site.jpg',
    technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript'],
    category: 'web',
    liveDemo: 'https://demo-business.com',
    sourceCode: 'Private Repository',
    date: '2023-10',
    featured: false,
    highlights: [
      'Custom WordPress theme development',
      'Advanced Custom Fields integration',
      'SEO optimized structure',
      'Admin dashboard customization'
    ]
  }
];

export const projectCategories = [
  { value: 'all', label: 'All Projects', count: projectsData.length },
  { value: 'web', label: 'Web Development', count: projectsData.filter(p => p.category === 'web').length },
  { value: 'mobile', label: 'Mobile Apps', count: projectsData.filter(p => p.category === 'mobile').length },
  { value: 'wordpress', label: 'WordPress', count: projectsData.filter(p => p.category === 'wordpress').length }
];
