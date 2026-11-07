import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header
        className={`header header-fixed style-2 ${isScrolled ? 'is-fixed' : ''}`}
        style={{
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(11, 12, 16, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.6)' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 999
        }}
      >
        <div className="container w-975">
          <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
            <Link className="logo" to="/">
              <img
                alt="Webpulse Automation"
                width="200"
                height="30"
                src="/assets/images/logo/logo-white.svg"
                style={{ color: 'transparent', display: 'block' }}
              />
            </Link>

            <div className="header-center d-none d-xl-block">
              <nav className="box-navigation">
                <ul className="box-nav-menu style-2" style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                  <li className="menu-item has-sub_menu style-2" style={{ position: 'relative' }}>
                    <a className={`item-link ${location.pathname === '/' || location.pathname === '/ai-startup' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('home'); }}>
                      <span>Home</span>
                    </a>
                    <div className="sub-menu" style={{ display: activeDropdown === 'home' ? 'block' : undefined }}>
                      <ul className="sub-menu_list">
                        <li><Link className={`sub-menu_link ${location.pathname === '/' ? 'active' : ''}`} to="/">Ai Agency</Link></li>
                        <li><Link className={`sub-menu_link ${location.pathname === '/ai-startup' ? 'active' : ''}`} to="/ai-startup">Ai Startup</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item style-2">
                    <Link className={`item-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li className="menu-item style-2">
                    <Link className={`item-link ${location.pathname === '/service' ? 'active' : ''}`} to="/service">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li className="menu-item style-2">
                    <Link className={`item-link ${location.pathname === '/service' ? 'active' : ''}`} to="/service">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li className="menu-item has-sub_menu style-2" style={{ position: 'relative' }}>
                    <a className={`item-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('blog'); }}>
                      <span>Blog</span>
                    </a>
                    <div className="sub-menu" style={{ display: activeDropdown === 'blog' ? 'block' : undefined }}>
                      <ul className="sub-menu_list">
                        <li><Link className="sub-menu_link" to="/blog-standard">Blog Standard</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item has-sub_menu style-2" style={{ position: 'relative' }}>
                    <a className="item-link" href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('pages'); }}>
                      <span>Pages</span>
                    </a>
                    <div className="sub-menu" style={{ display: activeDropdown === 'pages' ? 'block' : undefined }}>
                      <ul className="sub-menu_list">
                        <li><Link className="sub-menu_link" to="/team">Team</Link></li>
                        <li><Link className="sub-menu_link" to="/faq">FAQ</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item style-2">
                    <Link className={`item-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right d-flex align-items-center g-20">
              <div className="d-sm-block d-none">
                <a href="https://wa.me/8801908272574" target="_blank" rel="noopener noreferrer" className="tf-btn style-gradient-2" style={{ textDecoration: 'none' }}>
                  <span className="text-btn">Book a Call</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-right"></i>
                  </span>
                </a>
              </div>
              <div className="d-xl-none">
                <button
                  type="button"
                  className="mobile-button"
                  aria-label="Open menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    cursor: 'pointer',
                    padding: '8px'
                  }}
                >
                  <span style={{ width: '24px', height: '2px', backgroundColor: '#fff', display: 'block' }}></span>
                  <span style={{ width: '24px', height: '2px', backgroundColor: '#fff', display: 'block' }}></span>
                  <span style={{ width: '24px', height: '2px', backgroundColor: '#fff', display: 'block' }}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-nav-content"
            style={{
              width: '300px',
              height: '100%',
              backgroundColor: '#131313',
              padding: '30px 24px',
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <img alt="Webpulse Automation" width="200" height="38" style={{ height: "38px", width: "auto" }} src="/assets/images/logo/logo-white.svg" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '28px',
                  cursor: 'pointer'
                }}
              >
                &times;
              </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  Home (AI Agency)
                </Link>
              </li>
              <li>
                <Link to="/ai-startup" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  AI Startup
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  Services
                </Link>
              </li>

              <li>
                <Link to="/team" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog-standard" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#fc7028', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <Link
                to="/contact"
                className="tf-btn style-gradient-2"
                style={{ display: 'block', textAlign: 'center', width: '100%', textDecoration: 'none' }}
              >
                <span className="text-btn">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
