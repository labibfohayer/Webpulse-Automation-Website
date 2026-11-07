import React from 'react';

export const FeaturesBento: React.FC = () => {
  return (
    <section className="section-features h-1 section-line flat-spacing-1" id="features">
      <div className="line-page line-2"></div>
      <div className="container">
        <div className="heading-section style-center mb-56">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
            Powerful AI Capabilities
            <i className="icon-sparkle" style={{ color: '#fc7028', marginLeft: '8px' }}></i>
          </p>
          <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2 }}>
            Transforming Ideas with <br />
            <span style={{ color: '#fc7028' }}>Intelligent Features</span>
          </p>
        </div>
      </div>

      <div className="container w-1302">
        <div className="features-content g-10" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {/* Card 1: AI-Powered Automation */}
          <div className="features-card flex-grow-1 tf-animate-1" style={{ flex: '1 1 350px' }}>
            <p className="title h3 fw-6">AI-Powered Automation</p>
            <div className="middel-icon" style={{ position: 'relative', margin: '40px 0', minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="img-shape" style={{ position: 'absolute', opacity: 0.7 }}>
                <img
                  alt="Card Shape"
                  loading="lazy"
                  width="813"
                  height="824"
                  src="/assets/images/icon/shape-features-card.png"
                  style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
                />
              </div>
              <div className="icon-item icon-1" style={{ position: 'relative', zIndex: 2, background: 'rgba(252, 112, 40, 0.15)', border: '1px solid #fc7028', padding: '24px', borderRadius: '50%' }}>
                <i className="icon-machine" style={{ fontSize: '42px', color: '#fc7028' }}></i>
              </div>
            </div>
            <p className="desc ff-2 text-body-2" style={{ color: '#9e9e9e', lineHeight: 1.6 }}>
              Streamline complex enterprise workflows, reduce operational latency, and boost team execution efficiency with automated AI agents.
            </p>
          </div>

          {/* Card 2: Data-Driven Insights (Large Feature Visual) */}
          <div className="features-card-2 flex-grow-1 tf-animate-2" style={{ flex: '1.2 1 420px', position: 'relative', overflow: 'hidden' }}>
            <div className="image-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <img
                alt="Feature Background"
                loading="lazy"
                src="/assets/images/icon/img-bg-fea-2.png"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
            </div>
            <div className="card-content" style={{ position: 'relative', zIndex: 2 }}>
              <div className="icon" style={{ marginBottom: '20px' }}>
                <i className="icon-advanced" style={{ fontSize: '44px', color: '#fc7028' }}></i>
              </div>
              <p className="title h3 fw-6 color-white mb-16">Data-Driven Insights</p>
              <p className="desc ff-2 text-body-2 color-white" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '24px' }}>
                Turn raw multi-modal enterprise signals into high-confidence predictions, automated reports, and instant strategic decisions.
              </p>
              <div className="image-bottom" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  alt="Feature Visual"
                  loading="lazy"
                  src="/assets/images/section/img-fea.jpg"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Natural Language Processing */}
          <div className="features-card flex-grow-1 tf-animate-4" style={{ flex: '1 1 350px' }}>
            <p className="title h3 fw-6">Natural Language Processing</p>
            <div className="middel-icon" style={{ position: 'relative', margin: '40px 0', minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="img-shape" style={{ position: 'absolute', opacity: 0.7 }}>
                <img
                  alt="Card Shape"
                  loading="lazy"
                  width="813"
                  height="824"
                  src="/assets/images/icon/shape-features-card.png"
                  style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
                />
              </div>
              <div className="icon-item icon-1" style={{ position: 'relative', zIndex: 2, background: 'rgba(252, 112, 40, 0.15)', border: '1px solid #fc7028', padding: '24px', borderRadius: '50%' }}>
                <i className="icon-intelligent" style={{ fontSize: '42px', color: '#fc7028' }}></i>
              </div>
            </div>
            <p className="desc ff-2 text-body-2" style={{ color: '#9e9e9e', lineHeight: 1.6 }}>
              Deliver context-aware conversational bots, real-time voice translation, and semantic document search across all customer touchpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
