"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import thinkclockIcon from "@/images/thinkclock_logo.png";

export interface CurtainRevealIntroProps {
  /** Callback fired when the reveal cascade begins */
  onRevealStart?: () => void;
  /** Callback fired when all panels have finished animating and curtain is removed */
  onRevealComplete?: () => void;
  /** True when the background video has enough data/first frame ready */
  isVideoReady?: boolean;
  /** Force animation to run even if previously viewed in this browser session */
  forcePlay?: boolean;
  /** Optional override for number of panels */
  panelCount?: number;
  /** Additional styling classes */
  className?: string;
}

// Rich sunset-to-near-black architectural gradient palette
// Features Deep Orange (#FF6A00), Burnt Orange (#C94B00), Amber (#FF9F1C), and Near-Black (#101010)
const DESKTOP_PANEL_PRESETS = [
  {
    bg: "linear-gradient(180deg, #101010 0%, #301000 30%, #7A2600 70%, #101010 100%)",
    glow: "rgba(122, 38, 0, 0.25)",
  },
  {
    bg: "linear-gradient(180deg, #101010 0%, #4D1800 28%, #A83800 68%, #140600 100%)",
    glow: "rgba(168, 56, 0, 0.3)",
  },
  {
    bg: "linear-gradient(180deg, #120500 0%, #752500 25%, #C94B00 65%, #1a0800 100%)",
    glow: "rgba(201, 75, 0, 0.35)",
  },
  {
    bg: "linear-gradient(180deg, #140600 0%, #9E3300 22%, #E85700 60%, #FF6A00 82%, #220a00 100%)",
    glow: "rgba(232, 87, 0, 0.4)",
  },
  {
    bg: "linear-gradient(180deg, #170800 0%, #BD4200 20%, #FF6A00 55%, #FF7F0A 80%, #280d00 100%)",
    glow: "rgba(255, 106, 0, 0.45)",
  },
  {
    bg: "linear-gradient(180deg, #170800 0%, #C94B00 20%, #FF7E0C 50%, #FF9F1C 80%, #2c0e00 100%)",
    glow: "rgba(255, 159, 28, 0.45)",
  },
  {
    bg: "linear-gradient(180deg, #150700 0%, #A83800 22%, #EB5B00 58%, #FF8510 82%, #250b00 100%)",
    glow: "rgba(235, 91, 0, 0.4)",
  },
  {
    bg: "linear-gradient(180deg, #130500 0%, #802B00 25%, #C94B00 65%, #1c0800 100%)",
    glow: "rgba(201, 75, 0, 0.35)",
  },
  {
    bg: "linear-gradient(180deg, #101010 0%, #571C00 28%, #9E3500 70%, #150600 100%)",
    glow: "rgba(158, 53, 0, 0.3)",
  },
  {
    bg: "linear-gradient(180deg, #101010 0%, #301000 30%, #6E2200 70%, #101010 100%)",
    glow: "rgba(110, 34, 0, 0.25)",
  },
];

const MOBILE_PANEL_PRESETS = [
  {
    bg: "linear-gradient(180deg, #101010 0%, #381300 25%, #8C2E00 70%, #101010 100%)",
    glow: "rgba(140, 46, 0, 0.3)",
  },
  {
    bg: "linear-gradient(180deg, #120500 0%, #6E2300 22%, #C94B00 65%, #180700 100%)",
    glow: "rgba(201, 75, 0, 0.35)",
  },
  {
    bg: "linear-gradient(180deg, #160700 0%, #B84000 20%, #FF6A00 55%, #FF7F0A 80%, #260c00 100%)",
    glow: "rgba(255, 106, 0, 0.45)",
  },
  {
    bg: "linear-gradient(180deg, #160700 0%, #C94B00 20%, #FF7E0C 50%, #FF9F1C 80%, #280d00 100%)",
    glow: "rgba(255, 159, 28, 0.45)",
  },
  {
    bg: "linear-gradient(180deg, #130500 0%, #802B00 22%, #C94B00 65%, #1c0800 100%)",
    glow: "rgba(201, 75, 0, 0.35)",
  },
  {
    bg: "linear-gradient(180deg, #101010 0%, #381300 25%, #752500 70%, #101010 100%)",
    glow: "rgba(117, 37, 0, 0.3)",
  },
];

const emptySubscribe = () => () => {};
function useMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function usePrefersReducedMotion(): boolean {
  return React.useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return emptySubscribe();
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    () => false
  );
}

function useIsMobile(): boolean {
  return React.useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return emptySubscribe();
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.innerWidth < 768;
    },
    () => false
  );
}

type IntroPhase = "intro" | "covering" | "revealing" | "complete";

export function CurtainRevealIntro({
  onRevealStart,
  onRevealComplete,
  panelCount: customPanelCount,
  className = "",
}: CurtainRevealIntroProps) {
  const mounted = useMounted();
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<IntroPhase>("intro");

  // Keep fresh callback references without re-running animation useEffect
  const onRevealStartRef = useRef(onRevealStart);
  const onRevealCompleteRef = useRef(onRevealComplete);

  useEffect(() => {
    onRevealStartRef.current = onRevealStart;
    onRevealCompleteRef.current = onRevealComplete;
  });

  // Determine panel configuration
  const panels = useMemo(() => {
    if (customPanelCount) {
      const basePresets = isMobile ? MOBILE_PANEL_PRESETS : DESKTOP_PANEL_PRESETS;
      return Array.from({ length: customPanelCount }).map((_, i) => {
        const index = Math.floor((i / customPanelCount) * basePresets.length);
        return basePresets[index] || basePresets[0];
      });
    }
    return isMobile ? MOBILE_PANEL_PRESETS : DESKTOP_PANEL_PRESETS;
  }, [isMobile, customPanelCount]);

  const panelCount = panels.length;

  // Custom luxurious cubic-bezier easing for silky smooth movement
  const easeCurve = [0.76, 0, 0.24, 1] as const;
  const coverStagger = isMobile ? 0.04 : 0.025;
  const coverDuration = 0.45;
  const staggerTime = isMobile ? 0.05 : 0.035;
  const slideDuration = 0.65;

  // Allow clicking anywhere to immediately skip and enter the site
  const handleSkip = () => {
    onRevealStartRef.current?.();
    setPhase("complete");
    onRevealCompleteRef.current?.();
  };

  // Step 1: Text & logo appear on black background for 1.0s
  // Step 2: Curtain panels sweep in one by one from left to cover logo (450ms + stagger)
  // Step 3: Curtain panels cascade open to the right to reveal website
  // Step 4: Complete & unmount cleanly
  useEffect(() => {
    if (!mounted) return;

    if (prefersReducedMotion) {
      const t1 = setTimeout(() => {
        setPhase("revealing");
        onRevealStartRef.current?.();
      }, 800);
      const t2 = setTimeout(() => {
        setPhase("complete");
        onRevealCompleteRef.current?.();
      }, 1500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    // 1) After 1.0s on black background, curtains sweep in to cover logo
    const tCover = setTimeout(() => {
      setPhase("covering");
    }, 1000);

    // 2) At 1.75s, once fully covered, curtains cascade open to reveal the page
    const tReveal = setTimeout(() => {
      setPhase("revealing");
      onRevealStartRef.current?.();
    }, 1750);

    // 3) When all panels have exited to the right, complete & remove overlay
    const revealDurationMs = ((panelCount - 1) * staggerTime + slideDuration) * 1000 + 80;
    const tComplete = setTimeout(() => {
      setPhase("complete");
      onRevealCompleteRef.current?.();
    }, 1750 + revealDurationMs);

    // 4) Fail-safe watchdog: guarantees the site will never hang or block the user
    const tSafety = setTimeout(() => {
      onRevealStartRef.current?.();
      setPhase("complete");
      onRevealCompleteRef.current?.();
    }, 3600);

    return () => {
      clearTimeout(tCover);
      clearTimeout(tReveal);
      clearTimeout(tComplete);
      clearTimeout(tSafety);
    };
  }, [mounted, panelCount, staggerTime, slideDuration, prefersReducedMotion]);

  // If SSR or completed, remove overlay entirely from DOM
  if (!mounted || phase === "complete") {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      onClick={handleSkip}
      className={`fixed inset-0 z-50 overflow-hidden select-none cursor-pointer ${className}`}
    >
      {/* ── 1. Pure Black Background Stage with Centered Logo (Z-index 10) ── */}
      <AnimatePresence>
        {(phase === "intro" || phase === "covering") && (
          <motion.div
            key="black-stage"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center bg-black"
          >
            <motion.div
              className="flex flex-col items-center gap-4 sm:gap-5 max-w-2xl pointer-events-none"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={
                phase === "intro"
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.92, y: -24 }
              }
              transition={
                phase === "intro"
                  ? { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
              }
            >
              {/* Logo with Ambient Warm Glow */}
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#ff5722]/35 via-[#f97316]/45 to-[#f59e0b]/35 blur-2xl opacity-80" />
                <Image
                  src={thinkclockIcon}
                  alt="ThinkClock"
                  className="relative h-16 sm:h-20 md:h-24 w-auto object-contain shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]"
                  priority
                />
              </div>

              {/* Exact Header Banner Typography */}
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                  ThinkClock Battery Labs
                </h1>
                <p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider text-[#ff9f1c] drop-shadow-md">
                  Sensing, Modeling and Analytics
                </p>
              </div>

              {/* Architectural accent separator */}
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent mt-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. Vertical Architectural Curtain Panels (Z-index 20) ── */}
      {/* Positioned on top of black stage/logo. Sweeps in from left, covers logo, then cascades open to right */}
      <div className="relative h-full w-full flex z-20 pointer-events-none">
        {panels.map((panel, i) => {
          return (
            <div
              key={i}
              className="relative h-full overflow-hidden"
              style={{
                // Overlap by 1px to eliminate any sub-pixel gap rendering between panels
                width: `calc(100% / ${panelCount} + 1px)`,
                marginLeft: i === 0 ? "0px" : "-1px",
              }}
            >
              {/* Panel Slat */}
              <motion.div
                className="absolute inset-0 h-full w-full will-change-transform"
                style={{
                  background: panel.bg,
                }}
                initial={{
                  x: "-102%",
                }}
                animate={
                  phase === "intro"
                    ? { x: "-102%" }
                    : phase === "covering"
                    ? { x: "0%" }
                    : { x: "102%" }
                }
                transition={
                  phase === "covering"
                    ? {
                        duration: coverDuration,
                        delay: i * coverStagger,
                        ease: easeCurve,
                      }
                    : phase === "revealing"
                    ? {
                        duration: slideDuration,
                        delay: i * staggerTime,
                        ease: easeCurve,
                      }
                    : { duration: 0 }
                }
              >
                {/* Specular highlight rim on slat edge for 3D architectural depth */}
                <div className="absolute inset-y-0 right-0 w-[1px] bg-white/[0.08]" />
                <div className="absolute inset-y-0 left-0 w-[1px] bg-black/20" />

                {/* Subtle vertical sheen */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)",
                  }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
