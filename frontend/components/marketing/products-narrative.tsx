"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

export interface ProductData {
  id: "manual" | "automated" | "pack";
  name: string;
  badge: string;
  tagline: string;
  narrative: string;
  throughput?: {
    rate: string;
    shiftTotal: string;
    details: string;
  };
  measures?: Array<{
    name: string;
    desc: string;
    inDevelopment?: boolean;
  }>;
  specs: string[];
  whyItWins: string[];
  bestFor: string[];
  ctaText: string;
  ctaHeadline: string;
}

export const productsData: ProductData[] = [
  {
    id: "manual",
    name: "BatteryScope-C Manual",
    badge: "Bench-Deployable, Operator-Led",
    tagline: "Battery characteristics in seconds. Not hours.",
    narrative:
      "BatteryScope-C Manual is a fully manufactured, production-ready diagnostic unit: not a prototype. Out of the box, it supports profiling and grading of LG 21700 cylindrical cells, and can be rapidly trained for 18650 and other cylindrical and prismatic formats. An operator places the cell, initiates the scan, and receives a complete diagnostic profile in seconds: no cycling, no prolonged setup, no specialist knowledge required.",
    throughput: {
      rate: "6 cells / minute",
      shiftTotal: "1,920 cells",
      details: "per 8-hour shift (21700 cells)",
    },
    measures: [
      {
        name: "State of Health (SoH)",
        desc: "Accurate SoH reading without charge-discharge cycling",
      },
      {
        name: "Self-discharge rate",
        desc: "Predicted without waiting days for results",
      },
      {
        name: "Internal resistance (DCIR)",
        desc: "Measured non-invasively in seconds",
      },
      {
        name: "Remaining Useful Life (RUL)",
        desc: "Predictive RUL for second-life decisions and grading",
      },
      {
        name: "Cell health signatures",
        desc: "A proprietary spectroscopic fingerprint unique to BatteryScope",
        inDevelopment: true,
      },
      {
        name: "Micro-fault detection",
        desc: "Detects internal short circuits and electrolyte leaks",
        inDevelopment: true,
      },
    ],
    specs: [
      "Six-channel testing: 6 cylindrical cells tested simultaneously without compromising accuracy",
      "75-second full battery report: complete, comprehensive analysis per run",
      "Adjustable cell compatibility: flexible clamping fits a wide range of cylindrical cell sizes",
      "Fully connected: Wi-Fi, Ethernet, and HDMI ready for seamless integration",
      "Integrated reporting software: auto-captures test values and generates reports instantly",
      "Durable protective casing: portable 'pickup-and-go' mobility for stable testing anywhere",
      "HaaS delivery available: low upfront cost options",
    ],
    whyItWins: [
      "Fully manufactured, customer-deployable today: not a lab prototype",
      "No cycling required, so zero cycle life is lost to testing",
      "Low barrier to entry for teams not yet ready to automate",
    ],
    bestFor: [
      "Lab testing",
      "QC sampling",
      "Second-life battery evaluation",
      "Pilot-scale grading",
    ],
    ctaHeadline: "For labs & QA teams",
    ctaText: "See what's really inside your cells in 75 seconds. Book a BatteryScope-C Manual demo.",
  },
  {
    id: "automated",
    name: "BatteryScope-C Automated",
    badge: "Inline, Hands-Free, High Throughput",
    tagline: "Everything the manual unit does: now at production speed.",
    narrative:
      "BatteryScope-C Automated takes everything that makes the manual unit powerful and integrates it directly into your production or testing line. Cells are characterized continuously and autonomously: no operator intervention, no bottlenecks. Every cell is profiled, graded, and logged as it moves through the process, turning cell characterization from a cost centre into a quality advantage.",
    throughput: {
      rate: "6 cells / minute inline",
      shiftTotal: "2,880 cells",
      details: "per 8-hour shift (21700 cells)",
    },
    measures: [
      {
        name: "State of Health (SoH)",
        desc: "Autonomous inline SoH profiling for every cell",
      },
      {
        name: "Self-discharge rate",
        desc: "Inline predictive self-discharge screening",
      },
      {
        name: "Internal resistance (DCIR)",
        desc: "Non-invasive inline DCIR measurement",
      },
      {
        name: "Remaining Useful Life (RUL)",
        desc: "Inline RUL classification and sorting",
      },
      {
        name: "Cell health signatures",
        desc: "Real-time spectroscopic fingerprints on production lines",
        inDevelopment: true,
      },
      {
        name: "Micro-fault detection",
        desc: "Early fault isolation (internal shorts & electrolyte leaks)",
        inDevelopment: true,
      },
    ],
    specs: [
      "Automated cell input: cells load and feed into the system automatically, eliminating manual handling and operator error",
      "Automated cell testing: fully automated test cycles run without intervention, delivering consistent, repeatable results at speed",
      "Smart sorting channels: automatically sorts cells across multiple channels by State of Health and capacity range",
      "6-channel testing carried forward from manual unit, at inline speed",
      "All BatteryScope-C Manual diagnostics retained: full suite of testing, reporting, and connectivity features",
      "Mobile: designed to move with your operation, portable and ready to deploy",
    ],
    whyItWins: [
      "Purpose-built for pack manufacturers and gigafactories running large-scale operations",
      "Fully autonomous: no per-cell operator required, removing labor from the loop",
      "Continuous grading, logging, and fault isolation: built-in traceability for every single cell",
    ],
    bestFor: [
      "Cell pack manufacturers",
      "Gigafactory sorting lines",
      "High-volume second-life cell recyclers",
      "Contract manufacturers",
    ],
    ctaHeadline: "For manufacturers scaling volume",
    ctaText: "Ready to move from 1,920 to 2,880+ cells a shift? Talk to us about BatteryScope-C Automated.",
  },
  {
    id: "pack",
    name: "BatteryScope-P",
    badge: "Pack-Level Intelligence",
    tagline: "Pack-level insight, built on cell-level truth.",
    narrative:
      "A pack is more than the sum of its cells: BatteryScope-P is where cell-level diagnostics scale up into pack-level intelligence. Built on the same non-invasive spectroscopy, digital twin, AI, and machine learning foundation as the rest of the BatteryScope family, BatteryScope-P is designed to help you understand how cell-to-cell variability translates into real pack performance, life, and safety.",
    specs: [
      "Pack-level spectroscopic intelligence scaling cell diagnostics to multi-module packs",
      "Physics-aware digital twin modelling mapping cell-to-cell variability to total pack life",
      "Safety risk identification & early fault cascade warnings for module/pack assemblies",
      "Seamless integration with fleet management systems and EV/ESS diagnostics",
    ],
    whyItWins: [
      "Extends non-invasive accuracy from individual cells to complete pack architectures",
      "Prevents premature pack retirement by pin-pointing specific degrading cell groups",
      "Supports warranty claim verification and second-life pack grading",
    ],
    bestFor: [
      "Pack integrators",
      "EV and ESS OEMs",
      "Fleet operators",
    ],
    ctaHeadline: "For pack integrators & OEMs",
    ctaText: "From cell health to pack performance: ask us about BatteryScope-P.",
  },
];

export function ProductsNarrative({ initialSelected = "manual" }: { initialSelected?: "manual" | "automated" | "pack" }) {
  const [selectedId, setSelectedId] = useState<"manual" | "automated" | "pack">(initialSelected);
  const activeProduct = productsData.find((p) => p.id === selectedId) || productsData[0];

  return (
    <div className="w-full">
      {/* Product Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {productsData.map((prod) => {
          const isActive = prod.id === selectedId;
          return (
            <button
              key={prod.id}
              onClick={() => setSelectedId(prod.id)}
              className={`group flex items-center gap-3.5 rounded-2xl border px-6 py-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-[var(--signal)] bg-[var(--signal)]/10 shadow-xl shadow-[var(--signal)]/10"
                  : "border-[var(--graphite)]/30 bg-white/5 hover:border-[var(--signal)]/40 hover:bg-white/10"
              }`}
            >
              <div
                className={`flex h-3.5 w-3.5 rounded-full transition-all ${
                  isActive ? "bg-[var(--signal)] ring-4 ring-[var(--signal)]/20" : "bg-[var(--graphite)]"
                }`}
              />
              <div>
                <div className={`font-display text-lg font-bold transition-colors ${isActive ? "text-[var(--paper)]" : "text-[var(--graphite-on-dark)] group-hover:text-[var(--paper)]"}`}>
                  {prod.name}
                </div>
                <div className="font-mono text-xs font-semibold text-[var(--copper)]">{prod.badge}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Product Detail Panel */}
      <AnimatedSection key={activeProduct.id} className="mt-12" animation="fade-up">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
          {/* Header & Tagline */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-[var(--signal)]/15 px-4 py-1.5 font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
                {activeProduct.badge}
              </span>
              <h3 className="mt-4 font-display text-4xl font-bold text-[var(--paper)] sm:text-5xl">
                {activeProduct.name}
              </h3>
              <p className="mt-3 font-display text-xl italic text-[var(--copper)]">
                &ldquo;{activeProduct.tagline}&rdquo;
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[var(--graphite-on-dark)]">
                {activeProduct.narrative}
              </p>
            </div>

            {/* Throughput Card if available */}
            {activeProduct.throughput && (
              <div className="shrink-0 rounded-2xl border border-[var(--signal)]/30 bg-[var(--ink)] p-8 text-center shadow-2xl shadow-black/50 lg:w-80">
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--signal)] uppercase">Indicative Throughput</span>
                <div className="mt-3 font-mono text-4xl font-bold text-[var(--signal)] sm:text-5xl">
                  {activeProduct.throughput.shiftTotal}
                </div>
                <div className="mt-2 font-mono text-base font-semibold text-[var(--paper)]">
                  {activeProduct.throughput.rate}
                </div>
                <div className="mt-1 text-sm text-[var(--graphite-on-dark)]">
                  {activeProduct.throughput.details}
                </div>
              </div>
            )}
          </div>

          {/* Diagnostics Section (What it measures) */}
          {activeProduct.measures && activeProduct.measures.length > 0 && (
            <div className="mt-12 border-t border-white/10 pt-10">
              <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                What it measures: a complete health signature in seconds
              </h4>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {activeProduct.measures.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-2xl border border-white/10 bg-[var(--ink)]/90 p-5 transition-all duration-300 hover:border-[var(--signal)]/40 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-base font-bold text-[var(--paper)]">{m.name}</span>
                      {m.inDevelopment && (
                        <span className="rounded bg-[var(--copper)]/20 px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--copper)]">
                          *In development
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specs & Features Grid */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Key Specs & Features
            </h4>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {activeProduct.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3.5 rounded-xl bg-black/30 p-4 text-sm leading-relaxed text-[var(--paper)]">
                  <span className="mt-0.5 font-bold text-[var(--signal)]">✔</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Wins & Best For */}
          <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                Why it wins customers
              </h4>
              <ul className="mt-4 space-y-3">
                {activeProduct.whyItWins.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--graphite-on-dark)]">
                    <span
                      className="star-glow-pulse text-[var(--copper)] text-base select-none shrink-0"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                Best For
              </h4>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {activeProduct.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs font-semibold text-[var(--paper)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product CTA Strip */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--signal)]/30 bg-gradient-to-r from-[var(--signal)]/15 to-transparent p-8 sm:flex-row">
            <div>
              <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase">{activeProduct.ctaHeadline}</span>
              <p className="mt-2 font-display text-lg text-[var(--paper)] font-semibold">
                {activeProduct.ctaText}
              </p>
            </div>
            <SendButton href="/contact" label="Get Started" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
