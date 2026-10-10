import { motion } from 'framer-motion';
import { Code, Brain, Globe, Wrench, Zap, Sparkles } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const categoryIcons = {
  'Programming': Code,
  'AI/ML': Brain,
  'Frameworks & Tools': Wrench,
  'Data & Analytics': Globe,
};

const categoryColors = {
  'Programming': 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
  'AI/ML': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  'Frameworks & Tools': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  'Data & Analytics': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
};

export default function Skills() {
  const skillsCount = Object.values(portfolioData.skills).flat().length;
  const categories = Object.entries(portfolioData.skills);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="skills-title" className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with across AI/ML, full-stack development, and data engineering.
          </p>
        </motion.div>

        <motion.div
          className="card"
          style={{ marginBottom: '48px', padding: '32px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <p style={{ fontSize: '3rem', fontWeight: 800, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {skillsCount}+
              </p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>Technologies</p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
              <p style={{ fontSize: '3rem', fontWeight: 800, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {categories.length}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>Categories</p>
            </div>
            <div>
              <p style={{ fontSize: '3rem', fontWeight: 800, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {portfolioData.projects.length}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>Projects Built</p>
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {categories.map(([category, skills], catIndex) => {
            const Icon = categoryIcons[category] || Sparkles;
            const gradient = categoryColors[category] || 'var(--accent-gradient)';
            return (
              <motion.article
                key={category}
                className="skill-category-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  transition: 'all var(--transition-base)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + catIndex * 0.08 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-hover)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      background: gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px -2px rgb(0 0 0 / 0.15)',
                    }}
                  >
                    <Icon size={22} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{category}</h3>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>{skills.length} technologies</p>
                  </div>
                </div>

                <div
                  className="skill-tags"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                  role="list"
                  aria-label={`${category} skills`}
                >
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      role="listitem"
                      style={{
                        padding: '8px 14px',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        borderRadius: '9999px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        cursor: 'default',
                        transition: 'all var(--transition-fast)',
                        whiteSpace: 'nowrap',
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.2 + skillIndex * 0.03, duration: 0.3 }}
                      whileHover={{
                        background: gradient,
                        color: 'white',
                        borderColor: 'transparent',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px -2px rgb(0 0 0 / 0.15)',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="card"
          style={{ marginTop: '48px', padding: '32px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1rem' }}>
            Always learning — currently exploring
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {['MLOps', 'Rust', 'Transformers.js', 'Vector Databases', 'AI Agents'].map((skill, i) => (
              <motion.span
                key={skill}
                className="badge"
                style={{
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  padding: '8px 16px',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}