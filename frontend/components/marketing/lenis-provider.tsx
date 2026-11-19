"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, useScroll } from "framer-motion";

const smoothScrollPaths = new Set(["/", "/about", "/technology", "/products", "/contact", "/faq"]);

export function LenisProvider() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const isMarketingPage = smoothScrollPaths.has(pathname);

  useEffect(() => {
    if (!isMarketingPage || reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      autoRaf: true,
    });

    lenisRef.current = lenis;

    // Observe body size changes (image loading, dynamic content rendering)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    const onResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isMarketingPage, reducedMotion]);

  useEffect(() => {
    if (!isMarketingPage) return;
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true });

    const timer1 = setTimeout(() => lenis.resize(), 50);
    const timer2 = setTimeout(() => lenis.resize(), 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isMarketingPage, pathname]);

  if (!isMarketingPage) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-[var(--signal)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
