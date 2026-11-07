import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

/**
 * Initializes Lenis 120fps physics smooth scrolling engine.
 * Fully synchronized with GSAP ScrollTrigger and high-refresh display tickers.
 */
export function initLenis(): Lenis {
  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    // Hyper-smooth continuous easing curve for luxury agency experience
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.8,
    infinite: false,
    syncTouch: false,
  });

  window.lenis = lenisInstance;

  // Sync Lenis scroll events directly with GSAP ScrollTrigger
  lenisInstance.on('scroll', ScrollTrigger.update);

  // Link Lenis to GSAP Ticker for sub-frame 120Hz/60Hz synchronization
  tickerCallback = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
    delete window.lenis;
  }
}
