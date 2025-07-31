import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { TestimonialProvider } from './contexts/TestimonialContext';
import { 
  Navigation, 
  Footer, 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Services, 
  Contact 
} from './components';
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
