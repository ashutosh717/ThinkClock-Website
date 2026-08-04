"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { VideoStage } from "./video-stage";

export const STAGES = [
  {
    id: 1,
    src: "/Frames/Frame/1/1.mp4",
    overlayText: "Signal Captured.",
  },
  {
    id: 2,
    src: "/Frames/Frame/2/2.mp4",
    overlayText: "Deep Analysis Unlocked.",
  },
  {
    id: 3,
    src: "/Frames/Frame/3/3.mp4",
    overlayText: "Actionable Intelligence.",
  },
];

export type SequenceState = "idle" | "loading" | "playing";

export function VideoSequenceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  const [isOpen, setIsOpen] = useState(false);
  const [sequenceState, setSequenceState] = useState<SequenceState>("idle");
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [blurAmount, setBlurAmount] = useState(0);

  const openScrollY = useRef(0);
  const isTransitioningRef = useRef(false);

  // Handle open toggle
  const handleOpen = () => {
    openScrollY.current = window.scrollY;
    setIsOpen(true);
    if (sequenceState === "idle") {
      setSequenceState("loading");
    }
  };

  // Auto-close on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        const scrolledDistance = Math.abs(window.scrollY - openScrollY.current);
        if (scrolledDistance > 150) {
          setIsOpen(false);
        }
      }

      // Calculate dynamic blur effect when video is open
      if (isInView && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const winH = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = winH / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter) / winH;

        if (distanceFromCenter < 0.2) {
          setBlurAmount(0);
        } else {
          const calculatedBlur = Math.min(16, Math.max(0, (distanceFromCenter - 0.2) * 28));
          setBlurAmount(calculatedBlur);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, isInView]);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Handle stage loaded event
  const handleStageLoaded = useCallback(() => {
    setLoadedCount((prev) => prev + 1);
  }, []);

  // Transition from loading to playing
  useEffect(() => {
    if (isOpen && sequenceState === "loading" && loadedCount >= 1) {
      queueMicrotask(() => {
        setSequenceState("playing");
        setCurrentStageIdx(0);
      });
    }
  }, [isOpen, sequenceState, loadedCount]);

  // Timeout fallback for loading
  useEffect(() => {
    if (isOpen && sequenceState === "loading") {
      const timer = setTimeout(() => {
        setSequenceState("playing");
        setCurrentStageIdx(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, sequenceState]);

  // Advance to next stage in infinite loop (1 -> 2 -> 3 -> 1 ...)
  const handleStageFinished = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setCurrentStageIdx((prev) => (prev + 1) % STAGES.length);

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 1500);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Cinematic Battery Diagnostics Sequence"
      className="relative w-full overflow-hidden bg-[var(--ink)] pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      {/* Dynamic Background Glowing Aura Field (No Border, Ambient Backlight Glow) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[45rem] w-[80vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--signal)]/30 via-cyan-400/20 to-[var(--copper)]/30 blur-[140px] animate-pulse" />
      </div>

      {/* Increased Container Size (max-w-[1400px] for full-fledged wide video canvas) */}
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Collapsed State: Glowing Trigger Button explaining what is inside */
            <motion.div
              key="trigger-button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <button
                onClick={handleOpen}
                className="group relative inline-flex items-center gap-4 rounded-full border border-[var(--signal)]/60 bg-gradient-to-r from-[var(--signal)]/15 via-cyan-950/40 to-[var(--copper)]/15 px-8 py-4 shadow-[0_0_40px_rgba(92,225,201,0.35)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:border-[var(--signal)] hover:shadow-[0_0_65px_rgba(92,225,201,0.6)] focus:outline-none"
              >
                {/* Glowing Play Icon Badge */}
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--signal)] text-[var(--ink)] shadow-md shadow-[var(--signal)]/40 transition-transform duration-300 group-hover:scale-110">
                  <svg className="ml-0.5 h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                {/* Button Text & Subtitle */}
                <div className="flex flex-col text-left">
                  <span className="font-display text-sm font-semibold tracking-wide text-white group-hover:text-[var(--signal)] sm:text-base">
                    Explore Diagnostic Telemetry Sequence
                  </span>
                  <span className="font-mono text-xs text-[var(--graphite-on-dark)]">
                    EIS, Acoustic &amp; RF Multi-Modal Characterization
                  </span>
                </div>

                {/* External indicator icon */}
                <svg
                  className="h-4 w-4 text-[var(--signal)] transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ) : (
            /* Expanded State: Full-Fledged Wide Video Canvas (No Border, Ambient Backlight Aura) */
            <motion.div
              key="video-canvas"
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Borderless Video Canvas with Ambient Background Aura Shadow */}
              <div
                className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_0_80px_20px_rgba(92,225,201,0.25)] transition-all duration-400 ease-out"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  transition: "filter 0.4s ease-out",
                }}
              >
                {prefersReducedMotion ? (
                  <div className="flex h-full w-full items-center justify-center p-6 text-center">
                    <h2 className="font-display text-3xl font-bold text-white/90">
                      Actionable Intelligence in Battery Diagnostics.
                    </h2>
                  </div>
                ) : (
                  <>
                    {/* Loading State Spinner */}
                    <AnimatePresence>
                      {sequenceState === "loading" && (
                        <motion.div
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
                        >
                          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--signal)] border-t-transparent" />
                          <p className="mt-3 font-mono text-[11px] tracking-widest text-[var(--graphite-on-dark)] uppercase">
                            Preparing sequence...
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Render Individual Stage Wrappers */}
                    {STAGES.map((stage, idx) => (
                      <VideoStage
                        key={stage.id}
                        stageId={stage.id}
                        src={stage.src}
                        overlayText={stage.overlayText}
                        isActive={sequenceState === "playing" && currentStageIdx === idx}
                        onFinished={handleStageFinished}
                        onLoaded={handleStageLoaded}
                        prefersReducedMotion={prefersReducedMotion}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
