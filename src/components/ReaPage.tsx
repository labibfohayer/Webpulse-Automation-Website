import React, { useEffect, useRef } from 'react';
import { initSiteAnimations } from '../utils/motion';
import { getLenis } from '../utils/lenis';

interface ReaPageProps {
  html: string;
}

export const ReaPage: React.FC<ReaPageProps> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Preloader fade out
    const preloader = document.querySelector<HTMLElement>('.preload-container');
    if (preloader) {
      const timer = setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 500ms ease';
        setTimeout(() => {
          preloader.style.display = 'none';
          window.dispatchEvent(new Event('resize'));
          window.dispatchEvent(new Event('scroll'));
        }, 500);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [html]);

  useEffect(() => {
    // 2. Header Sticky logic
    const header = document.querySelector<HTMLElement>('.header-fixed');
    const stickyTops = document.querySelectorAll<HTMLElement>('.sticky-top');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollTopBtn = document.getElementById('scroll-top');

      // Scroll to top button visibility
      if (scrollTopBtn) {
        if (scrollY > 300) {
          scrollTopBtn.classList.add('show');
        } else {
          scrollTopBtn.classList.remove('show');
        }
      }

      if (!header) return;
      const headerH = header.offsetHeight || 80;
      if (scrollY >= 250) {
        header.style.top = '0';
        header.classList.add('header-sticky');
        stickyTops.forEach(el => {
          el.style.top = `${15 + headerH}px`;
        });
      } else {
        header.style.top = `-${headerH}px`;
        header.classList.remove('header-sticky');
        stickyTops.forEach(el => {
          el.style.top = '15px';
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll top click (linked to 120fps Lenis smooth scroll)
    const scrollTopBtn = document.getElementById('scroll-top');
    const progressWrap = document.querySelector<HTMLElement>('.progress-wrap');

    const onScrollTop = (e: Event) => {
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', onScrollTop);
    }
    if (progressWrap) {
      progressWrap.addEventListener('click', onScrollTop);
    }

    // 3. Mobile Navigation Menu Toggle
    const mobileBtn = document.querySelector<HTMLElement>('.mobile-button');
    const mobileCanvas = document.querySelector<HTMLElement>('.nav-mb-wrapper, .canvas-nav-mb, .mobile-nav-overlay');
    const closeBtn = document.querySelector<HTMLElement>('.close-nav-mb, .icon-close');

    const toggleMobileMenu = (e: Event) => {
      e.preventDefault();
      if (mobileCanvas) {
        mobileCanvas.classList.toggle('open');
      }
    };

    const closeMobileMenu = (e: Event) => {
      e.preventDefault();
      if (mobileCanvas) {
        mobileCanvas.classList.remove('open');
      }
    };

    if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);

    // 4. Contact Form & Lead Capture Submission Handler
    const contactForm = document.querySelector<HTMLFormElement>('.form-contact');
    const serviceDropdown = document.getElementById('service-select-dropdown');
    const customServiceField = document.getElementById('custom-service-field') as HTMLElement | null;
    const customServiceInput = document.getElementById('custom_service_input') as HTMLInputElement | null;
    const selectedServiceInput = document.getElementById('selected-service-type') as HTMLInputElement | null;

    const onDropdownClick = (e: MouseEvent) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;
      const option = target.closest('.option') as HTMLElement | null;
      if (option && serviceDropdown) {
        const val = option.getAttribute('data-value') || option.textContent || '';
        const currentSpan = serviceDropdown.querySelector('.current');
        if (currentSpan) currentSpan.textContent = option.textContent;

        serviceDropdown.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        if (selectedServiceInput) {
          selectedServiceInput.value = val;
        }

        if (val === 'Other') {
          if (customServiceField) {
            customServiceField.style.display = 'block';
            customServiceInput?.focus();
          }
        } else {
          if (customServiceField) {
            customServiceField.style.display = 'none';
          }
        }
        serviceDropdown.classList.remove('open');
      } else if (serviceDropdown) {
        serviceDropdown.classList.toggle('open');
      }
    };

    const onDocClick = (e: MouseEvent) => {
      if (serviceDropdown && !serviceDropdown.contains(e.target as Node)) {
        serviceDropdown.classList.remove('open');
      }
    };

    if (serviceDropdown) {
      serviceDropdown.addEventListener('click', onDropdownClick);
      document.addEventListener('click', onDocClick);
    }

    const handleContactSubmit = (e: Event) => {
      e.preventDefault();
      if (!contactForm) return;
      const fd = new FormData(contactForm);
      const name = (fd.get('name') as string) || '';
      const email = (fd.get('email') as string) || '';
      const phone = (fd.get('phone') as string) || '';
      const message = (fd.get('message') as string) || (document.getElementById('mess') as HTMLTextAreaElement)?.value || '';

      const serviceType = selectedServiceInput?.value || (fd.get('service_type') as string) || 'Website Automation';
      const customVal = customServiceInput?.value?.trim() || '';
      const finalService = (serviceType === 'Other' && customVal)
        ? `Custom: ${customVal}`
        : (serviceType === 'Other' ? 'Custom Service' : serviceType);

      const waMsg = encodeURIComponent(
        `Hi Webpulse Automation! My name is ${name}. Email: ${email}, Phone: ${phone}. Service: ${finalService}. Inquiry: ${message}`
      );
      const waUrl = `https://wa.me/8801908272574?text=${waMsg}`;

      // Show luxury modal
      const modal = document.createElement('div');
      modal.id = 'webpulse-success-modal';
      modal.innerHTML = `
        <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); z-index: 999999; display: flex; align-items: center; justify-content: center; padding: 20px;">
          <div style="background: #11141c; border: 1px solid rgba(0, 210, 255, 0.4); border-radius: 24px; padding: 36px 30px; max-width: 480px; width: 100%; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(0, 210, 255, 0.2);">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 210, 255, 0.15); border: 2px solid #00d2ff; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 28px; color: #00d2ff;">
              ✓
            </div>
            <h3 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0 0 12px;">Inquiry Dispatched!</h3>
            <p style="color: #b0b8c4; font-size: 14px; line-height: 1.6; margin: 0 0 16px;">
              Thank you <strong style="color: #ffffff;">${name || 'there'}</strong>! Your message for <strong style="color: #00d2ff;">${finalService}</strong> has been routed to our core team (<strong style="color: #00d2ff;">zayanarham07@gmail.com</strong>).
            </p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(90deg, #25D366, #128C7E); color: #ffffff; padding: 13px 20px; border-radius: 12px; font-weight: 700; text-decoration: none; font-size: 14px;">
                💬 Open WhatsApp for Instant 5-Min Reply
              </a>
              <button id="close-webpulse-modal" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #ffffff; padding: 11px 20px; border-radius: 12px; font-weight: 600; cursor: pointer; font-size: 13px;">
                Close Window
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('close-webpulse-modal')?.addEventListener('click', () => {
        modal.remove();
      });

      contactForm.reset();
      if (customServiceField) customServiceField.style.display = 'none';
      if (serviceDropdown) {
        const currentSpan = serviceDropdown.querySelector('.current');
        if (currentSpan) currentSpan.textContent = 'Website Automation';
      }
      if (selectedServiceInput) selectedServiceInput.value = 'Website Automation';
    };

    if (contactForm) {
      contactForm.addEventListener('submit', handleContactSubmit);
    }

    // 5. Footer Newsletter Subscription Handler
    const newsletterForms = document.querySelectorAll<HTMLFormElement>('.form-newsletter');
    const handleNewsletterSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const input = form.querySelector('input[type="email"]') as HTMLInputElement;
      const email = input?.value || '';

      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #11141c;
        border: 1px solid #00d2ff;
        border-radius: 14px;
        padding: 16px 24px;
        color: #ffffff;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        z-index: 999999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(0,210,255,0.3);
        display: flex;
        align-items: center;
        gap: 12px;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      `;
      toast.innerHTML = `
        <span style="font-size: 20px;">✨</span>
        <span>Subscribed <strong>${email}</strong>! Welcome to Webpulse Automation updates.</span>
      `;
      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
      });
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 350);
      }, 4000);
      form.reset();
    };

    newsletterForms.forEach(form => form.addEventListener('submit', handleNewsletterSubmit));

    // 6. Initialize Master Kinetic Motion & Animations
    const cleanupMotion = initSiteAnimations();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTopBtn) scrollTopBtn.removeEventListener('click', onScrollTop);
      if (mobileBtn) mobileBtn.removeEventListener('click', toggleMobileMenu);
      if (closeBtn) closeBtn.removeEventListener('click', closeMobileMenu);
      if (serviceDropdown) serviceDropdown.removeEventListener('click', onDropdownClick);
      document.removeEventListener('click', onDocClick);
      cleanupMotion();
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className="rea-page-container"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
