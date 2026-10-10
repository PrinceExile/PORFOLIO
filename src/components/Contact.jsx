import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Mail, Linkedin, Github, MapPin, Send } from './Icons';
import portfolioData from '../data/portfolio.json';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    setStatus('opening');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}`, color: '#ea580c' },
    { icon: Linkedin, label: 'LinkedIn', value: portfolioData.linkedin.replace(/^https?:\/\//, ''), href: portfolioData.linkedin, color: '#0a66c2' },
    { icon: Github, label: 'GitHub', value: portfolioData.github.replace(/^https?:\/\//, ''), href: portfolioData.github, color: '#24292e' },
    { icon: MapPin, label: 'Location', value: portfolioData.location, color: '#2563eb' },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
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
          <h2 id="contact-title" className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>
                Let's Start a Conversation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                I'm always open to discussing new projects, collaboration opportunities, or just chatting about AI/ML.
                Feel free to reach out through any of the channels below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map((item, index) => {
                  const ContactItem = item.href ? motion.a : motion.div;
                  return (
                  <ContactItem
                    key={item.label}
                    {...(item.href ? {
                      href: item.href,
                      target: item.href.startsWith('http') ? '_blank' : undefined,
                      rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                    } : {})}
                    className="contact-method"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      transition: 'all var(--transition-base)',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-md)',
                        background: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={22} style={{ color: 'white' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.label}</p>
                      <p style={{ fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.value}</p>
                    </div>
                  </ContactItem>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-primary)' }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="contact-form-grid">
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', color: 'var(--text-primary)' }}>
                      Name <span style={{ color: 'var(--accent-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1px solid ${errors.name ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = errors.name ? 'var(--accent-primary)' : 'var(--border-color)'}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" style={{ color: 'var(--accent-primary)', fontSize: '0.8125rem', marginTop: '6px' }}>{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', color: 'var(--text-primary)' }}>
                      Email <span style={{ color: 'var(--accent-primary)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      spellCheck={false}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        fontSize: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1px solid ${errors.email ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = errors.email ? 'var(--accent-primary)' : 'var(--border-color)'}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" style={{ color: 'var(--accent-primary)', fontSize: '0.8125rem', marginTop: '6px' }}>{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Subject <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${errors.subject ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = errors.subject ? 'var(--accent-primary)' : 'var(--border-color)'}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && <p id="subject-error" style={{ color: 'var(--accent-primary)', fontSize: '0.8125rem', marginTop: '6px' }}>{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Message <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${errors.message ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '120px',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = errors.message ? 'var(--accent-primary)' : 'var(--border-color)'}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <p id="message-error" style={{ color: 'var(--accent-primary)', fontSize: '0.8125rem', marginTop: '6px' }}>{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', gap: '10px', marginTop: '8px' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={20} />
                </motion.button>

                {status === 'opening' && (
                  <p role="status" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                    Your email app should open with a draft. If it doesn't, email me at{' '}
                    <a href={`mailto:${portfolioData.email}`} style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
                      {portfolioData.email}
                    </a>.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
