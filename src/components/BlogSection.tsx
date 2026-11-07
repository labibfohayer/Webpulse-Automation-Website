import React from 'react';

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: 'The Role of Machine Learning in Business Growth',
      image: '/assets/images/blog/grid-no-desc-1.jpg',
      date: 'March 15, 2026',
      tag: 'AI Strategy',
      link: '#'
    },
    {
      title: 'Navigating Enterprise Automation in 2026',
      image: '/assets/images/blog/grid-no-desc-2.jpg',
      date: 'March 22, 2026',
      tag: 'Automation',
      link: '#'
    },
    {
      title: 'Build the Future of the AI-Powered Enterprise',
      image: '/assets/images/blog/grid-no-desc-3.jpg',
      date: 'April 02, 2026',
      tag: 'Innovation',
      link: '#'
    }
  ];

  return (
    <section className="section-blog h-1 section-line flat-spacing-1" id="blog" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="line-page line-2"></div>

      {/* Decorative Background Shape */}
      <div className="img-shape" style={{ position: 'absolute', right: '-10%', top: '5%', opacity: 0.35, pointerEvents: 'none' }}>
        <img alt="Blog Shape" src="/assets/images/section/shape-s-blog.png" style={{ maxWidth: '600px', height: 'auto' }} />
      </div>

      <div className="container">
        <div className="heading-section style-center mb-56" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
            Latest Blog &amp; News
            <i className="icon-sparkle" style={{ color: '#fc7028', marginLeft: '8px' }}></i>
          </p>
          <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2 }}>
            Insights, Trends, and the Future <br />
            <span style={{ color: '#fc7028' }}>of AI—All in One Place</span>
          </p>
        </div>
      </div>

      <div className="container w-1302">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="post-grid no-desc hover-img"
              style={{
                background: '#131313',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease'
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
              <div style={{ overflow: 'hidden', height: '260px' }}>
                <img
                  alt={post.title}
                  loading="lazy"
                  src={post.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: 'rgba(252, 112, 40, 0.15)', color: '#fc7028', fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>
                    {post.tag}
                  </span>
                  <span style={{ color: '#777', fontSize: '14px' }}>{post.date}</span>
                </div>

                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: '20px' }}>
                  <a href={post.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </a>
                </h4>

                <a href={post.link} style={{ color: '#fc7028', textDecoration: 'none', fontWeight: 600, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Read Article &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
