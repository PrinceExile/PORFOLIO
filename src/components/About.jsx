import { motion } from 'framer-motion';
import { Award, Target, Users, Zap, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const stats = [
  { value: portfolioData.education[0]?.grade ?? '—', label: 'Academic Score', icon: Award },
  { value: portfolioData.projects.length, label: 'Major Projects', icon: Target },
  { value: portfolioData.certifications.length, label: 'Certifications', icon: Award },
  { value: portfolioData.languages.length, label: 'Languages', icon: Users },
];

const strengths = portfolioData.strengths;

// Helper to get highlighted name parts
const getNameParts = () => {
  const nameParts = portfolioData.name.split(' ');
  const firstName = nameParts.slice(0, -2).join(' ');
  const highlightedName = nameParts.slice(-2).join(' '); // "Vignesh Varsha"
  return { firstName, highlightedName };
};

export default function About() {
  const { firstName, highlightedName } = getNameParts();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
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
          <h2 id="about-title" className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, journey, and what drives me as an AI/ML engineer.
          </p>
        </motion.div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>
                Hello, I'm {firstName ? <span>{firstName} </span> : null}
                <motion.span style={{
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                }}>
                  {highlightedName}
                  <span style={{
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
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <p>
                  {portfolioData.summary}
                </p>
                <p>
                  I thrive on <strong style={{ color: 'var(--text-primary)' }}>rapid prototyping</strong> — turning AI concepts
                  into executable solutions quickly. I enjoy exploring practical uses of machine learning, generative AI,
                  and software tools to solve real-world problems.
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>
                  Key Strengths
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength.title}
                      className="card"
                      style={{ padding: '16px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Zap size={20} style={{ color: 'white' }} />
                        </div>
                        <div>
                          <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{strength.title}</p>
                          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{strength.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card" style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>
                Education & Achievements
              </h3>
              <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="card"
                    style={{ padding: '24px', textAlign: 'center', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-lg)', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <stat.icon size={24} style={{ color: 'white' }} />
                    </div>
                    <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{stat.value}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '8px' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '24px' }} className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
                Languages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {portfolioData.languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    className="badge"
                    style={{ background: index === 0 ? 'var(--accent-gradient)' : 'var(--bg-tertiary)', color: index === 0 ? 'white' : 'var(--text-secondary)', border: 'none' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div id="certifications" className="certifications-section" aria-labelledby="certifications-title" style={{ marginTop: '80px' }}>
          <div className="certifications-heading" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <h3 id="certifications-title" className="certifications-title" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>Certifications & Workshops</h3>
              <p className="certifications-subtitle" style={{ color: 'var(--text-secondary)' }}>A few of the programs and workshops I have completed.</p>
            </div>
            <span className="certifications-count" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>{portfolioData.certifications.length} certificates</span>
          </div>

          <div className="certifications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {portfolioData.certifications.map((certification, index) => (
              <motion.article
                key={certification.name}
                className="certificate-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-base)',
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-hover)' }}
              >
                {certification.image && (
                  <div className="certificate-image-wrap" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img
                      className="certificate-image"
                      src={certification.image}
                      alt={`${certification.name} certificate issued by ${certification.issuer}`}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform var(--transition-slow)',
                      }}
                    />
                    <div className="certificate-overlay" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(2,6,23,0.9) 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '20px',
                    }}>
                      <span className="certificate-view" style={{
                        color: 'white',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        opacity: 0,
                        transform: 'translateY(10px)',
                        transition: 'all var(--transition-fast)',
                      }}>
                        View Certificate
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                )}
                <div className="certificate-details" style={{ padding: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="certificate-icon" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                    <Award size={20} style={{ color: 'white' }} />
                  </div>
                  <div className="certificate-copy" style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px', lineHeight: 1.4 }}>
                      <a
                        href={certification.url || certification.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                      >
                        {certification.name}
                      </a>
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {certification.issuer}{certification.date ? ` · ${certification.date}` : ''}
                    </p>
                    {certification.url && (
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginTop: '8px',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--accent-primary)',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                      >
                        Verify Certificate
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
