import React from 'react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'AI Content Generator Platform',
      category: 'UX/UI Design · Ai Design',
      image: '/assets/images/project/project-1.jpg',
      link: '#'
    },
    {
      title: 'Predictive Sales Analytics Dashboard',
      category: 'Machine Learning · Analytics',
      image: '/assets/images/project/project-2.jpg',
      link: '#'
    }
  ];

  return (
    <section className="section-project h-1 section-line flat-spacing-1" id="projects" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="line-page line-2"></div>
      <div className="container">
        <div className="heading-section d-flex align-items-end justify-content-between rg-15 flex-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', gap: '20px' }}>
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
              Case Studies
            </p>
            <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2, margin: 0 }}>
              Featured Projects
            </p>
          </div>
          <div className="right title-animation">
            <a className="tf-btn style-big border-radius-30 style-color-black" href="#projects" style={{ textDecoration: 'none' }}>
              <span className="text-btn">View All Projects</span>
              <span className="icon-btn">
                <i className="icon-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="container w-1302">
        <div className="section-project-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="project-item hover-img"
              style={{
                background: '#131313',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fc7028';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="top-item" style={{ overflow: 'hidden', position: 'relative' }}>
                <a className="image" href={proj.link} style={{ display: 'block', overflow: 'hidden' }}>
                  <img
                    alt={proj.title}
                    loading="lazy"
                    src={proj.image}
                    style={{
                      width: '100%',
                      height: '340px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </a>
              </div>
              <div className="bottom-item" style={{ padding: '28px' }}>
                <span style={{ color: '#fc7028', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {proj.category}
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '10px', color: '#fff' }}>
                  <a href={proj.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {proj.title}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
