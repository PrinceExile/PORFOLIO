import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, X, Search } from 'lucide-react';
import { Github } from './Icons';
import portfolioData from '../data/portfolio.json';

const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section"
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="projects-title" className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of my AI/ML and software engineering projects showcasing practical applications of machine learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '40px' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-secondary'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <div style={{ position: 'relative' }}>
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                }}
              />
              <input
                id="project-search"
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  fontSize: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '4px',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-muted)',
                  }}
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            className="grid grid-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="list"
            aria-label="Projects"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="card project-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
                role="listitem"
              >
                <div style={{ position: 'relative', marginBottom: '20px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        transition: 'transform var(--transition-slow)',
                      }}
                    />
                  )}
                  {!project.image && (
                    <div
                      style={{
                        aspectRatio: '16/10',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--accent-gradient)',
                        opacity: 0.15,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <motion.div
                        style={{
                          fontSize: '3rem',
                          fontWeight: 800,
                          background: 'var(--accent-gradient)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          opacity: 0.8,
                        }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  )}
                  {project.featured && (
                    <motion.span
                      className="badge"
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'var(--accent-gradient)',
                        color: 'white',
                        border: 'none',
                        fontWeight: 600,
                        padding: '6px 12px',
                        zIndex: 1,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      Featured
                    </motion.span>
                  )}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 60%, rgba(2,6,23,0.8) 100%)',
                      opacity: 0,
                      transition: 'opacity var(--transition-base)',
                    }}
                  />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '12px' }}>
                    {project.tagline}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.tech.slice(0, 5).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="badge"
                        style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 5 && (
                      <motion.span
                        className="badge"
                        style={{ background: 'var(--accent-primary)', color: 'white', border: 'none' }}
                      >
                        +{project.tech.length - 5} more
                      </motion.span>
                    )}
                  </div>
                </div>

                <div className="project-links" style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', padding: '16px 4px 4px' }}>
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ flex: 1, justifyContent: 'center', gap: '8px' }}
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      style={{ flex: 1, justifyContent: 'center', gap: '8px', color: 'var(--accent-primary)' }}
                      aria-label={`View ${project.name} demo`}
                    >
                      Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {(!project.github || project.github === '#') && (!project.demo || project.demo === '#') && (
                    <span className="project-links-note" style={{ flex: 1, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Links coming soon</span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="card"
            style={{
              textAlign: 'center',
              padding: '60px 24px',
              gridColumn: '1 / -1',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Filter size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>
              No projects found
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Try adjusting your filters or search query.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}