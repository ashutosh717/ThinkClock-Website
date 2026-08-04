"use client";

import { AnimatedSection } from "@/components/marketing/animated-section";
import Image from "next/image";

import phase1Img from "@/images/Phase1.png";
import phase2Img from "@/images/Phase2.png";
import phase3Img from "@/images/Phase3.png";
import phase4Img from "@/images/Phase4.png";

const phases = [
  {
    id: 1,
    title: "Phase 1 — Proof of Concept",
    date: "June 2025",
    tagline: "Handmade lab unit validating core non-invasive spectroscopic technology.",
    image: phase1Img,
    details: [
      "Built and tested entirely in-house as a proof-of-concept platform",
      "Validated core non-invasive spectroscopy for battery health assessment",
      'Successfully showcased at the India Energy Storage Week (IESW) 2025',
    ],
  },
  {
    id: 2,
    title: "Phase 2 — Portable Prototype",
    date: "November 2025",
    tagline: "Refined portable system for field demonstrations and early customer engagements.",
    image: phase2Img,
    details: [
      "Compact, field-deployable form factor for on-site demonstrations",
      "Enabled early customer feedback and real-world validation",
      'Successfully showcased at the Green Energy India Expo 2025 in Bengaluru',
    ],
  },
  {
    id: 3,
    title: "Phase 3 — Manufactured Unit",
    date: "April 2026",
    tagline: "Production-ready system supporting 21700 cells with live partner validation.",
    image: phase3Img,
    details: [
      "Production-ready, customer-deployable diagnostic system",
      "Currently supports 21700 cells with ongoing format expansion",
      "Undergoing live validation with battery recycling and pack manufacturing partners in Bengaluru",
    ],
  },
  {
    id: 4,
    title: "Phase 4 — Automated System",
    date: "Target: Q3 2026",
    tagline: "Fully automated, inline, hands-free diagnostics integrated into production workflows.",
    image: phase4Img,
    details: [
      "Next milestone — a fully automated inline diagnostic system",
      "Hands-free operation integrated directly into battery production lines",
      "What is showcased today is the evolving concept as we progress toward full industrial design",
    ],
  },
];

export function PhaseJourney() {
  return (
    <section className="bg-[var(--ink)] px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Our Development Journey</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
            From lab prototype to production-ready.
          </h2>
          <p className="mt-3 text-[var(--graphite-on-dark)]">
            Four phases of engineering — each building on the last — toward a complete non-invasive battery diagnostic platform.
          </p>
        </div>

        <div className="relative mt-20 space-y-28">
          {/* vertical connector line */}
          <div className="pointer-events-none absolute top-6 bottom-6 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[var(--signal)]/40 via-[var(--copper)]/30 to-transparent md:block" />

          {phases.map((phase, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={phase.id} className="relative">
                {/* step number badge */}
                <AnimatedSection
                  animation="scale-in"
                  className="absolute left-1/2 top-4 z-10 hidden -translate-x-1/2 md:flex"
                  delay={i * 100}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--signal)] bg-[var(--ink)] font-mono text-sm font-bold text-[var(--signal)] shadow-lg shadow-[var(--signal)]/20">
                    {phase.id}
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
                  {/* image */}
                  <AnimatedSection
                    animation={isLeft ? "fade-right" : "fade-left"}
                    delay={i * 100}
                    className={`w-full ${isLeft ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[var(--graphite)]/25 bg-black/30 shadow-xl shadow-black/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--signal)]/10">
                      <Image
                        src={phase.image}
                        alt={phase.title}
                        className="h-auto w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 450px"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 ring-inset" />
                    </div>
                  </AnimatedSection>

                  {/* text */}
                  <AnimatedSection
                    animation={isLeft ? "fade-left" : "fade-right"}
                    delay={i * 100 + 100}
                    className={`w-full ${isLeft ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="space-y-4">
                      <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
                        {phase.date}
                      </p>
                      <h2 className="font-display text-3xl leading-tight text-[var(--paper)] sm:text-4xl">
                        {phase.title}
                      </h2>
                      <p className="text-base text-[var(--graphite-on-dark)]">{phase.tagline}</p>
                      <ul className="space-y-2">
                        {phase.details.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[var(--paper)]">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
