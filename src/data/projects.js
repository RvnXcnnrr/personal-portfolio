// Project data for the portfolio
export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce website built with HTML, CSS, and JavaScript. Features include product catalog, shopping cart, and checkout process.',
    longDescription: 'This project showcases my ability to create a complete e-commerce solution from scratch. It includes dynamic product filtering, cart management, local storage for persistence, and a clean, modern design that works perfectly across all devices.',
    image: '/images/projects/ecommerce-website.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'web',
    liveDemo: 'https://demo-ecommerce.netlify.app',
    sourceCode: 'https://github.com/RvnXcnnrr/ecommerce-site',
    date: '2023-12',
    featured: true,
    highlights: [
      'Responsive design with mobile-first approach',
      'Dynamic product filtering and search',
      'Shopping cart with local storage',
      'Clean, modern UI/UX design'
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
    liveDemo: 'https://javy-portfolio.netlify.app',
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
