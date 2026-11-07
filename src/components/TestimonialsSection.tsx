import React, { useState } from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'James Anderson',
      role: 'CEO, eTech Solutions',
      title: '“We Highly Recommend their Services.”',
      quote: 'Working with this team completely transformed our business. Their AI solutions streamlined our operations and boosted efficiency beyond expectations.',
      rating: 5,
      score: '4.9',
      avatar: '/assets/images/avatar/avatar-1.jpg'
    },
    {
      name: 'Emily Johnson',
      role: 'COO, nTech Solutions',
      title: '“Creative Team & Scalable Systems.”',
      quote: 'Reliable support and innovative thinking. They helped us build a scalable AI system that continues to grow effortlessly with our enterprise requirements.',
      rating: 5,
      score: '4.8',
      avatar: '/assets/images/avatar/avatar-2.jpg'
    },
    {
      name: 'Marcus Vance',
      role: 'Head of AI, Nexus Robotics',
      title: '“Game-Changing Automation Suite.”',
      quote: 'The accuracy of their custom models and sub-millisecond inference times allowed us to launch our flagship product two months ahead of schedule.',
      rating: 5,
      score: '5.0',
      avatar: '/assets/images/avatar/avatar-3.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="section-testimonials h-1 section-line tf-btn-swiper-main flat-spacing-1" id="testimonials" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="line-page line-2"></div>
      <div className="container w-1222">
        <div className="heading-section d-flex justify-content-between align-items-end flex-wrap g-10 mb-53" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', gap: '20px' }}>
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
              Clients Testimonials
            </p>
            <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2, margin: 0 }}>
              Trusted by million <span style={{ color: '#fc7028' }}>peoples</span>
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={prev}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#181920',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fc7028')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            >
              &#8592;
            </button>
            <button
              onClick={next}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#fc7028',
                border: 'none',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: idx === currentIndex ? 'linear-gradient(145deg, #181922, #101116)' : '#131313',
                border: idx === currentIndex ? '1px solid #fc7028' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '36px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: idx === currentIndex ? '0 15px 40px rgba(252, 112, 40, 0.15)' : 'none'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="icon-star" style={{ color: '#fc7028', fontSize: '16px' }}></i>
                  ))}
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px', marginLeft: '6px' }}>({item.score})</span>
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{item.title}</h4>
                <p style={{ color: '#a0a0a0', lineHeight: 1.7, fontSize: '15px', marginBottom: '32px' }}>
                  {item.quote}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
                <img
                  alt={item.name}
                  src={item.avatar}
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h5 style={{ fontSize: '17px', fontWeight: 600, color: '#fff', margin: 0 }}>{item.name}</h5>
                  <p style={{ fontSize: '13px', color: '#888', margin: 0, marginTop: '4px' }}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
