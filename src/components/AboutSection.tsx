import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-about section-line h-1" id="about" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      {/* Decorative Background Shape */}
      <div className="img-shape" style={{ position: 'absolute', right: '-10%', top: '10%', opacity: 0.35, pointerEvents: 'none' }}>
        <img
          alt="About Shape"
          loading="lazy"
          width="780"
          height="780"
          src="/assets/images/section/shape-se-about.png"
          style={{ color: 'transparent', maxWidth: '650px' }}
        />
      </div>

      <div className="line-page line-2"></div>

      <div className="container">
        <div className="heading-section mb-56">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
            About Company
          </p>
          <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2 }}>
            AI-powered agency, they <br />
            helps brands accelerate their <br />
            <span style={{ color: '#fc7028' }}>marketing success.</span>
          </p>
        </div>

        <div className="section-about-inner d-flex justify-content-between g-30" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left Text Content */}
          <div className="section-about-content" style={{ flex: '1 1 450px' }}>
            <p className="text text-title-1 lh-35 fw-6 letter-space--3 title-animation" style={{ fontSize: '22px', lineHeight: 1.5, marginBottom: '20px' }}>
              Next-generation AI empowers organizations to stay competitive, innovate faster.
            </p>
            <p className="desc ff-2 text-body-2 title-animation" style={{ color: '#a0a0a0', lineHeight: 1.7, marginBottom: '36px' }}>
              We are an AI-driven agency transforming ideas into intelligent digital experiences by combining forward-looking thinking with advanced technology and bespoke algorithms.
            </p>
            <div className="title-animation">
              <a className="tf-btn style-big style-white" href="#services" style={{ textDecoration: 'none' }}>
                <span className="text-btn">Learn More Us</span>
                <span className="icon-btn">
                  <i className="icon-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

          {/* Right Image with Overlaid Floating Fact Card */}
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div className="image-section tf-animate-2" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img
                alt="About Team"
                loading="lazy"
                src="/assets/images/section/img-section-about-h1.jpg"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Fact Badge */}
            <div
              className="box-fact tf-animate-2"
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-25px',
                background: '#131313',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '24px 30px',
                borderRadius: '14px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.6)'
              }}
            >
              <div className="top-fact" style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span className="h1 fw-6 ff-2" style={{ color: '#fc7028', fontSize: '56px', lineHeight: 1 }}>5X</span>
                <span style={{ fontSize: '24px', fontWeight: 600 }}>%</span>
              </div>
              <div className="line" style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '12px 0' }}></div>
              <p className="desc ff-2 text-title-1 fw-5 letter-space--3" style={{ fontSize: '15px', color: '#fff', margin: 0 }}>
                Business growth<br />through strategy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
