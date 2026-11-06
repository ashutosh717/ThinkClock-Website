"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CurtainRevealIntro } from "@/components/marketing/curtain-reveal-intro";

interface HeroVideoProps {
  videoSrc?: string;
  className?: string;
}

export function HeroVideo({
  videoSrc = "/videos/THINKCLOCKv2.mp4",
  className = "",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [introComplete, setIntroComplete] = useState(false);

  // Keep video strictly muted and ready on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
  }, []);

  // Auto-pause video when scrolling down and out of view to save power/GPU
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            if (!video.paused) {
              video.pause();
            }
          } else {
            if (video.paused) {
              video.muted = true;
              video.play().catch(() => {});
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden bg-[#101010] ${className}`}
    >
      {/* ── 1. Full-Screen Cinematic Background Video (Always Muted) ── */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none transform-gpu will-change-transform"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* ── 2. Cinematic Orange Curtain Reveal Intro ── */}
      <CurtainRevealIntro
        onRevealStart={() => {
          const video = videoRef.current;
          if (video && video.paused) {
            video.muted = true;
            video.play().catch(() => {});
          }
        }}
        onRevealComplete={() => {
          setIntroComplete(true);
        }}
      />

      {/* ── 3. Subtle Ambient Gradients for header contrast & seamless bottom blend ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />

      {/* ── 4. Final Hero Section — Revealed with Subtle Upward Motion ── */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 inset-x-0 mx-auto z-20 flex flex-col items-center text-center px-4 max-w-4xl pointer-events-auto">
        <AnimatePresence>
          {introComplete ? (
            <motion.div
              key="hero-content-animated"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center w-full"
            >
              {/* Category Pill Tag */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-3.5 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff9f1c] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#ff9f1c] uppercase">
                  NON-INVASIVE BATTERY HEALTH ANALYTICS
                </span>
              </div>

              {/* Core Throughput Metric Grid */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12">
                {/* Metric 1 - Manual Unit */}
                <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                    1,920 Cells
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-white/80 mt-0.5 tracking-wide">
                    Per 8-hr Shift (Manual Unit)
                  </span>
                </div>

                {/* Divider */}
                <div className="w-[1px] h-10 sm:h-12 md:h-14 bg-gradient-to-b from-transparent via-[#ff6a00]/50 to-transparent shrink-0" />

                {/* Metric 2 - Automated Unit */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                    2,880 Cells
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-white/80 mt-0.5 tracking-wide">
                    Per 8-hr Shift (Automated Unit)
                  </span>
                </div>
              </div>

              {/* Tagline Subtext */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-sans text-white/85 max-w-lg tracking-wide drop-shadow">
                75-second lab-grade cell characterization —{" "}
                <span className="font-semibold text-[#ff9f1c]">zero cycle damage</span>
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-black font-sans font-semibold text-sm sm:text-base px-8 py-3.5 sm:px-10 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,106,0,0.25)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff5722] hover:to-[#ff9f1c] hover:text-black hover:shadow-[0_0_35px_rgba(255,106,0,0.6)] hover:scale-105 active:scale-95 cursor-pointer select-none"
                >
                  <span className="font-semibold text-black">Explore Products</span>
                  <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="/technology"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-sans font-medium text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 transition-all duration-300 hover:border-[#ff6a00] hover:bg-black/70 hover:text-[#ff9f1c] hover:scale-105 active:scale-95 cursor-pointer select-none"
                >
                  <span>Our Technology</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            // Initial placeholder during curtain reveal to preserve layout
            <div className="h-48 w-full pointer-events-none opacity-0" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
