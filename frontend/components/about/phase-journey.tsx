"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import phase1Img from "@/images/Phase1.png";
import phase2Img from "@/images/Phase2.png";
import phase3Img from "@/images/Phase3.png";
import cylindricalImg from "@/images/Home_page/cylinderical.png";
import prismaticImg from "@/images/Home_page/Battery Testing Lab Machine Cutout.png";
import phase4Img from "@/images/Phase4.png";

interface Phase {
  id: number;
  phaseLabel: string;
  title: string;
  date: string;
  tagline: string;
  image: StaticImageData;
  pinColorDark: string;
  pinColorLight: string;
  accentGlow: string;
  details: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    phaseLabel: "Phase 1 :",
    title: "Proof of Concept",
    date: "June 2025",
    tagline: "Handmade lab unit validating core non-invasive spectroscopic technology.",
    image: phase1Img,
    pinColorDark: "#facc15",
    pinColorLight: "#d97706",
    accentGlow: "rgba(217, 119, 6, 0.35)",
    details: [
      "Built and tested entirely in-house as a proof-of-concept platform",
      "Validated core non-invasive spectroscopy for battery health assessment",
      "Successfully showcased at the India Energy Storage Week (IESW) 2025",
    ],
  },
  {
    id: 2,
    phaseLabel: "Phase 2 :",
    title: "Portable Prototype",
    date: "November 2025",
    tagline: "Refined portable system for field demonstrations and early customer engagements.",
    image: phase2Img,
    pinColorDark: "#5ce1c9",
    pinColorLight: "#0d9488",
    accentGlow: "rgba(13, 148, 136, 0.35)",
    details: [
      "Compact, field-deployable form factor for on-site demonstrations",
      "Enabled early customer feedback and real-world validation",
      "Successfully showcased at the Green Energy India Expo 2025 in Bengaluru",
    ],
  },
  {
    id: 3,
    phaseLabel: "Phase 3 :",
    title: "Manufactured Unit",
    date: "April 2026",
    tagline: "Production-ready system supporting 21700 cells with live partner validation.",
    image: phase3Img,
    pinColorDark: "#c97a4a",
    pinColorLight: "#c2410c",
    accentGlow: "rgba(194, 65, 12, 0.35)",
    details: [
      "Production-ready, customer-deployable diagnostic system",
      "Currently supports 21700 cells with ongoing format expansion",
      "Undergoing live validation with battery recycling and pack manufacturing partners in Bengaluru",
    ],
  },
  {
    id: 4,
    phaseLabel: "Phase 4 :",
    title: "BatteryScope-C Cylindrical",
    date: "May 2026",
    tagline: "Bench-deployable multi-channel diagnostic unit profiling 21700 & 18650 cells in 75 seconds.",
    image: cylindricalImg,
    pinColorDark: "#f97316",
    pinColorLight: "#ea580c",
    accentGlow: "rgba(234, 88, 12, 0.35)",
    details: [
      "Operator-led multi-channel unit for lab characterization & incoming QC",
      "Non-invasive spectroscopy delivering comprehensive health signatures with zero cycle loss",
      "High-throughput capacity: profiles up to 1,920 cells per 8-hour shift",
    ],
  },
  {
    id: 5,
    phaseLabel: "Phase 5 :",
    title: "BatteryScope-C Prismatic",
    date: "September 2026",
    tagline: "High-capacity non-invasive diagnostic intelligence for large-format prismatic cells and pack lines.",
    image: prismaticImg,
    pinColorDark: "#38bdf8",
    pinColorLight: "#0284c7",
    accentGlow: "rgba(2, 132, 199, 0.35)",
    details: [
      "Engineered for prismatic form-factors, module assemblies, and pack line diagnostics",
      "Rapid impedance and degradation mapping without destructive teardown or cycle loss",
      "Direct MES and PLC connectivity for automated quality gates and pack triage",
    ],
  },
  {
    id: 6,
    phaseLabel: "Phase 6 :",
    title: "BatteryScope-C Automated",
    date: "Target: Q4 2026",
    tagline: "Fully automated, inline, hands-free diagnostics integrated into production workflows.",
    image: phase4Img,
    pinColorDark: "#ff3a5c",
    pinColorLight: "#e11d48",
    accentGlow: "rgba(225, 29, 72, 0.35)",
    details: [
      "Next milestone: a fully automated inline diagnostic system for gigafactories",
      "Hands-free operation integrated directly into battery production lines with 2,880+ cells/shift",
      "Autonomous cell feeding, automated multi-channel testing, and robotic bin sorting",
    ],
  },
];

function PhaseItem({
  phase,
  index,
  reducedMotion,
  pathLength,
  threshold,
  setPinRef,
}: {
  phase: Phase;
  index: number;
  reducedMotion: boolean;
  pathLength: MotionValue<number>;
  threshold: number;
  setPinRef: (el: HTMLDivElement | null) => void;
}) {
  const isLeft = index % 2 === 0;
  const entranceX = isLeft ? -32 : 32;

  // Back orange glow triggers smoothly precisely as the moving line reaches this pin's top edge
  const startGlow = Math.max(0, threshold - 0.012);

  const glowOpacity = useTransform(
    pathLength,
    [startGlow, threshold, threshold + 0.02],
    [0, 1, 1]
  );

  const glowScale = useTransform(
    pathLength,
    [startGlow, threshold, threshold + 0.02],
    [0.75, 1.25, 1.1]
  );

  const pinShadow = useTransform(
    pathLength,
    [startGlow, threshold],
    [
      "0 0 10px rgba(0, 0, 0, 0.4)",
      "0 0 28px 8px rgba(249, 115, 22, 0.9), 0 0 50px 16px rgba(255, 90, 31, 0.55), 0 0 75px 22px rgba(234, 88, 12, 0.35)",
    ]
  );

  return (
    <div className="relative">
      {/* Center Number Pin */}
      <motion.div
        ref={setPinRef}
        className="absolute top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2"
        initial={reducedMotion ? false : { scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="group relative flex items-center justify-center">
          {/* Back Orange Glow Aura when moving line reaches this pin */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#f97316] blur-xl"
            style={{
              opacity: reducedMotion ? 1 : glowOpacity,
              scale: reducedMotion ? 1.1 : glowScale,
            }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2.5 rounded-full bg-[#f97316] blur-md"
            style={{
              opacity: reducedMotion ? 1 : glowOpacity,
            }}
          />

          <motion.div
            className="relative flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-white font-mono text-xs sm:text-sm md:text-base font-extrabold text-white transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: phase.pinColorLight,
              boxShadow: reducedMotion
                ? "0 0 28px 8px rgba(249, 115, 22, 0.9), 0 0 50px 16px rgba(255, 90, 31, 0.55)"
                : pinShadow,
            }}
          >
            0{phase.id}
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 md:gap-14">
        {/* Phase Image Card */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: entranceX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full ${isLeft ? "order-1 pr-5 sm:pr-8 md:pr-12 lg:pr-16" : "order-2 pl-5 sm:pl-8 md:pl-12 lg:pl-16"}`}
        >
          <div className="tc-card tc-card-media group relative mx-auto flex min-h-[140px] sm:min-h-[240px] md:min-h-[300px] w-full max-w-md items-center justify-center p-2 sm:p-4">
            <Image
              src={phase.image}
              alt={`${phase.phaseLabel} ${phase.title}`}
              className="h-auto max-h-[160px] sm:max-h-[260px] md:max-h-[340px] w-auto max-w-full rounded-[10px] object-contain transition-all duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 45vw, 450px"
            />
          </div>
        </motion.div>

        {/* Phase Content */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -entranceX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full ${isLeft ? "order-2 pl-5 sm:pl-8 md:pl-12 lg:pl-16" : "order-1 pr-5 sm:pr-8 md:pr-12 lg:pr-16"}`}
        >
          <div className="space-y-1.5 sm:space-y-3 py-1 sm:py-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="inline-block rounded-full px-2 sm:px-3.5 py-0.5 sm:py-1 font-mono text-[9px] sm:text-xs font-bold tracking-wider uppercase border"
                style={{
                  backgroundColor: `${phase.pinColorLight}18`,
                  borderColor: `${phase.pinColorLight}40`,
                  color: phase.pinColorLight,
                }}
              >
                {phase.date}
              </span>
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <div className="font-display text-sm sm:text-2xl md:text-3xl font-bold text-[var(--paper)]">
                {phase.phaseLabel}
              </div>
              <h3 className="font-display text-sm sm:text-2xl md:text-3xl font-bold leading-tight text-[var(--paper)]">
                {phase.title}
              </h3>
            </div>

            <p className="text-[11px] sm:text-sm leading-snug sm:leading-relaxed text-[var(--graphite-on-dark)]">
              {phase.tagline}
            </p>

            <ul className="space-y-1.5 sm:space-y-3 pt-1.5 sm:pt-3">
              {phase.details.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-[var(--paper)]">
                  <span
                    className="mt-1 sm:mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full"
                    style={{
                      backgroundColor: phase.pinColorLight,
                      boxShadow: `0 0 6px ${phase.pinColorLight}`,
                    }}
                  />
                  <span className="leading-snug">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function PhaseJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  // Baseline calibrated thresholds for 6 phases
  const [thresholds, setThresholds] = useState<number[]>([
    0.08,
    0.25,
    0.42,
    0.58,
    0.75,
    0.92,
  ]);

  useEffect(() => {
    const updateThresholds = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      if (containerHeight <= 0) return;

      // The line runs from y=40 to y=1560 in an 800x1600 viewBox
      const lineStart = containerHeight * 0.025; // 40 / 1600
      const lineEnd = containerHeight * 0.975;   // 1560 / 1600
      const lineLength = lineEnd - lineStart;
      if (lineLength <= 0) return;

      const measured = pinElementsRef.current.map((el, idx) => {
        if (!el) {
          return (idx + 0.5) / phases.length;
        }
        const pinRect = el.getBoundingClientRect();
        const pinCenterY = pinRect.top + pinRect.height / 2 - containerTop;
        const ratio = (pinCenterY - lineStart) / lineLength;
        return Math.max(0.01, Math.min(0.99, ratio));
      });

      setThresholds((prev) => {
        const hasChanged =
          prev.length !== measured.length ||
          measured.some((val, i) => Math.abs(val - prev[i]) > 0.005);
        return hasChanged ? measured : prev;
      });
    };

    updateThresholds();

    // ResizeObserver recalculates dynamically as images load or layout shifts
    const ro = new ResizeObserver(() => {
      updateThresholds();
    });

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    window.addEventListener("resize", updateThresholds);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateThresholds);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-transparent text-[var(--paper)]"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="relative mt-4">
          <div className="pointer-events-none absolute inset-0 flex h-full w-full justify-center">
            <svg
              className="h-full w-full max-w-4xl"
              viewBox="0 0 800 1600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M 400,40 L 400,1560"
                stroke="rgba(91,102,99,0.25)"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <motion.path
                d="M 400,40 L 400,1560"
                stroke="url(#roadGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength: reducedMotion ? 1 : pathLength }}
              />
              <motion.path
                d="M 400,40 L 400,1560"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: reducedMotion ? 1 : pathLength }}
              />

              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff7a45" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <PhaseItem
                key={phase.id}
                phase={phase}
                index={index}
                reducedMotion={Boolean(reducedMotion)}
                pathLength={pathLength}
                threshold={thresholds[index] ?? (index + 0.5) / phases.length}
                setPinRef={(el) => {
                  pinElementsRef.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
