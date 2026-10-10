import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Sparkles, Download, FileText } from 'lucide-react';
import { Github, Linkedin, Mail } from './Icons';
import { useTypewriter } from '../hooks/useIntersectionObserver';
import portfolioData from '../data/portfolio.json';

const roles = [
  'AI/ML Engineer',
  'Generative AI Enthusiast',
  'Python Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { displayText } = useTypewriter(roles[roleIndex], 65, 300);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = portfolioData.resume;
    link.download = 'Devarakonda_Vignesh_Varsha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Highlight "Vignesh Varsha" in the name
  const nameParts = portfolioData.name.split(' ');
  const firstName = nameParts.slice(0, -2).join(' ');
  const highlightedName = nameParts.slice(-2).join(' '); // "Vignesh Varsha"

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="hero-bg"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            opacity: 0.08,
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'var(--accent-secondary)',
            opacity: 0.06,
            filter: 'blur(80px)',
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'var(--accent-primary)',
            opacity: 0.03,
            filter: 'blur(120px)',
          }}
        />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                color: 'white',
                border: 'none',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {portfolioData.title.split('|')[0].trim()}
            </motion.span>

            <h1
              id="hero-title"
              style={{
                marginTop: '24px',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {firstName ? <span>{firstName} </span> : null}
              <motion.span
                style={{
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                }}
              >
                {highlightedName}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    right: '0',
                    height: '4px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '2px',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                  animate={{ transform: ['scaleX(0)', 'scaleX(1)'] }}
                  transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                />
              </motion.span>
            </h1>

            <motion.p
              style={{
                marginTop: '24px',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '500px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {portfolioData.summary}
            </motion.p>

            <motion.div
              style={{
                marginTop: '16px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>I am a </span>
              <motion.span
                key={roleIndex}
                style={{
                  fontWeight: 700,
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {displayText}
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                style={{ color: 'var(--text-muted)' }}
              >
                |
              </motion.span>
            </motion.div>

            <motion.div
              style={{
                marginTop: '40px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn btn-primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className="btn btn-secondary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <Download size={20} />
                <FileText size={20} />
                Download Resume
              </motion.button>

              <motion.a
                href={`mailto:${portfolioData.email}`}
                className="btn btn-secondary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              style={{
                marginTop: '48px',
                display: 'flex',
                gap: '24px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={`mailto:${portfolioData.email}`}
                className="social-link"
                aria-label="Email"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            <div
              className="hero-visual"
              style={{
                position: 'relative',
                aspectRatio: '1',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              <motion.div
                className="hero-card"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px',
                  textAlign: 'center',
                }}
                animate={{ rotate: [0, 0.5, -0.5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    padding: '5px',
                    background: 'var(--accent-gradient)',
                    marginBottom: '22px',
                    boxShadow: '0 0 0 8px color-mix(in srgb, var(--accent-primary) 12%, transparent), var(--shadow-lg)',
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img
                    src="/assets/profile-placeholder.svg"
                    alt="Vignesh Varsha profile placeholder"
                    width="140"
                    height="140"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </motion.div>
                <motion.div
                  className="icon-wrapper"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain size={40} style={{ color: 'white' }} />
                </motion.div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  AI/ML Portfolio
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                  AI/ML projects • 90.14% best reported model accuracy
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {['Python', 'Generative AI', 'Computer Vision', 'NLP', 'Privacy'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="badge"
                      style={{
                        background: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-secondary)',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.08 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="floating-card"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 24px',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  minWidth: '200px',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code size={24} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>90.14%</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Model Accuracy</p>
                </div>
              </motion.div>

              <motion.div
                className="floating-card"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 24px',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  minWidth: '200px',
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={24} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>3</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Major Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '0.875rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          style={{
            width: '24px',
            height: '24px',
            border: '2px solid var(--border-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }}
            animate={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

    </section>
  );
}
