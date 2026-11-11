import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer style-2 section-line" style={{ position: 'relative', overflow: 'hidden', background: '#0a0b0e', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="line-page line-1"></div>

      {/* Background Shapes */}
      <div className="image-shape shape-1" style={{ position: 'absolute', left: 0, top: 0, opacity: 0.25, pointerEvents: 'none' }}>
        <img alt="Footer Shape Left" src="/assets/images/section/shape-footer-2-1.png" style={{ width: '100%', maxWidth: '600px' }} />
      </div>
      <div className="image-shape shape-2" style={{ position: 'absolute', right: 0, top: 0, opacity: 0.25, pointerEvents: 'none' }}>
        <img alt="Footer Shape Right" src="/assets/images/section/shape-footer-2-2.png" style={{ width: '100%', maxWidth: '600px' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Middle Footer Grid */}
        <div className="middle-footer" style={{ padding: '100px 0 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', position: 'relative' }}>
          <div className="img-shape" style={{ position: 'absolute', top: '10%', left: '30%', opacity: 0.2, pointerEvents: 'none' }}>
            <img alt="Footer Emblem" src="/assets/images/section/shape-footer-middel.png" style={{ width: '100%', maxWidth: '400px' }} />
          </div>

          {/* Col 1: Brand & CTA */}
          <div className="about-footer" style={{ gridColumn: 'span 1' }}>
            <Link className="logo-footer" to="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <img alt="Webpulse Automation" width="240" height="44" style={{ height: "44px", width: "auto" }} src="/assets/images/logo/logo-footer.svg" />
            </Link>
            <p className="title text-title-3 fw-6 letter-space--3" style={{ fontSize: '24px', lineHeight: 1.3, marginBottom: '24px', color: '#fff' }}>
              Architecting High-Speed Websites &amp; <br />
              Autonomous <span style={{ color: '#00d2ff', fontStyle: 'italic' }}>AI Workflows</span>
            </p>
            <a className="tf-btn style-big style-white" href="https://wa.me/8801908272574" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <span className="text-btn">Book a Strategy Call</span>
              <span className="icon-btn">
                <i className="icon-arrow-right"></i>
              </span>
            </a>
            <div style={{ display: 'flex', gap: '14px', marginTop: '20px', flexWrap: 'wrap' }}>
              <a href="https://linkedin.com/company/webpulse-automation" target="_blank" rel="noopener noreferrer" style={{ color: '#00d2ff', textDecoration: 'none', fontSize: '14px' }}>LinkedIn</a>
              <span style={{ color: '#444' }}>•</span>
              <a href="https://facebook.com/webpulseautomation" target="_blank" rel="noopener noreferrer" style={{ color: '#00d2ff', textDecoration: 'none', fontSize: '14px' }}>Facebook</a>
              <span style={{ color: '#444' }}>•</span>
              <a href="https://github.com/webpulseautomation" target="_blank" rel="noopener noreferrer" style={{ color: '#00d2ff', textDecoration: 'none', fontSize: '14px' }}>GitHub</a>
              <span style={{ color: '#444' }}>•</span>
              <a href="https://wa.me/8801908272574" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', textDecoration: 'none', fontSize: '14px' }}>WhatsApp</a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-content footer-col-block">
            <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>Menu</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home (AI Agency)', path: '/' },
                { name: 'AI Startup', path: '/ai-startup' },
                { name: 'About Company', path: '/about' },
                { name: 'Our Services', path: '/service' },
                { name: 'Team Members', path: '/team' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    style={{ color: '#888', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fc7028')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-content footer-col-block">
            <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Custom Web Design & Full-Stack Dev', 'Broken Website Repair & Speed Optimization', 'Social Page & Social Media AI Automation', 'End-to-End Business Automation', 'Custom AI Agents & Intelligent Chatbots'].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/service"
                    style={{ color: '#888', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fc7028')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="footer-content footer-col-block">
            <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>Subscribe</h4>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
              Receive latest breakthroughs in artificial intelligence and automation directly to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  flex: 1
                }}
              />
              <button
                type="button"
                style={{
                  background: '#fc7028',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#fff',
                  padding: '10px 18px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '30px 0' }}>
          <div className="bottom-footer-content d-flex align-items-center justify-content-between flex-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <p className="copy-right ff-2 text-center" style={{ color: '#666', fontSize: '14px', margin: 0 }}>
              Copyright © 2026 <Link className="ff-2" to="/" style={{ color: '#888', textDecoration: 'none' }}>Webpulse Automation</Link>. All Rights Reserved. Reconstructed with REA.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '24px', margin: 0, padding: 0 }}>
              {['Privacy Policy', 'Terms & Conditions', 'Careers'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fc7028')} onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#fc7028',
          border: 'none',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          zIndex: 99,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(252, 112, 40, 0.4)'
        }}
      >
        ↑
      </button>
    </footer>
  );
};
