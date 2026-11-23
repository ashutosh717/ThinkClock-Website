"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useShouldPlayHomeCurtain } from "@/components/providers/home-curtain-provider";
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
  const shouldPlayCurtain = useShouldPlayHomeCurtain();
  const [introComplete, setIntroComplete] = useState(!shouldPlayCurtain);
  const reducedMotion = useReducedMotion();

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
      className={`home-video-hero relative z-20 aspect-video max-h-[calc(100svh_-_2.25rem)] w-full overflow-visible bg-[#101010] ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Stretch the full frame to fill the hero without cropping. */}
        <motion.video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="pointer-events-none absolute inset-0 h-full w-full object-fill object-center select-none"
        />

        {/* ── 2. Cinematic Orange Curtain Reveal Intro ── */}
        {shouldPlayCurtain && (
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
        )}

      </div>

      {/* ── 4. Final Hero Section — Revealed with Subtle Upward Motion ── */}
      <h1 className="sr-only">ThinkClock Battery Labs</h1>
      <div className="pointer-events-none absolute left-1/2 top-full z-30 w-max -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence>
          {introComplete ? (
            <motion.div
              key="hero-content-animated"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-auto flex flex-col items-center"
            >
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : 0.12 }}
              >
                <Link
                  href="/products"
                  className="tc-button group inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-black font-sans font-semibold text-sm sm:text-base px-8 py-3.5 sm:px-10 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,106,0,0.25)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff5722] hover:to-[#ff9f1c] hover:text-black hover:shadow-[0_0_35px_rgba(255,106,0,0.6)] hover:scale-105 active:scale-95 cursor-pointer select-none"
                >
                  <span className="font-semibold text-black">Explore Products</span>
                  <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            // Initial placeholder during curtain reveal to preserve layout
            <div className="h-12 w-[202px] opacity-0 sm:h-14" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
