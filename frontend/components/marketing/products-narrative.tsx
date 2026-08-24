"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SendButton } from "@/components/ui/send-button";
import { AnimatedSection } from "@/components/marketing/animated-section";

interface Measure {
  name: string;
  desc: string;
  inDevelopment?: boolean;
}

interface Product {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  narrative: string;
  throughput: {
    rate: string;
    shiftTotal: string;
    details: string;
  } | null;
  measures: Measure[];
  specs: string[];
  whyItWins: string[];
  bestFor: string[];
  ctaHeadline: string;
  ctaText: string;
}

const products: Product[] = [
  {
    id: "manual",
    name: "BatteryScope-C Manual",
    badge: "Bench-Deployable, Operator-Led",
    tagline: "Battery characteristics in seconds. Not hours.",
    narrative:
      "BatteryScope-C Manual is a bench-deployable diagnostic unit built for testing labs, QA teams, and development environments. It characterizes cylindrical cells in seconds using non-invasive multi-physics spectroscopy, replacing hours of charge-discharge cycling with an instant, comprehensive health signature.",
    throughput: {
      rate: "4 cells / minute",
      shiftTotal: "1,920 cells",
      details: "per 8-hour shift (manual operation, 21700 cells)",
    },
    measures: [
      {
        name: "State of Health (SoH)",
        desc: "Accurate SoH read in seconds without full charge-discharge cycles",
      },
      {
        name: "Self-discharge rate",
        desc: "Predicted self-discharge behavior without days of open-circuit storage",
      },
      {
        name: "Internal resistance (DCIR)",
        desc: "True internal resistance measured non-invasively",
      },
      {
        name: "Remaining Useful Life (RUL)",
        desc: "Predictive lifetime projection from a single diagnostic sweep",
      },
      {
        name: "Cell health signatures",
        desc: "Complete multi-modal spectroscopic fingerprint of cell condition",
        inDevelopment: true,
      },
      {
        name: "Micro-fault detection",
        desc: "Early detection of internal short circuits and electrolyte leaks",
        inDevelopment: true,
      },
    ],
    specs: [
      "Supported cell format: LG 21700 supported today (rapidly adaptable for 18650 and other cylindrical formats)",
      "Non-destructive testing: zero cycle loss, no degradation during characterisation",
      "Six-channel simultaneous testing: test up to 6 cells concurrently",
      "Fast report generation: full diagnostic report in 75 seconds",
      "Operator-friendly UI: simple load-and-test workflow with real-time pass/fail indicators",
      "Connectivity: export data to CSV, connect to MES/QMS via API",
      "Dimensions: benchtop footprint, easily moved between workstations",
      "Power: standard 230V AC supply",
    ],
    whyItWins: [
      "Replaces hours of slow cycler testing with seconds-fast multi-physics diagnostics",
      "No cell damage: tested cells go directly into production or shipping, zero loss",
      "Catches degradation and micro-faults that standard OCV/IR checks completely miss",
      "Low capital cost compared to large multi-channel cycler banks",
    ],
    bestFor: [
      "Battery pack QA / incoming inspection",
      "R&D and characterisation labs",
      "Second-life battery grading",
      "Warranty claim verification",
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
        desc: "Automated rejection of cells with internal micro-anomalies",
        inDevelopment: true,
      },
    ],
    specs: [
      "Supported cell format: LG 21700 (expandable to other cylindrical formats on request)",
      "Continuous inline testing: automated cell feed and extraction with zero operator touch",
      "Multi-channel sorting: cells are automatically binned by grade, SoH, or custom criteria",
      "Real-time MES / SCADA integration: live telemetry streamed to factory control systems",
      "Non-destructive: every tested cell is ready for pack assembly with zero capacity loss",
      "Scalable architecture: multi-unit modular arrays for higher-throughput Gigafactory lines",
      "Integrated calibration: self-verifying sensors ensure consistent measurement accuracy",
    ],
    whyItWins: [
      "100% cell coverage: test every cell on the line, not just statistical samples",
      "Zero-latency sorting: instant classification without off-line holding areas",
      "Eliminates operator variability: consistent, repeatable characterisation 24/7",
      "Accelerates pack assembly: pre-graded, matched cells enter modules immediately",
    ],
    bestFor: [
      "Gigafactories & cell manufacturers",
      "High-volume battery pack assemblers",
      "Large-scale second-life repurposing facilities",
      "Automated battery recycling lines",
    ],
    ctaHeadline: "For manufacturing & high-throughput operations",
    ctaText: "Ready to move from 1,920 to 2,880+ cells a shift? Talk to us about BatteryScope-C Automated.",
  },
  {
    id: "pack",
    name: "BatteryScope-P",
    badge: "Pack-Level Intelligence, Built on Cell-Level Truth",
    tagline: "Pack-level insight, built on cell-level truth.",
    narrative:
      "BatteryScope-P extends non-invasive diagnostics beyond individual cells to complete modules and battery packs. By combining multi-physics spectroscopy with AI-driven digital twin models, BatteryScope-P evaluates pack-level health, identifies weak or degrading cells within an assembled pack, and predicts remaining pack life: without taking the pack apart.",
    throughput: null,
    measures: [
      {
        name: "Pack-level SoH",
        desc: "Overall pack health assessment without teardown or extensive discharge testing",
      },
      {
        name: "Cell-to-cell variation mapping",
        desc: "Identifies outlier cells that limit total pack performance",
      },
      {
        name: "Module-level impedance profiling",
        desc: "Characterizes interconnects, busbars, and cell group resistances",
      },
      {
        name: "Thermal & electrochemical anomaly detection",
        desc: "Early warning for hot spots and localized accelerated aging",
      },
      {
        name: "Pack degradation prediction",
        desc: "AI digital twin model predicting remaining pack life under load",
      },
    ],
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
      "Pack Integrators",
      "EV and ESS OEMs",
      "Fleet operators",
      "Second-life pack aggregators",
    ],
    ctaHeadline: "For pack builders & integrators",
    ctaText: "Bring cell-level certainty to your pack designs. Contact us to explore BatteryScope-P.",
  },
];

function ProductsNarrativeContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab =
    tabParam === "manual" || tabParam === "automated" || tabParam === "pack"
      ? tabParam
      : "manual";

  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const activeTab = selectedTab ?? initialTab;
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div id="product-detail" className="w-full scroll-mt-28">
      {/* Product Selector Tabs */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {products.map((prod) => {
          const isActive = prod.id === activeTab;
          return (
            <button
              key={prod.id}
              onClick={() => setSelectedTab(prod.id)}
              className={`group flex items-center gap-3 rounded-[10px] border p-4 text-left transition-all duration-300 ${
                isActive
                  ? "border-[var(--signal)] bg-[var(--signal)]/10 shadow-lg shadow-[var(--signal)]/10"
                  : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--signal)]/40"
              }`}
            >
              <div
                className={`flex h-3 w-3 rounded-full transition-all ${
                  isActive ? "bg-[var(--signal)] ring-4 ring-[var(--signal)]/20" : "bg-[var(--graphite)]"
                }`}
              />
              <div>
                <div className={`font-display text-base font-bold transition-colors ${isActive ? "text-[var(--paper)]" : "text-[var(--graphite-on-dark)] group-hover:text-[var(--paper)]"}`}>
                  {prod.name}
                </div>
                <div className="font-mono text-xs font-semibold text-[var(--copper)]">{prod.badge}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Product Detail Panel with granular step-by-step cascades */}
      <div key={activeProduct.id} className="mt-8 sm:mt-10">
        <div className="rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 shadow-2xl">
          
          {/* 1. Header & Tagline & Throughput */}
          <AnimatedSection animation="fade-up" className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-block rounded-[6px] border border-[var(--signal)]/30 bg-[var(--signal)]/10 px-3 py-1 font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
                {activeProduct.badge}
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
                {activeProduct.name}
              </h3>
              <p className="mt-2 font-display text-lg italic text-[var(--copper)]">
                &ldquo;{activeProduct.tagline}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--graphite-on-dark)] sm:text-base">
                {activeProduct.narrative}
              </p>
            </div>

            {/* Throughput Card if available */}
            {activeProduct.throughput && (
              <div className="shrink-0 rounded-[10px] border border-[var(--signal)]/40 bg-[var(--secondary)] p-6 text-center shadow-xl lg:w-72">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--signal)] uppercase">Indicative Throughput</span>
                <div className="mt-2 font-mono text-3xl font-bold text-[var(--signal)] sm:text-4xl">
                  {activeProduct.throughput.shiftTotal}
                </div>
                <div className="mt-1.5 font-mono text-sm font-semibold text-[var(--paper)]">
                  {activeProduct.throughput.rate}
                </div>
                <div className="mt-1 font-mono text-xs text-[var(--graphite-on-dark)]">
                  {activeProduct.throughput.details}
                </div>
              </div>
            )}
          </AnimatedSection>

          {/* 2. Diagnostics Section (What it measures: one by one cards) */}
          {activeProduct.measures && activeProduct.measures.length > 0 && (
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <AnimatedSection animation="fade-up">
                <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                  What it measures: a complete health signature in seconds
                </h4>
              </AnimatedSection>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeProduct.measures.map((m, i) => (
                  <AnimatedSection
                    key={m.name}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="rounded-[10px] border border-[var(--border)] bg-[var(--secondary)] p-5 shadow-sm transition-all duration-300 hover:border-[var(--signal)]/40"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-bold text-[var(--paper)]">{m.name}</span>
                      {m.inDevelopment && (
                        <span className="rounded-[4px] border border-[var(--copper)]/30 bg-[var(--copper)]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--copper)]">
                          *In development
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--graphite-on-dark)]">{m.desc}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}

          {/* 3. Specs & Features Grid (one by one items) */}
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <AnimatedSection animation="fade-up">
              <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                Key Specs &amp; Features
              </h4>
            </AnimatedSection>

            <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {activeProduct.specs.map((spec, i) => (
                <AnimatedSection
                  key={i}
                  as="div"
                  animation="fade-up"
                  stagger
                  staggerIndex={i}
                  className="flex items-start gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] p-3.5 text-xs leading-relaxed text-[var(--paper)] shadow-sm sm:text-sm"
                >
                  <span className="mt-0.5 font-bold text-[var(--signal)] shrink-0">✔</span>
                  <span>{spec}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* 4. Why It Wins & Best For */}
          <div className="mt-8 grid gap-8 border-t border-[var(--border)] pt-6 lg:grid-cols-2">
            <AnimatedSection animation="fade-up">
              <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                Why it wins customers
              </h4>
              <ul className="mt-4 space-y-2.5">
                {activeProduct.whyItWins.map((item, i) => (
                  <AnimatedSection
                    key={i}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[var(--graphite-on-dark)]"
                  >
                    <span className="text-[var(--copper)] text-sm select-none shrink-0 mt-0.5">✦</span>
                    <span>{item}</span>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                Best For
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProduct.bestFor.map((item, i) => (
                  <AnimatedSection
                    key={item}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="rounded-[6px] border border-[var(--border)] bg-[var(--secondary)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--paper)]"
                  >
                    {item}
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* 5. Product CTA Strip */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[10px] border border-[var(--signal)]/30 bg-[var(--secondary)] p-6 sm:flex-row">
            <div>
              <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase">{activeProduct.ctaHeadline}</span>
              <p className="mt-1.5 font-display text-base text-[var(--paper)] font-semibold">
                {activeProduct.ctaText}
              </p>
            </div>
            <SendButton href="/contact" label="Get Started" />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export function ProductsNarrative() {
  return (
    <Suspense fallback={<div className="min-h-[400px] w-full animate-pulse rounded-[14px] bg-[var(--card)]" />}>
      <ProductsNarrativeContent />
    </Suspense>
  );
}
