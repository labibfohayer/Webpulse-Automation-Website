import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { initLenis, getLenis } from './utils/lenis';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AiStartupPage } from './pages/AiStartupPage';
import { Project1Page } from './pages/Project1Page';
import { Project2Page } from './pages/Project2Page';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { BlogDetailsPage } from './pages/BlogDetailsPage';
import { FloatingWidgets } from './components/FloatingWidgets';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Initialize Lenis 120fps continuous physics smooth scrolling
  useEffect(() => {
    initLenis();
  }, []);

  // 2. Scroll to top on every route change
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  // 3. Global click delegator for internal links & smooth anchor jumps
  useEffect(() => {
    const handleGlobalLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // If anchor link on the same page (e.g. #pricing, #about)
      if (href && href.startsWith('#') && href.length > 1) {
        const anchorTarget = document.querySelector(href);
        if (anchorTarget) {
          e.preventDefault();
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(anchorTarget as HTMLElement, { offset: -80, duration: 1.2 });
          } else {
            anchorTarget.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      }

      // If internal route link and not an anchor jump
      if (href && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/#')) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener('click', handleGlobalLinkClick);
    return () => document.removeEventListener('click', handleGlobalLinkClick);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/index-dark" element={<HomePage />} />
      <Route path="/ai-startup" element={<AiStartupPage />} />
      <Route path="/ai-startup-dark" element={<AiStartupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicesPage />} />
      <Route path="/service-details/:slug" element={<ServiceDetailsPage />} />
      <Route path="/service-details" element={<ServiceDetailsPage />} />
      <Route path="/pricing" element={<Navigate to="/service" replace />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/blog-standard" element={<BlogPage />} />
      <Route path="/blog-details/:slug" element={<BlogDetailsPage />} />
      <Route path="/blog-details" element={<BlogDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/project-1" element={<Project1Page />} />
      <Route path="/project-2" element={<Project2Page />} />
      {/* Catch-all fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
      <FloatingWidgets />
    </Router>
  );
};

export default App;
