import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const timelineVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const experiences = [
    ...portfolioData.experience.map(exp => ({
      ...exp,
      type: 'work',
      icon: Briefcase,
      iconBg: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
    })),
    ...portfolioData.education.map(edu => ({
      ...edu,
      type: 'education',
      role: edu.degree,
      company: edu.institution,
      period: edu.year,
      icon: GraduationCap,
      iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      grade: edu.grade,
    })),
  ].sort((a, b) => {
    const dateA = new Date(a.period.split('–')[1]?.trim() || a.period);
    const dateB = new Date(b.period.split('–')[1]?.trim() || b.period);
    return dateB - dateA;
  });

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section"
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="experience-title" className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background in AI/ML and Computer Science.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="timeline"
          style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}
        >
          <div
            className="timeline-rail"
            style={{ position: 'absolute', left: '23px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', borderRadius: '1px' }}
            aria-hidden="true"
          />

          <div           className="experience-list"
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.type}-${index}`}
                variants={timelineVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', gap: '24px', position: 'relative' }}
              >
                <motion.div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: exp.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                    boxShadow: '0 0 0 4px var(--bg-primary), var(--shadow-md)',
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <exp.icon size={22} style={{ color: 'white' }} />
                </motion.div>

                <motion.div
                  className="card"
                  style={{
                    flex: 1,
                    padding: '24px',
                    position: 'relative',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      {exp.company && (
                        <p style={{ fontWeight: 500, color: 'var(--accent-primary)', marginTop: '4px' }}>
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.type === 'education' && exp.grade && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'var(--bg-tertiary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                      <Award size={14} style={{ color: 'var(--accent-primary)' }} />
                      Grade: {exp.grade}
                    </div>
                  )}

                  {exp.bullets && (
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bulletIndex}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            paddingLeft: '4px',
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 + bulletIndex * 0.08 }}
                        >
                          <motion.div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: 'var(--accent-gradient)',
                              flexShrink: 0,
                              marginTop: '6px',
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}