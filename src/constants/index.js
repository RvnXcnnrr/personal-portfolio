// Navigation constants
export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' }
];

// Theme constants
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Animation constants
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  LAPTOP: '1024px',
  DESKTOP: '1200px'
};

// EmailJS configuration (move sensitive data to .env)
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
};

// Currency configuration
export const CURRENCY_CONFIG = {
  DEFAULT_CURRENCY: 'USD',
  SUPPORTED_CURRENCIES: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'PHP'],
  EXCHANGE_RATE_API: 'https://api.exchangerate-api.com/v4/latest/'
};

// Project categories
export const PROJECT_CATEGORIES = {
  ALL: 'all',
  WEB: 'web',
  MOBILE: 'mobile',
  WORDPRESS: 'wordpress'
};

// Skill levels
export const SKILL_LEVELS = {
  BEGINNER: { min: 0, max: 30, label: 'Beginner' },
  INTERMEDIATE: { min: 31, max: 70, label: 'Intermediate' },
  ADVANCED: { min: 71, max: 100, label: 'Advanced' }
};
