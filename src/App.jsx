import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />

          <main id="main" style={{ flex: 1 }}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;