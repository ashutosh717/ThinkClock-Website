"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import benchtopImg from "@/images/UNITS/Benchtop.png";
import automatedImg from "@/images/UNITS/Automated.jpg";
import { SendButton } from "@/components/ui/send-button";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { Layers, ArrowUpRight } from "lucide-react";

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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {products.map((prod) => {
          const isActive = prod.id === activeTab;
          const badgeDetails =
            prod.id === "manual"
              ? {
                  tag: "BENCHTOP QC",
                  badgeColor: "border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400",
                  metric: "1,920 Cells / Shift",
                  desc: "Operator-led multi-channel unit for lab characterization & incoming QC.",
                }
              : prod.id === "automated"
              ? {
                  tag: "INLINE GIGAFACTORY",
                  badgeColor: "border-amber-500/30 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400",
                  metric: "2,880 Cells / Shift",
                  desc: "Autonomous inline high-throughput testing with automated cell sorting.",
                }
              : {
                  tag: "PACK INTELLIGENCE",
                  badgeColor: "border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400",
                  metric: "Pack-Level Telemetry",
                  desc: "Non-invasive module & pack analytics mapping cell variation to safety.",
                };

          return (
            <button
              key={prod.id}
              onClick={() => setSelectedTab(prod.id)}
              className={`group relative flex flex-col justify-between rounded-[20px] p-6 text-left transition-all duration-300 ${
                isActive
                  ? "border-2 border-[#f97316] bg-[var(--card)] shadow-2xl scale-[1.02] ring-2 ring-[#f97316]/20"
                  : "border border-[var(--border)] bg-[var(--card)] hover:border-[#f97316]/40 hover:-translate-y-1 shadow-lg"
              }`}
            >
              {/* Top Row: Category Tag + Active Badge / Arrow */}
              <div className="flex items-center justify-between w-full">
                <span className={`rounded-full border px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${badgeDetails.badgeColor}`}>
                  {badgeDetails.tag}
                </span>

                {isActive ? (
                  <span className="rounded-full border border-[#f97316]/40 bg-[#f97316]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#ea580c] dark:text-[#fb923c]">
                    ACTIVE
                  </span>
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--graphite)] transition-colors group-hover:border-[#f97316] group-hover:text-[#f97316]">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                )}
              </div>

              {/* Middle: Product Name & Brief Desc */}
              <div className="mt-5">
                <h4 className="font-display text-lg sm:text-xl font-bold text-[var(--paper)] leading-tight">
                  {prod.name}
                </h4>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[var(--graphite-on-dark)]">
                  {badgeDetails.desc}
                </p>
              </div>

              {/* Bottom Row: Highlight Metric */}
              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="inline-block font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                  {badgeDetails.metric}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[var(--graphite)] group-hover:text-[#f97316] transition-colors">
                  {isActive ? "Viewing Specs" : "Select System →"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Product Detail Panel */}
      <div key={activeProduct.id} className="mt-8 sm:mt-10">
        <div className="rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 shadow-2xl">
          
          {/* 1. Header & System Image & Indicative Throughput */}
          <AnimatedSection animation="fade-up" className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className={activeProduct.id !== "pack" ? "max-w-2xl" : "w-full"}>
              <span className="inline-block rounded-full border border-[var(--signal)]/30 bg-[var(--signal)]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
                {activeProduct.badge}
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
                {activeProduct.name}
              </h3>
              <p className="mt-2 inline-block font-display text-lg italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                &ldquo;{activeProduct.tagline}&rdquo;
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">
                {activeProduct.narrative}
              </p>

              {/* Indicative Throughput Box */}
              {activeProduct.throughput && (
                <div className="mt-6 rounded-[20px] border border-[var(--signal)]/30 bg-[var(--secondary)] p-6 sm:p-8 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-[var(--signal)]" />
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--signal)] uppercase">
                      INDICATIVE THROUGHPUT
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-baseline gap-3">
                    <div className="font-mono text-4xl font-extrabold text-[var(--signal)] sm:text-5xl lg:text-6xl tracking-tight">
                      {activeProduct.throughput.shiftTotal}
                    </div>
                    <div className="font-mono text-lg font-bold text-[var(--paper)] sm:text-xl">
                      {activeProduct.throughput.rate}
                    </div>
                  </div>
                  <div className="mt-2 font-mono text-xs sm:text-sm text-[var(--graphite-on-dark)]">
                    {activeProduct.throughput.details}
                  </div>
                </div>
              )}
            </div>

            {/* Hardware Image Showcase - Tight portrait fit with zero empty borders */}
            {activeProduct.id !== "pack" && (
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px] aspect-[3/4] shrink-0 overflow-hidden rounded-[20px] border border-[var(--border)] bg-white dark:bg-[#0d1412] shadow-xl flex flex-col justify-between p-3 group mx-auto lg:mx-0">
                {/* Image Container with tight fit */}
                <div className="relative w-full h-[82%] overflow-hidden rounded-[14px]">
                  <Image
                    src={activeProduct.id === "manual" ? benchtopImg : automatedImg}
                    alt={activeProduct.name}
                    fill
                    sizes="(max-width: 768px) 320px, 360px"
                    className="object-contain p-1 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Grounded Floating Spec Bar */}
                <div className="rounded-[14px] border border-[var(--border)] bg-[var(--secondary)]/90 backdrop-blur-sm px-3.5 py-2.5 flex items-center justify-between shadow-sm">
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[9px] font-bold text-[var(--signal)] uppercase tracking-wider truncate">
                      {activeProduct.id === "manual" ? "6-Channel Chamber" : "Inline Sort Array"}
                    </span>
                    <span className="font-display text-xs font-bold text-[var(--paper)] truncate">
                      {activeProduct.id === "manual" ? "Benchtop Diagnostic Unit" : "Continuous Factory Unit"}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[var(--paper)]">
                    {activeProduct.id === "manual" ? "21700 Ready" : "High Speed"}
                  </span>
                </div>
              </div>
            )}
          </AnimatedSection>

          {/* 2. Diagnostics Section (What it measures) */}
          {activeProduct.measures && activeProduct.measures.length > 0 && (
            <div className="mt-10 border-t border-[var(--border)] pt-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[var(--signal)]" />
                  <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                    WHAT IT MEASURES: A COMPLETE HEALTH SIGNATURE IN SECONDS
                  </h4>
                </div>
              </AnimatedSection>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {activeProduct.measures.map((m, i) => (
                  <AnimatedSection
                    key={m.name}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="rounded-[20px] border border-[var(--border)] bg-[var(--secondary)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--signal)]/40 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm sm:text-base font-bold text-[var(--paper)]">{m.name}</span>
                      {m.inDevelopment && (
                        <span className="rounded-full border border-[var(--copper)]/30 bg-[var(--copper)]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--copper)]">
                          *In dev
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{m.desc}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}

          {/* 3. Specs & Features Grid */}
          <div className="mt-10 border-t border-[var(--border)] pt-8">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[var(--copper)]" />
                <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
                  KEY SPECS &amp; FEATURES
                </h4>
              </div>
            </AnimatedSection>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {activeProduct.specs.map((spec, i) => (
                <AnimatedSection
                  key={i}
                  as="div"
                  animation="fade-up"
                  stagger
                  staggerIndex={i}
                  className="flex items-start gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--secondary)] p-4 text-sm leading-relaxed text-[var(--paper)] shadow-sm"
                >
                  <span className="mt-0.5 font-bold text-[var(--signal)] shrink-0">✔</span>
                  <span>{spec}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* 4. Why It Wins & Best For */}
          <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 lg:grid-cols-2">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[var(--signal)]" />
                <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                  WHY IT WINS CUSTOMERS
                </h4>
              </div>
              <ul className="mt-5 space-y-3">
                {activeProduct.whyItWins.map((item, i) => (
                  <AnimatedSection
                    key={i}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]"
                  >
                    <span className="text-[var(--copper)] text-sm select-none shrink-0 mt-0.5">✦</span>
                    <span>{item}</span>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[var(--signal)]" />
                <h4 className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                  BEST FOR
                </h4>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {activeProduct.bestFor.map((item, i) => (
                  <AnimatedSection
                    key={item}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="rounded-full border border-[var(--border)] bg-[var(--secondary)] px-4 py-1.5 font-mono text-xs font-semibold text-[var(--paper)]"
                  >
                    {item}
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* 5. Product CTA Strip */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[20px] border border-purple-500/25 bg-[var(--secondary)] p-6 sm:p-8 sm:flex-row">
            <div>
              <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase tracking-wider">{activeProduct.ctaHeadline}</span>
              <p className="mt-2 font-display text-base sm:text-lg text-[var(--paper)] font-semibold">
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
    <Suspense fallback={<div className="min-h-[400px] w-full animate-pulse rounded-[20px] bg-[var(--card)]" />}>
      <ProductsNarrativeContent />
    </Suspense>
  );
}
