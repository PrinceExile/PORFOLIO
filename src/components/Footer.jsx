import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Github, Linkedin, Mail, Heart } from './Icons';
import portfolioData from '../data/portfolio.json';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        padding: '48px 0',
        background: 'var(--bg-tertiary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              whileHover={{ scale: 1.05 }}
            >
              VV
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}
          >
            Built with passion for AI/ML engineering. Crafting intelligent systems that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '16px' }}
          >
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-link"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email"
              className="footer-social-link"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 16px', fontSize: '0.875rem', color: 'var(--text-muted)' }}
          >
            <span>&copy; {currentYear} {portfolioData.name}. All rights reserved.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Heart size={14} style={{ color: 'var(--accent-primary)' }} />
              Made with React + Vite
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Brain size={14} style={{ color: 'var(--accent-secondary)' }} />
              Powered by AI/ML
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}