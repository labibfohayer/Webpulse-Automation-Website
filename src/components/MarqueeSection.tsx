import React from 'react';

export const MarqueeSection: React.FC = () => {
  const items = [
    'AI - Power Agency',
    'Data - driven Insights',
    'Ai - startup solutions',
    'Machine Learning Models',
    'Intelligent Automation',
    'Predictive Intelligence'
  ];

  return (
    <section className="section-line section-marquee flat-spacing-1" style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', background: '#0e0f14' }}>
      <div className="infiniteSlide-app style-border section-dot">
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...items, ...items].map((text, idx) => (
            <div key={idx} className="marquee-item" style={{ display: 'inline-flex', alignItems: 'center', margin: '0 36px' }}>
              <div className="marque-text-item style-color-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
                <i className="icon-sparkle" style={{ color: '#fc7028', fontSize: '28px' }}></i>
                <span className="h1 fw-7 letter-space--5 lh-72" style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
