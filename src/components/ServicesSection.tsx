import React from 'react';

export const ServicesSection: React.FC = () => {
  const leftServices = [
    {
      title: 'AI Chatbot Development',
      desc: 'Intelligent chatbots that provide instant human-like responses to customer queries around the clock.',
      icon: 'icon-cloud-based'
    },
    {
      title: 'Natural Language Processing (NLP)',
      desc: 'Enable systems to understand, parse, and respond to nuanced human language and documents.',
      icon: 'icon-seamless'
    },
    {
      title: 'Computer Vision Solutions',
      desc: 'Build AI systems that can analyze, classify, and interpret visual data from cameras and feeds.',
      icon: 'icon-advanced'
    }
  ];

  const rightServices = [
    {
      title: 'Machine Learning Solutions',
      desc: 'Create bespoke algorithmic models to analyze historical data and forecast trends with high accuracy.',
      icon: 'icon-machine'
    },
    {
      title: 'Voice Assistant Integration',
      desc: 'Build voice-enabled apps and smart assistant features with seamless speech-to-text recognition.',
      icon: 'icon-intelligent'
    },
    {
      title: 'AI-Powered Marketing',
      desc: 'Streamline and optimize your marketing campaigns using autonomous generative targeting systems.',
      icon: 'icon-ai-saas'
    }
  ];

  return (
    <section className="section-services h-1 section-line flat-spacing-1" id="services" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      <div className="line-page line-1"></div>

      {/* Decorative Ambient Shapes */}
      <div className="image-shape shape-1" style={{ position: 'absolute', left: '-5%', top: '5%', opacity: 0.35, pointerEvents: 'none' }}>
        <img alt="Service Glow Left" width="738" height="966" src="/assets/images/icon/shape-s-services-1.png" style={{ color: 'transparent', maxWidth: '500px' }} />
      </div>
      <div className="image-shape shape-2" style={{ position: 'absolute', right: '-5%', bottom: '5%', opacity: 0.35, pointerEvents: 'none' }}>
        <img alt="Service Glow Right" width="1048" height="622" src="/assets/images/icon/shape-s-services-2.png" style={{ color: 'transparent', maxWidth: '600px' }} />
      </div>

      <div className="container">
        <div className="heading-section style-center style-white mb-56" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
            AI-Power Services
            <i className="icon-sparkle" style={{ color: '#fc7028', marginLeft: '8px' }}></i>
          </p>
          <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2 }}>
            Intelligent Solutions for <br />
            <span style={{ color: '#fc7028' }}>Modern Business</span>
          </p>
        </div>
      </div>

      <div className="container w-1302">
        <div className="section-services-inner" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
          {/* Left Column Services */}
          <div className="list-services-item d-flex flex-column g-30" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {leftServices.map((srv, idx) => (
              <div
                key={idx}
                className="services-item-2"
                style={{
                  background: 'rgba(19, 19, 19, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '32px 28px',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fc7028';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(252, 112, 40, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(252, 112, 40, 0.1)', border: '1px solid rgba(252, 112, 40, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={srv.icon} style={{ fontSize: '28px', color: '#fc7028' }}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{srv.title}</h3>
                    <p style={{ color: '#a0a0a0', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{srv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Decorative Emblem */}
          <div className="image-shape-middle image-shape d-none d-lg-flex" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', width: '280px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                alt="Center Glow"
                src="/assets/images/icon/shape-s-services-middle.png"
                style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', opacity: 0.85 }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '24px', background: '#0b0c10', borderRadius: '50%', border: '2px solid rgba(252, 112, 40, 0.4)', boxShadow: '0 0 40px rgba(252, 112, 40, 0.3)' }}>
                <img alt="Logo Services" width="60" height="60" src="/assets/images/logo/logo-services.svg" />
              </div>
            </div>
          </div>

          {/* Right Column Services */}
          <div className="list-services-item d-flex flex-column g-30" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {rightServices.map((srv, idx) => (
              <div
                key={idx}
                className="services-item-2"
                style={{
                  background: 'rgba(19, 19, 19, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '32px 28px',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fc7028';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(252, 112, 40, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(252, 112, 40, 0.1)', border: '1px solid rgba(252, 112, 40, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={srv.icon} style={{ fontSize: '28px', color: '#fc7028' }}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{srv.title}</h3>
                    <p style={{ color: '#a0a0a0', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{srv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
