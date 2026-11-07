import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'AI Strategy & Automation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section-contact h-1 section-line flat-spacing-3" id="contact" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="line-page line-2"></div>

      {/* Background Graphic */}
      <div className="img-bg-contact" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none', zIndex: 0 }}>
        <img alt="Contact Background" src="/assets/images/section/bg-section-contact.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-contact-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Left Column */}
          <div className="letf">
            <div className="heading-section mb-56">
              <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
                <i className="icon-sparkle" style={{ color: '#fc7028', marginRight: '8px' }}></i>
                Contact Us
              </p>
              <p className="h2 title fw-7 title-animation" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)', lineHeight: 1.2 }}>
                Let’s Turn Ideas into <br />
                <span style={{ color: '#fc7028' }}>Intelligence</span>
              </p>
            </div>

            <p className="text-section ff-2 title-animation" style={{ color: '#a0a0a0', fontSize: '17px', lineHeight: 1.7, marginBottom: '40px' }}>
              We’re here to help you take your business to the next level with smart, reliable AI solutions whether you have a question or need bespoke architecture design.
            </p>

            <div className="list-card-contact d-flex g-20 align-items-center flex-wrap" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {/* Card 1: Email */}
              <div
                className="contact-card tf-animate-1"
                style={{
                  flex: '1 1 220px',
                  background: 'rgba(19, 19, 19, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="top-card d-flex align-items-center g-10" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <i className="icon-send" style={{ color: '#fc7028', fontSize: '20px' }}></i>
                  <p className="title-card text-body-2 letter-space--2 fw-5 ff-2" style={{ color: '#888', margin: 0 }}>
                    Send Us Email
                  </p>
                </div>
                <a href="mailto:webpulseautomation@gmail.com" className="link text-body-2 letter-space--3 fw-6" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
                  webpulseautomation@gmail.com
                </a>
              </div>

              {/* Card 2: Phone */}
              <div
                className="contact-card style-color-bg-1 tf-animate-1"
                style={{
                  flex: '1 1 220px',
                  background: 'rgba(19, 19, 19, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="top-card d-flex align-items-center g-10" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <i className="icon-phone-outgoing" style={{ color: '#fc7028', fontSize: '20px' }}></i>
                  <p className="title-card text-body-2 letter-space--2 fw-5 ff-2" style={{ color: '#888', margin: 0 }}>
                    Need help!
                  </p>
                </div>
                <a href="tel:+12125551234" className="link text-body-2 letter-space--3 fw-6" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
                  +1 (212) 555-1234
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form
            className="form-contact right"
            onSubmit={handleSubmit}
            style={{
              position: 'relative',
              background: '#131313',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '40px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            {/* Form Background Accent */}
            <div className="img-bg" style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
              <img alt="Form Background" src="/assets/images/widget/bg-form-contact.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="form-content" style={{ position: 'relative', zIndex: 2 }}>
              <p className="title-form text-title-1 fw-7 letter-space--3" style={{ fontSize: '24px', color: '#fff', marginBottom: '28px' }}>
                Free Consulting AI Solutions
              </p>

              {submitted && (
                <div style={{ background: 'rgba(252, 112, 40, 0.2)', border: '1px solid #fc7028', padding: '12px 16px', borderRadius: '10px', color: '#fff', marginBottom: '20px', fontSize: '14px' }}>
                  ✓ Thank you! Your request has been dispatched to our engineering team.
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                  <label htmlFor="name" className="text-body-2 letter-space--2 fw-5 title-input" style={{ display: 'block', color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name here"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </fieldset>

                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                  <label htmlFor="email" className="text-body-2 letter-space--2 fw-5 title-input" style={{ display: 'block', color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </fieldset>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <label htmlFor="phone" className="text-body-2 letter-space--2 fw-5 title-input" style={{ display: 'block', color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        color: '#fff',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    />
                  </fieldset>

                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <label htmlFor="subject" className="text-body-2 letter-space--2 fw-5 title-input" style={{ display: 'block', color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        background: '#1a1b22',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        color: '#fff',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    >
                      <option value="AI Strategy & Automation">AI Strategy & Automation</option>
                      <option value="Custom LLM Fine-Tuning">Custom LLM Fine-Tuning</option>
                      <option value="Enterprise Architecture">Enterprise Architecture</option>
                      <option value="UI/UX Generative Design">UI/UX Generative Design</option>
                    </select>
                  </fieldset>
                </div>

                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                  <label htmlFor="mess" className="text-body-2 letter-space--2 fw-5 title-input" style={{ display: 'block', color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                    Write Message
                  </label>
                  <textarea
                    id="mess"
                    rows={4}
                    placeholder="Briefly describe your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </fieldset>

                <button type="submit" className="tf-btn style-big style-gradient-2" style={{ border: 'none', width: '100%', cursor: 'pointer', marginTop: '10px' }}>
                  <span className="text-btn">Get Consultations</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
