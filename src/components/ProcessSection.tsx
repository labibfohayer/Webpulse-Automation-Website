import React, { useState } from 'react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover & Strategy',
      desc: 'We understand your business goals, analyze requirements, and define a clear AI strategy tailored to your needs.',
      image: '/assets/images/widget/img-process-1.jpg'
    },
    {
      num: '02',
      title: 'Design & Development',
      desc: 'We transform ideas into intelligent, user-focused solutions by combining creative UX/UI design with advanced AI technology.',
      image: '/assets/images/widget/img-process-2.jpg'
    },
    {
      num: '03',
      title: 'Deploy & Optimize',
      desc: 'We launch solutions, monitor real-time performance, and continuously optimize inference pipelines for maximum scalability.',
      image: '/assets/images/widget/img-process-1.jpg'
    }
  ];

  return (
    <section className="section-process h-1 section-line flat-spacing-2 horizontal-accordion-wrap" id="process" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="line-page line-2"></div>
      <div className="container">
        <div className="heading-section style-center mb-56" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
            Working Process
            <i className="icon-sparkle" style={{ color: '#fc7028', marginLeft: '8px' }}></i>
          </p>
          <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2 }}>
            How We Transform Concepts <br />
            <span style={{ color: '#fc7028' }}>into Intelligence</span>
          </p>
        </div>
      </div>

      <div className="container w-1302">
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  flex: isActive ? '2 1 450px' : '1 1 280px',
                  background: isActive ? 'linear-gradient(145deg, #181920, #101116)' : '#131313',
                  border: isActive ? '1px solid #fc7028' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '36px',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isActive ? '0 15px 40px rgba(252, 112, 40, 0.15)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{ fontSize: '38px', fontWeight: 800, color: isActive ? '#fc7028' : '#444', fontFamily: 'var(--font-bai-jamjuree)' }}>
                    {st.num}
                  </span>
                  {isActive && (
                    <span style={{ padding: '6px 14px', borderRadius: '30px', background: 'rgba(252, 112, 40, 0.15)', color: '#fc7028', fontSize: '13px', fontWeight: 600 }}>
                      Active Phase
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
                  {st.title}
                </h3>
                <p style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '15px', marginBottom: isActive ? '28px' : '0' }}>
                  {st.desc}
                </p>

                {isActive && (
                  <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginTop: '20px' }}>
                    <img
                      alt={st.title}
                      loading="lazy"
                      src={st.image}
                      style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
