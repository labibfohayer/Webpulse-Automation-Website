import React, { useState } from 'react';

export const FloatingWidgets: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = "https://wa.me/8801580506445?text=Hi%20Webpulse%20Automation!%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <div className="webpulse-floating-whatsapp" style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 99999, fontFamily: 'var(--font-dm-sans, sans-serif)' }}>
      {/* Floating Action Menu Popover */}
      {isOpen && (
        <div
          style={{
            marginBottom: '16px',
            background: 'rgba(15, 17, 23, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 210, 255, 0.25)',
            borderRadius: '20px',
            padding: '20px',
            width: '310px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 210, 255, 0.15)',
            animation: 'fadeInUp 0.25s ease-out',
            color: '#ffffff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00d2ff, #71bbf9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/assets/images/logo/logo.svg"
                  alt="Webpulse"
                  style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '15px', color: '#ffffff' }}>Webpulse Support</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#00ff88', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', display: 'inline-block' }}></span>
                  Typically replies in 5m
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#8e9aaf',
                cursor: 'pointer',
                fontSize: '18px',
                padding: '4px',
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p style={{ fontSize: '13px', color: '#b0b8c4', lineHeight: 1.5, margin: '0 0 16px 0' }}>
            Need a high-speed website, broken site recovery, or custom AI business automation?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <span>💬 Direct WhatsApp Chat</span>
            </a>

            <a
              href="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '11px 16px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '13px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
                e.currentTarget.style.borderColor = '#00d2ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              <span>📅 Book 15-Min Strategy Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d2ff 0%, #25D366 100%)',
          border: 'none',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4), 0 0 15px rgba(0, 210, 255, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
        aria-label="Open WhatsApp live support"
      >
        {/* Pulse ring animation */}
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px solid #25D366',
            animation: 'pulseRing 2s infinite',
            pointerEvents: 'none',
          }}
        />

        {isOpen ? (
          <span style={{ fontSize: '22px', fontWeight: 'bold' }}>✕</span>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes pulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
