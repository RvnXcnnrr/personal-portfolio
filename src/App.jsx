import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { TestimonialProvider } from './contexts/TestimonialContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <TestimonialProvider>
        <div className="App">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </TestimonialProvider>
    </ThemeProvider>
  );
}

export default App;
