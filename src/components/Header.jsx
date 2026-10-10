import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Github, Linkedin, Mail } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection, useScrollPosition } from '../hooks/useIntersectionObserver';
import portfolioData from '../data/portfolio.json';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

const socialLinks = [
  { href: portfolioData.github, icon: Github, label: 'GitHub' },
  { href: portfolioData.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${portfolioData.email}`, icon: Mail, label: 'Email' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(sectionIds, scrollY);
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = scrollY > 20;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      
      <header
        className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          background: `color-mix(in srgb, var(--bg-primary) ${scrolled ? '95%' : '100%'}, transparent)`,
          backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
          zIndex: 1000,
          transition: 'all var(--transition-base)',
        }}
        role="banner"
      >
        <nav
          className="nav container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            gap: 24,
          }}
          aria-label="Main navigation"
        >
          <motion.a
            href="#home"
            className="logo"
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            aria-label={`${portfolioData.name} - Home`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            VV
          </motion.a>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ul className="nav-button-list" style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-button${activeSection === link.href.slice(1) ? ' is-active' : ''}`}
                    aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '38px',
                      padding: '7px 12px',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      borderRadius: '999px',
                      border: '1px solid transparent',
                      transition: 'all var(--transition-fast)',
                    }}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                onClick={toggleTheme}
                className="btn btn-icon"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                style={{ color: 'var(--text-secondary)' }}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

            </div>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              padding: 8,
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="nav-mobile"
              style={{
                position: 'absolute',
                top: 'var(--header-height)',
                left: 0,
                right: 0,
                background: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border-color)',
                padding: '24px',
                boxShadow: 'var(--shadow-lg)',
              }}
              initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.2 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="nav-mobile-button"
                      onClick={closeMenu}
                      style={{
                        display: 'block',
                        padding: '16px',
                        fontSize: '1.125rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        borderRadius: 'var(--radius-md)',
                        transition: 'background var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--bg-tertiary)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button
                  onClick={toggleTheme}
                  className="btn btn-secondary"
                  style={{ justifyContent: 'flex-start', gap: 12 }}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>

                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ justifyContent: 'flex-start', gap: 10, flex: 1 }}
                    >
                      <social.icon size={20} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

    </>
  );
}