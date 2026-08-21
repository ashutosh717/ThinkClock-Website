"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import phase1Img from "@/images/Phase1.png";
import phase2Img from "@/images/Phase2.png";
import phase3Img from "@/images/Phase3.png";
import phase4Img from "@/images/Phase4.png";

interface Phase {
  id: number;
  phaseLabel: string;
  title: string;
  date: string;
  tagline: string;
  image: StaticImageData;
  pinColor: string;
  accentGlow: string;
  threshold: number;
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
    pinColor: "#ffe53b",
    accentGlow: "rgba(255, 229, 59, 0.4)",
    threshold: 0.12,
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
    pinColor: "#5ce1c9",
    accentGlow: "rgba(92, 225, 201, 0.4)",
    threshold: 0.38,
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
    pinColor: "#c97a4a",
    accentGlow: "rgba(201, 122, 74, 0.4)",
    threshold: 0.62,
    details: [
      "Production-ready, customer-deployable diagnostic system",
      "Currently supports 21700 cells with ongoing format expansion",
      "Undergoing live validation with battery recycling and pack manufacturing partners in Bengaluru",
    ],
  },
  {
    id: 4,
    phaseLabel: "Phase 4 :",
    title: "Automated System",
    date: "Target: Q3 2026",
    tagline: "Fully automated, inline, hands-free diagnostics integrated into production workflows.",
    image: phase4Img,
    pinColor: "#ff3a5c",
    accentGlow: "rgba(255, 58, 92, 0.4)",
    threshold: 0.86,
    details: [
      "Next milestone: a fully automated inline diagnostic system",
      "Hands-free operation integrated directly into battery production lines",
      "What is showcased today is the evolving concept as we progress toward full industrial design",
    ],
  },
];

function PhaseItem({
  phase,
  index,
  scrollYProgress,
}: {
  phase: Phase;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isLeft = index % 2 === 0;

  // Bind opacity, scale, and vertical position directly to scroll progress
  const start = Math.max(0, phase.threshold - 0.1);
  const end = phase.threshold;

  const cardOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [start, end], [0.88, 1]);
  const cardY = useTransform(scrollYProgress, [start, end], [50, 0]);
  const pinScale = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <div className="relative">
      {/* Scroll-tied Milestone Badge on the Center Road Line */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
        style={{
          scale: pinScale,
          opacity: cardOpacity,
        }}
      >
        <div className="group flex items-center justify-center">
          <div
            className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white font-mono text-base font-extrabold text-white shadow-2xl transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: phase.pinColor,
              boxShadow: `0 0 25px ${phase.accentGlow}, inset 0 2px 4px rgba(255,255,255,0.7)`,
            }}
          >
            0{phase.id}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        {/* Image Card - Scroll Tied */}
        <motion.div
          style={{
            opacity: cardOpacity,
            scale: cardScale,
            y: cardY,
          }}
          className={`w-full ${isLeft ? "md:order-1 md:pr-12 lg:pr-16" : "md:order-2 md:pl-12 lg:pl-16"}`}
        >
          <div
            className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-2.5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: `0 20px 40px -15px ${phase.accentGlow}`,
            }}
          >
            <Image
              src={phase.image}
              alt={`${phase.phaseLabel} ${phase.title}`}
              className="h-auto w-full rounded-xl object-cover transition-all duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 450px"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15 ring-inset" />
          </div>
        </motion.div>

        {/* Text Description Card - Scroll Tied */}
        <motion.div
          style={{
            opacity: cardOpacity,
            scale: cardScale,
            y: cardY,
          }}
          className={`w-full ${isLeft ? "md:order-2 md:pl-12 lg:pl-16" : "md:order-1 md:pr-12 lg:pr-16"}`}
        >
          <div
            className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-2xl shadow-xl transition-all duration-500 hover:border-white/30"
            style={{
              borderLeftColor: phase.pinColor,
              borderLeftWidth: "4px",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-block rounded-full px-3.5 py-1 font-mono text-xs font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: `${phase.pinColor}22`,
                  color: phase.pinColor,
                }}
              >
                {phase.date}
              </span>
            </div>

            <div className="space-y-1">
              <div className="font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
                {phase.phaseLabel}
              </div>
              <h3 className="font-display text-3xl leading-tight text-[var(--paper)] sm:text-4xl">
                {phase.title}
              </h3>
            </div>

            <p className="text-base leading-relaxed text-[var(--graphite-on-dark)]">
              {phase.tagline}
            </p>

            <ul className="space-y-3 pt-3">
              {phase.details.map((d, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[var(--paper)]">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full shadow-sm"
                    style={{
                      backgroundColor: phase.pinColor,
                      boxShadow: `0 0 8px ${phase.pinColor}`,
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
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 text-[var(--paper)] sm:px-6"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[var(--signal)]/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[var(--copper)]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--signal)] uppercase">
            Development Roadmap
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
            Our Development Journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--graphite-on-dark)]">
            Four phases of engineering building toward a complete non-invasive battery diagnostic platform.
          </p>
        </div>

        {/* Winding Road Section */}
        <div className="relative mt-20">
          {/* Central Animated Road Track (Desktop & Tablet) */}
          <div className="pointer-events-none absolute inset-0 hidden h-full w-full justify-center md:flex">
            <svg
              className="h-full w-full max-w-4xl"
              viewBox="0 0 800 1600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Dark Backing Glow Path */}
              <path
                d="M 400,40 L 400,1560"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="16"
                strokeLinecap="round"
              />
              {/* Outer Glowing Track */}
              <motion.path
                d="M 400,40 L 400,1560"
                stroke="url(#roadGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              {/* Inner Laser Core */}
              <motion.path
                d="M 400,40 L 400,1560"
                stroke="#5ce1c9"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />

              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffe53b" />
                  <stop offset="35%" stopColor="#5ce1c9" />
                  <stop offset="70%" stopColor="#c97a4a" />
                  <stop offset="100%" stopColor="#ff3a5c" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Phase Cards Grid */}
          <div className="space-y-24 md:space-y-36">
            {phases.map((phase, index) => (
              <PhaseItem
                key={phase.id}
                phase={phase}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
