"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
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
  pinColorDark: string;
  pinColorLight: string;
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
    pinColorDark: "#facc15",
    pinColorLight: "#d97706",
    accentGlow: "rgba(217, 119, 6, 0.35)",
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
    pinColorDark: "#5ce1c9",
    pinColorLight: "#0d9488",
    accentGlow: "rgba(13, 148, 136, 0.35)",
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
    pinColorDark: "#c97a4a",
    pinColorLight: "#c2410c",
    accentGlow: "rgba(194, 65, 12, 0.35)",
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
    pinColorDark: "#ff3a5c",
    pinColorLight: "#e11d48",
    accentGlow: "rgba(225, 29, 72, 0.35)",
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
  reducedMotion,
}: {
  phase: Phase;
  index: number;
  reducedMotion: boolean;
}) {
  const isLeft = index % 2 === 0;
  const entranceX = isLeft ? -32 : 32;

  return (
    <div className="relative">
      {/* Center Number Pin */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
        initial={reducedMotion ? false : { scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="group flex items-center justify-center">
          <div
            className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white font-mono text-base font-extrabold text-white shadow-2xl transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: phase.pinColorLight,
              boxShadow: `0 0 20px ${phase.accentGlow}`,
            }}
          >
            0{phase.id}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
        {/* Phase Image Card */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: entranceX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full ${isLeft ? "md:order-1 md:pr-12 lg:pr-16" : "md:order-2 md:pl-12 lg:pl-16"}`}
        >
          <div className="tc-card tc-card-media group relative mx-auto w-full max-w-md">
            <Image
              src={phase.image}
              alt={`${phase.phaseLabel} ${phase.title}`}
              className="h-auto w-full rounded-[10px] object-cover transition-all duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>
        </motion.div>

        {/* Phase Content Card */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -entranceX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full ${isLeft ? "md:order-2 md:pl-12 lg:pl-16" : "md:order-1 md:pr-12 lg:pr-16"}`}
        >
          <div className="tc-card space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="inline-block rounded-full px-3.5 py-1 font-mono text-xs font-bold tracking-wider uppercase border"
                style={{
                  backgroundColor: `${phase.pinColorLight}18`,
                  borderColor: `${phase.pinColorLight}40`,
                  color: phase.pinColorLight,
                }}
              >
                {phase.date}
              </span>
            </div>

            <div className="space-y-1">
              <div className="font-display text-2xl font-bold text-[var(--paper)] sm:text-3xl">
                {phase.phaseLabel}
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight text-[var(--paper)] sm:text-3xl">
                {phase.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-[var(--graphite-on-dark)]">
              {phase.tagline}
            </p>

            <ul className="space-y-3 pt-3">
              {phase.details.map((d, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--paper)]">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
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
  const reducedMotion = useReducedMotion();

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
          <div className="pointer-events-none absolute inset-0 hidden h-full w-full justify-center md:flex">
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
                stroke="#0d9488"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: reducedMotion ? 1 : pathLength }}
              />

              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="35%" stopColor="#0d9488" />
                  <stop offset="70%" stopColor="#c2410c" />
                  <stop offset="100%" stopColor="#e11d48" />
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
