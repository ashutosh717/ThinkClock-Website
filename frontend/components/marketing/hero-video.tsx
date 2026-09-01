"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, ArrowRight } from "lucide-react";

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
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure it starts muted for autoplay compliance
    video.muted = true;
    setIsMuted(true);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Autoplay was prevented:", err);
      });
    }
  }, []);

  // Auto-mute audio when scrolling down and video goes out of view
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When less than 15% visible or out of view, automatically mute
          if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
            if (!video.muted) {
              video.muted = true;
              setIsMuted(true);
            }
          }
        });
      },
      {
        threshold: [0, 0.15, 0.5, 1],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      if (video.paused) {
        video.play().catch(() => {});
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden bg-black ${className}`}
    >
      {/* Background Full-Screen Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
      />

      {/* Subtle Ambient Gradients for header contrast & seamless bottom blend */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />

      {/* Top-Right Mute / Unmute Button (Icon-Only) */}
      <div className="absolute top-24 right-5 sm:top-28 sm:right-10 z-30">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          title={isMuted ? "Unmute" : "Mute"}
          className={`group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-300 shadow-2xl cursor-pointer select-none ${
            isMuted
              ? "bg-black/65 text-[var(--paper)] border border-white/20 hover:border-[var(--signal)] hover:bg-black/85 hover:text-[var(--signal)] hover:scale-105"
              : "bg-[var(--signal)] text-[var(--ink)] border border-[var(--signal)] shadow-[0_0_25px_rgba(92,225,201,0.5)] hover:scale-105"
          }`}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 sm:h-6 sm:w-6 text-red-400 group-hover:text-[var(--signal)] transition-colors" />
          ) : (
            <Volume2 className="h-5 w-5 sm:h-6 sm:w-6 !text-black" />
          )}
        </button>
      </div>

      {/* Bottom Center Hero Info & CTA — Exponent Energy Style */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 inset-x-0 mx-auto z-20 flex flex-col items-center text-center px-4 max-w-4xl">
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
          <div className="w-[1px] h-10 sm:h-12 md:h-14 bg-white/30 shrink-0" />

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
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-sans text-white/75 max-w-lg tracking-wide drop-shadow">
          75-second lab-grade cell characterization — zero cycle damage
        </p>

        {/* Explore Products Pill Button */}
        <Link
          href="/products"
          className="group mt-5 sm:mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-white !text-black font-sans font-semibold text-sm sm:text-base px-8 py-3.5 sm:px-10 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:bg-[var(--signal)] hover:!text-black hover:shadow-[0_0_35px_rgba(92,225,201,0.7)] hover:scale-105 active:scale-95 cursor-pointer select-none"
        >
          <span className="font-semibold !text-black">Explore Products</span>
          <ArrowRight className="h-4 w-4 !text-black transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
}
