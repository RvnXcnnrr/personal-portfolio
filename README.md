# 🚀 Javy Malisud Rodillon - Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://personal-portfolio-rvnxcnnrr.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/RvnXcnnrr/personal-portfolio)
[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A modern, responsive personal portfolio website built with React.js for a BSIT (Bachelor of Science in Information Technology) student. This portfolio showcases skills, projects, services, and provides a professional online presence.

![Portfolio Preview](https://via.placeholder.com/800x400/4f46e5/ffffff?text=Portfolio+Website)

## 👨‍💻 About

**Javy Malisud Rodillon**  
- **Age**: 24 years old  
- **Birthday**: May 12, 2001  
- **Email**: rodillon.javy.32181@gmail.com  
- **GitHub**: [@RvnXcnnrr](https://github.com/RvnXcnnrr)
- **Education**: BSIT Student (Expected 2025)  
- **Specialization**: Web Development, WordPress, React.js Rodillon - Personal Portfolio

A modern, responsive personal portfolio website built with React.js for a BSIT (Bachelor of Science in Information Technology) student. This portfolio showcases skills, projects, services, and provides a professional online presence.

![Portfolio Preview](https://via.placeholder.com/800x400/4f46e5/ffffff?text=Portfolio+Website)

## �‍💻 About

**Javy Malisud Rodillon**  
- **Age**: 24 years old  
- **Birthday**: May 12, 2001  
- **Email**: rodillon.javy.32181@gmail.com  
- **Education**: BSIT Student (Expected 2025)  
- **Specialization**: Web Development, WordPress, React.js

## �🚀 Features

- **Modern React Development**: Built with React 18 and Vite for fast development and optimized builds
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes with persistence
- **Smooth Animations**: Engaging animations and transitions throughout
- **Interactive Components**: Dynamic skill bars, project filtering, and interactive elements
- **Contact Form**: Working contact form with validation
- **SEO Optimized**: Clean structure and semantic HTML
- **Performance Optimized**: Fast loading times and optimized assets

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated text and call-to-action
2. **About Me**: Personal bio highlighting education and passion for development
3. **Skills**: Technical skills showcase with proficiency levels and categories
4. **Projects**: Portfolio projects with filtering and live demo links
5. **Services**: Freelance services offered with pricing information
6. **Contact**: Contact form and social media links
7. **Footer**: Additional links and back-to-top functionality

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Custom Properties
- **Icons**: React Icons, Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Deployment**: Vercel

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment on Vercel

This project is configured for easy deployment on Vercel:

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to the main branch will trigger a new deployment
   - Pull requests will get preview deployments

### Method 2: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Environment Variables

If you add environment variables in the future, add them in:
- **Local**: `.env.local` file
- **Vercel**: Project Settings → Environment Variables

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.jsx   # Navigation bar with theme toggle
│   ├── Hero.jsx         # Hero section with profile photo
│   ├── About.jsx        # About section with personal info
│   ├── Skills.jsx       # Skills showcase
│   ├── Projects.jsx     # Projects portfolio
│   ├── Services.jsx     # Services offered
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer component
├── contexts/            # React contexts
│   └── ThemeContext.jsx # Theme management
├── styles/              # CSS files
│   ├── global.css       # Global styles and variables
│   └── [component].css  # Component-specific styles
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Base styles
```

## 🎨 Customization

### Colors and Themes

Edit the CSS custom properties in `src/styles/global.css`:

## 🚀 Deployment

This portfolio is ready for deployment on multiple platforms:

### Vercel (Recommended)
1. Fork this repository
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import your forked repository
4. Add environment variables (if using EmailJS)
5. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Environment Variables for Production
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

### Color Scheme
Modify the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  /* Add your custom colors */
}
```

### Content Updates

1. **Personal Information**: Update content in each component file
2. **Projects**: Modify the projects array in `Projects.jsx`
3. **Skills**: Update skills data in `Skills.jsx`
4. **Services**: Customize services in `Services.jsx`
5. **Profile Photo**: Replace `/public/profile-photo.jpg` with your photo

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `App.jsx`

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🌟 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: Responsive images with proper sizing
- **CSS Custom Properties**: Efficient theming system
- **Minimal Dependencies**: Lightweight bundle size

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Javy Malisud Rodillon**
- **Email**: rodillon.javy.32181@gmail.com
- **GitHub**: [@RvnXcnnrr](https://github.com/RvnXcnnrr)
- **Portfolio**: [Live Demo](https://personal-portfolio-rvnxcnnrr.vercel.app)

---

⭐ If you found this helpful, please give this repository a star!

<!-- Deployment: Latest update -->
- **GitHub**: [RvnXcnnrr](https://github.com/RvnXcnnrr)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Vite for the fast build tool
- React Icons for the beautiful icon library
- All the open-source contributors who made this possible

---

**Live Demo**: [Coming Soon - Deploy to see your live portfolio!]

**Note**: This portfolio is designed for a BSIT student actively seeking opportunities. The project is optimized for deployment on Vercel with automatic builds and deployments from GitHub.
#   D e p l o y m e n t   t r i g g e r 
 
 