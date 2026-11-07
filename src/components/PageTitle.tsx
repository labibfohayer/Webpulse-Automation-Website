import React from 'react';
import { Link } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  breadcrumb: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumb }) => {
  return (
    <section className="page-title" style={{ position: 'relative', overflow: 'hidden', padding: '160px 0 80px', minHeight: '320px', display: 'flex', alignItems: 'center' }}>
      <div className="image-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          alt={title}
          src="/assets/images/page-title/page-title-2.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="page-title-content" style={{ textAlign: 'center' }}>
          <h1 className="title-page" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: 'var(--font-bai-jamjuree)' }}>
            {title}
          </h1>
          <div className="breadkcum" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(19,19,19,0.7)', backdropFilter: 'blur(10px)', padding: '8px 20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Link className="text-title-1 fw-6" to="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: '15px' }}>
              Home
            </Link>
            <span className="text-title-1 fw-6" style={{ color: '#fc7028' }}>/</span>
            <span className="text-title-1 fw-6 text-in-page" style={{ color: '#fff', fontSize: '15px' }}>
              {breadcrumb}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
