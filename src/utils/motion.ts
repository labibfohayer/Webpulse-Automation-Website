import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

export function initSiteAnimations(): () => void {
  // Clean up previous triggers
  ScrollTrigger.getAll().forEach(t => t.kill());

  // 1. GSAP Title Animations (Non-destructive to DOM layout)
  const titleElements = document.querySelectorAll<HTMLElement>('.title-animation:not(.view-counter)');
  titleElements.forEach(el => {
    // If it's the big gradient text container
    const bigGrad = el.querySelector<HTMLElement>('.text-big-gradient');
    if (bigGrad) {
      gsap.set(el, { perspective: 200 });
      gsap.from(bigGrad, {
        opacity: 0,
        rotationX: -40,
        transformOrigin: 'top center -50px',
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'opacity',
      });
      return;
    }

    // For other headings and sub-titles:
    if (el.closest('.wg-hero-area')) {
      // Elements in the hero area stay 100% visible and crisp immediately
      return;
    }

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all',
    });
  });

  // 2. GSAP Paragraph Animations (.text-animation p)
  const textElements = document.querySelectorAll<HTMLElement>('.text-animation p');
  textElements.forEach(el => {
    if (el.closest('.wg-hero-area')) return;
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all',
    });
  });

  // 3. Card Clip-path Entrance Animations (.tf-animate-1, 2, 3, 4)
  const animatedSet = new WeakSet<Element>();
  const triggerAnim = (el: HTMLElement) => {
    if (animatedSet.has(el)) return;
    animatedSet.add(el);
    const delay = parseFloat(el.dataset.delay ?? '0') || 0;
    window.setTimeout(() => {
      el.classList.add('active-animate');
    }, delay * 1000);
  };

  const animObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerAnim(entry.target as HTMLElement);
          animObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.02, rootMargin: '400px 0px 400px 0px' }
  );

  const animCards = Array.from(
    document.querySelectorAll<HTMLElement>('.tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4')
  );
  animCards.forEach(el => animObserver.observe(el));

  const checkViewportAnims = () => {
    const vh = window.innerHeight;
    animCards.forEach(el => {
      if (animatedSet.has(el)) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < 0.9 * vh && rect.bottom > 0) {
        triggerAnim(el);
      }
    });
  };
  checkViewportAnims();
  window.addEventListener('scroll', checkViewportAnims, { passive: true });
  window.addEventListener('resize', checkViewportAnims);

  // 4. WOW Delay Elements (.wow)
  const wowObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        if (el.dataset.wowDelay) {
          el.style.animationDelay = el.dataset.wowDelay;
        }
        el.classList.add('animated');
        wowObserver.unobserve(el);
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll<HTMLElement>('.wow').forEach(el => wowObserver.observe(el));

  // 5. High-Precision Number Counters (.info-card_value.number, .counter-item .number, .view-counter .number)
  const getTargetNumber = (el: HTMLElement): number => {
    const dataNum = el.getAttribute('data-number') || el.dataset.number;
    if (dataNum && parseInt(dataNum, 10) > 0) {
      return parseInt(dataNum, 10);
    }
    const parent = el.closest('.counter-item, .wg-fun-fact, .team-card');
    const label = (parent ? parent.textContent || '' : '').toLowerCase();
    if (label.includes('project complete') || label.includes('projects completed')) return 20;
    if (label.includes('happy global clients')) return 99;
    if (label.includes('team member')) return 30;
    if (label.includes('automated workflow') || label.includes('workflow') || label.includes('award')) return 50;
    if (label.includes('professional team')) return 100;

    const raw = el.textContent?.trim() || '';
    const m = raw.match(/\d+/);
    return m ? parseInt(m[0], 10) : 0;
  };

  const animateCounter = (el: HTMLElement) => {
    if (el.dataset.counterStarted === 'true') return;
    el.dataset.counterStarted = 'true';

    const targetNum = getTargetNumber(el);
    if (targetNum <= 0) return;

    el.textContent = '0';
    const duration = 1400;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * targetNum);
      el.textContent = current.toString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = targetNum.toString();
      }
    };
    requestAnimationFrame(updateCount);
  };

  const counterElements = Array.from(
    document.querySelectorAll<HTMLElement>('.info-card_value.number, .counter-item .number, .view-counter .number')
  );

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '100px 0px 100px 0px' }
  );

  counterElements.forEach(el => {
    counterObserver.observe(el);
  });

  const checkViewportCounters = () => {
    const vh = window.innerHeight;
    counterElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        animateCounter(el);
      }
    });
  };
  checkViewportCounters();
  window.addEventListener('scroll', checkViewportCounters, { passive: true });

  // 6. Horizontal Process Accordion (.horizontal-accordion)
  const processItems = document.querySelectorAll<HTMLElement>('.accordion-horizontal-item');
  const processHandlers: Array<{ el: HTMLElement; fn: () => void }> = [];
  processItems.forEach(item => {
    const clickHandler = () => {
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-horizontal-item').forEach(sibling => {
          sibling.classList.remove('active');
        });
      }
      item.classList.add('active');
    };
    item.addEventListener('click', clickHandler);
    processHandlers.push({ el: item, fn: clickHandler });
  });

  // 7. FAQ Accordion (.wg-according, .according-item)
  const faqHeaders = document.querySelectorAll<HTMLElement>('.according-item .title-according');
  const faqHandlers: Array<{ el: HTMLElement; fn: (e: Event) => void }> = [];
  faqHeaders.forEach(hdr => {
    const faqClick = (e: Event) => {
      e.preventDefault();
      const parentItem = hdr.closest('.according-item');
      if (!parentItem) return;
      const content = parentItem.querySelector('.according-content');
      const isExpanded = hdr.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        hdr.classList.add('collapsed');
        hdr.setAttribute('aria-expanded', 'false');
        content?.classList.remove('show');
      } else {
        const container = parentItem.closest('.wg-according');
        if (container) {
          container.querySelectorAll('.according-item .title-according').forEach(otherHdr => {
            otherHdr.classList.add('collapsed');
            otherHdr.setAttribute('aria-expanded', 'false');
          });
          container.querySelectorAll('.according-content').forEach(otherContent => {
            otherContent.classList.remove('show');
          });
        }
        hdr.classList.remove('collapsed');
        hdr.setAttribute('aria-expanded', 'true');
        content?.classList.add('show');
      }
    };
    hdr.addEventListener('click', faqClick);
    faqHandlers.push({ el: hdr, fn: faqClick });
  });

  // 8. Pricing Switcher (.pricing-switch)
  const pricingSwitches = document.querySelectorAll<HTMLElement>('.pricing-switch');
  const switchHandlers: Array<{ el: HTMLElement; fn: () => void }> = [];
  pricingSwitches.forEach(pSwitch => {
    const tabs = pSwitch.querySelectorAll<HTMLElement>('.pricing-tab');
    const toggle = pSwitch.querySelector<HTMLElement>('.pricing-toggle');
    const section = pSwitch.closest('section') || pSwitch.parentElement;
    if (!section) return;

    let isYearly = false;

    const setYearly = (yearly: boolean) => {
      isYearly = yearly;
      if (tabs.length >= 2) {
        tabs[0].classList.toggle('active', !yearly);
        tabs[1].classList.toggle('active', yearly);
      }
      if (toggle) {
        toggle.classList.toggle('active', yearly);
      }
      const contents = section.querySelectorAll<HTMLElement>('.pricing-content');
      if (contents.length >= 2) {
        contents[0].classList.toggle('active', !yearly);
        contents[1].classList.toggle('active', yearly);
      }
    };

    if (tabs.length >= 2) {
      const clickMonthly = () => setYearly(false);
      const clickYearly = () => setYearly(true);
      tabs[0].addEventListener('click', clickMonthly);
      tabs[1].addEventListener('click', clickYearly);
      switchHandlers.push({ el: tabs[0], fn: clickMonthly });
      switchHandlers.push({ el: tabs[1], fn: clickYearly });
    }
    if (toggle) {
      const toggleClick = () => setYearly(!isYearly);
      toggle.addEventListener('click', toggleClick);
      switchHandlers.push({ el: toggle, fn: toggleClick });
    }
  });

  // 9. Precision Swiper Carousel Initializer (Specific to Component Types)
  const swiperInstances: Swiper[] = [];
  try {
    const swiperEls = document.querySelectorAll<HTMLElement>('.tf-swiper, .swiper');
    swiperEls.forEach(el => {
      const parent = el.parentElement || el;
      const section = el.closest('section') || parent;
      const paginationEl = parent.querySelector<HTMLElement>('.tf-sw-pagination, .swiper-pagination') ||
                           section.querySelector<HTMLElement>('.tf-sw-pagination, .swiper-pagination');
      const prevBtn = section.querySelector<HTMLElement>('.nav-prev-swiper');
      const nextBtn = section.querySelector<HTMLElement>('.nav-next-swiper');

      // Testimonial Swipers (Always strictly 1 card at all resolutions!)
      if (el.classList.contains('sw-testimonials') || el.classList.contains('sw-testimonials-3')) {
        const swiper = new Swiper(el, {
          modules: [Pagination, Autoplay, Navigation],
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: prevBtn && nextBtn ? {
            prevEl: prevBtn,
            nextEl: nextBtn,
          } : undefined,
          pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
          } : undefined,
        });
        swiperInstances.push(swiper);
        return;
      }

      // Project Swiper
      if (el.classList.contains('sw-project')) {
        const swiper = new Swiper(el, {
          modules: [Pagination, Autoplay, Navigation],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
          } : undefined,
          navigation: prevBtn && nextBtn ? {
            prevEl: prevBtn,
            nextEl: nextBtn,
          } : undefined,
          breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 15 },
            1200: { slidesPerView: 2, spaceBetween: 30 },
          },
        });
        swiperInstances.push(swiper);
        return;
      }

      // Features Swiper
      if (el.classList.contains('sw-features')) {
        const swiper = new Swiper(el, {
          modules: [Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
          } : undefined,
          breakpoints: {
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1200: { slidesPerView: 4, spaceBetween: 24 },
          },
        });
        swiperInstances.push(swiper);
        return;
      }

      // Blog Swiper
      if (el.classList.contains('sw-blog') || el.classList.contains('sw-blog-2')) {
        const swiper = new Swiper(el, {
          modules: [Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 15,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
          } : undefined,
          breakpoints: {
            575: { slidesPerView: 1.7, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          },
        });
        swiperInstances.push(swiper);
        return;
      }

      // Default fallback swiper
      const swiper = new Swiper(el, {
        modules: [Pagination, Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: paginationEl ? {
          el: paginationEl,
          clickable: true,
        } : undefined,
        navigation: prevBtn && nextBtn ? {
          prevEl: prevBtn,
          nextEl: nextBtn,
        } : undefined,
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 24 },
        },
      });
      swiperInstances.push(swiper);
    });
  } catch (err) {
    console.warn('Swiper init error:', err);
  }

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);

  return () => {
    animObserver.disconnect();
    window.removeEventListener('scroll', checkViewportAnims);
    window.removeEventListener('resize', checkViewportAnims);
    wowObserver.disconnect();
    counterObserver.disconnect();
    window.removeEventListener('scroll', checkViewportCounters);
    processHandlers.forEach(h => h.el.removeEventListener('click', h.fn));
    faqHandlers.forEach(h => h.el.removeEventListener('click', h.fn));
    switchHandlers.forEach(h => h.el.removeEventListener('click', h.fn));
    swiperInstances.forEach(s => {
      try {
        s.destroy(true, true);
      } catch (e) {}
    });
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}
