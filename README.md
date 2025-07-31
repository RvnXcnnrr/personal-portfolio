# 🚀 Javy Malisud Rodillon - Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://personal-portfolio-rvnxcnnrr.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge)](https://github.com/RvnXcnnrr/personal-portfolio)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A modern, responsive personal portfolio website built with React.js showcasing web development skills, projects, and services.

## 🎯 About

**Javy Malisud Rodillon** - Web Developer & BSIT Student

- 🎓 **Education**: Bachelor of Science in Information Technology (Expected 2025)
- 🌍 **Location**: Available for Remote Work
- 💻 **Specialization**: Web Development, React.js, WordPress
- 📧 **Email**: rodillon.javy.32181@gmail.com
- 🔗 **GitHub**: [@RvnXcnnrr](https://github.com/RvnXcnnrr)

## ✨ Features

- 🚀 **Modern React 19** with Hooks and Context API
- 📱 **Fully Responsive** design for all devices
- 🌙 **Dark/Light Mode** with theme persistence
- 🎨 **Modern UI/UX** with smooth animations
- 📧 **Contact Form** with EmailJS integration
- 💱 **Multi-Currency** pricing support
- ⚡ **Fast Performance** with Vite build tool
- 🔍 **SEO Optimized** structure

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable layout components
│   │   ├── Navigation/
│   │   └── Footer/
│   ├── sections/        # Page sections
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Services/
│   │   └── Contact/
│   └── ui/              # UI components
│       ├── Price/
│       └── CurrencyIndicator/
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── services/            # API and external services
├── utils/               # Utility functions
├── data/                # Static data and content
├── constants/           # App constants
└── styles/              # Global styles
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with modern features
- **Vite** - Build tool and dev server

### Libraries & Tools
- **Lucide React** - Icon library
- **EmailJS** - Email service integration
- **ESLint** - Code linting
- **Git** - Version control

### Deployment
- **Vercel** - Main deployment platform
- **Netlify** - Alternative deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RvnXcnnrr/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your EmailJS credentials in the `.env` file.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://emailjs.com)
2. Set up a service and template
3. Add your credentials to `.env`:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Customization

### Adding Projects
Edit `src/data/projects.js` to add your projects:

```javascript
{
  id: 4,
  title: 'Your Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  category: 'web',
  liveDemo: 'https://demo-url.com',
  sourceCode: 'https://github.com/username/repo'
}
```

### Updating Skills
Modify `src/data/skills.js` to reflect your skills:

```javascript
{
  name: 'Your Skill',
  level: 85,
  category: 'Frontend',
  description: 'Skill description'
}
```

### Changing Services
Update `src/data/services.js` for your service offerings.

## 📱 Responsive Design

The portfolio is optimized for:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📦 **Bundle Size**: Optimized with Vite
- 🔄 **Loading**: Lazy loading implemented

## 🌐 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (90+)
- ✅ Safari (14+)
- ✅ Edge (90+)

## 📝 Documentation

Additional documentation can be found in the `/docs` folder:
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [EmailJS Setup](./docs/EMAIL_SETUP.md)

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: rodillon.javy.32181@gmail.com
- **GitHub**: [@RvnXcnnrr](https://github.com/RvnXcnnrr)
- **Portfolio**: [Live Demo](https://personal-portfolio-rvnxcnnrr.vercel.app)

---

⭐ If you found this helpful, please give this repository a star!

**Built with ❤️ by Javy Malisud Rodillon**
