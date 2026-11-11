import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="wg-hero-area" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div className="image-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          alt="Hero Background"
          src="/assets/images/page-title/bg-page-title-home.jpg"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: 'cover',
            color: 'transparent'
          }}
        />
      </div>

      <div className="line"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="top-hero-area">
          <div className="title-animation" aria-label="WEBPULSE AUTOMATION" style={{ perspective: '200px' }}>
            <div style={{ position: 'relative', display: 'block', textAlign: 'start' }}>
              <p className="text-big-gradient">WEBPULSE AUTOMATION</p>
            </div>
          </div>
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* Decorative Floating Mesh Artwork */}
        <div className="image-absolute" style={{ pointerEvents: 'none' }}>
          <img
            alt="Hero Visual Mesh"
            loading="lazy"
            width="673"
            height="670"
            src="/assets/images/page-title/img-hero-arena-2.png"
            style={{ color: 'transparent' }}
          />
        </div>

        <div className="hero-area-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
          {/* Main Hero Illustration / Cyber Avatar */}
          <div className="image-hero">
            <img
              alt="AI Hero Avatar"
              loading="lazy"
              width="398"
              height="600"
              src="/assets/images/page-title/img-hero-arena-1.png"
              style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Left Text Content */}
          <div className="left-content" style={{ maxWidth: '600px' }}>
            <p className="sub-title title-animation">
              <i className="icon-sparkle" style={{ color: '#00d2ff', marginRight: '8px' }}></i>
              <span className="ff-2 fw-5 letter-space--2 text-body-1">Web Engineering &amp; AI Automation</span>
            </p>

            <h1 className="title fw-6 letter-space--3 title-animation" style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.15, margin: '20px 0' }}>
              Architecting High-Speed <br />
              Websites &amp; Autonomous <br />
              <span style={{ color: '#00d2ff' }}>AI Business Workflows</span>
            </h1>

            <p className="desc ff-2 fw-5 h5 letter-space-0 title-animation" style={{ color: '#a0a0a0', marginBottom: '32px', fontSize: '18px', lineHeight: 1.6 }}>
              We engineer high-speed modern websites and autonomous AI workflows that scale your business operations.
            </p>

            <div className="title-animation" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a className="tf-btn style-big style-gradient-2" href="https://wa.me/8801580506445" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <span className="text-btn">Book a Strategy Call</span>
                <span className="icon-btn">
                  <i className="icon-arrow-right"></i>
                </span>
              </a>
              <a className="tf-btn style-big style-white" href="/service" style={{ textDecoration: 'none' }}>
                <span className="text-btn">Explore Services</span>
              </a>
            </div>
          </div>

          {/* Floating Quote & Social Proof Card */}
          <div className="wg-quote-2 tf-animate-4 active-animate" style={{ position: 'absolute', right: 0, bottom: '20px' }}>
            <div className="top-wg">
              <div className="icon">
                <i className="icon-star" style={{ color: '#fc7028', fontSize: '24px' }}></i>
              </div>
              <p className="text-body-1 fw-6 letter-space--2 color-white mb-8">⚡ 10x Faster Execution</p>
              <p className="text-body-2 letter-space--2 ff-2 color-text-3">Modern Stack &amp; Zero Downtime</p>
            </div>

            <div className="line"></div>

            <div className="bottom-wg">
              <div className="list-image-avatar" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="item item-1">
                  <img alt="Avatar 1" width="50" height="50" src="/assets/images/avatar/avatar-1.jpg" style={{ borderRadius: '50%' }} />
                </div>
                <div className="item item-2" style={{ marginLeft: '-12px' }}>
                  <img alt="Avatar 2" width="50" height="50" src="/assets/images/avatar/avatar-2.jpg" style={{ borderRadius: '50%' }} />
                </div>
                <div className="item item-3" style={{ marginLeft: '-12px' }}>
                  <img alt="Avatar 3" width="50" height="50" src="/assets/images/avatar/avatar-3.jpg" style={{ borderRadius: '50%' }} />
                </div>
                <div className="item item-4 text-item" style={{ marginLeft: '-12px', width: '50px', height: '50px', borderRadius: '50%', background: '#00d2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  <span>+</span>
                </div>
              </div>
              <p className="text-body-1 fw-6 letter-space--2 color-white mb-8" style={{ marginTop: '12px' }}>50+ Systems Built</p>
              <p className="text-body-2 letter-space--2 ff-2 color-text-3">99% Client Satisfaction &amp; 24/7 Active Uptime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="line-page line-1"></div>
    </section>
  );
};
