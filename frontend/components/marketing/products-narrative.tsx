"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import cylindricalImg from "@/images/Home_page/cylinderical.png";
import prismaticImg from "@/images/Home_page/Battery Testing Lab Machine Cutout.png";
import automatedImg from "@/images/UNITS/Automated.jpg";
import { SendButton } from "@/components/ui/send-button";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { ArrowUpRight } from "lucide-react";

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
  image: StaticImageData;
  chamberLabel: string;
  chamberType: string;
  chamberFormat: string;
}

const products: Product[] = [
  {
    id: "cylindrical",
    name: "BatteryScope-C Cylindrical",
    badge: "Bench-Deployable, Operator-Led",
    tagline: "Battery characteristics in seconds. Not hours.",
    narrative:
      "BatteryScope-C Cylindrical is a bench-deployable diagnostic unit built for testing labs, QA teams, and development environments. It characterizes cylindrical cells in seconds using non-invasive multi-physics spectroscopy, replacing hours of charge-discharge cycling with an instant, comprehensive health signature.",
    throughput: {
      rate: "4 cells / minute",
      shiftTotal: "1,920 cells",
      details: "per 8-hour shift (manual operation, 18650 & 21700 cells)",
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
      "Supported cell format: LG 21700 and 18650 supported (rapidly adaptable for all cylindrical formats)",
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
    ctaText: "See what's really inside your cells in 75 seconds. Book a BatteryScope-C Cylindrical demo.",
    image: cylindricalImg,
    chamberLabel: "6-Channel Chamber",
    chamberType: "Benchtop Diagnostic Unit",
    chamberFormat: "21700 / 18650 Ready",
  },
  {
    id: "prismatic",
    name: "BatteryScope-C Prismatic",
    badge: "Prismatic & Pack Diagnostics",
    tagline: "Bigger cells. Bigger answers.",
    narrative:
      "BatteryScope-C Prismatic delivers high-capacity non-invasive diagnostic intelligence for large-format prismatic cells, modules, and pack production lines. Profiling core internal impedance and degradation markers without teardown.",
    throughput: {
      rate: "Line-Speed Profiling",
      shiftTotal: "Continuous Lines",
      details: "Configurable multi-channel contact arrays for high-volume module & pack lines",
    },
    measures: [
      {
        name: "State of Health (SoH)",
        desc: "Direct multi-point SoH inspection on large prismatic form-factors",
      },
      {
        name: "Internal resistance (DCIR & AC-IR)",
        desc: "Ultra-precise non-invasive impedance signature across prismatic foil layers",
      },
      {
        name: "Module & Pack Telemetry",
        desc: "Detect cell-to-cell variance across interconnected battery strings",
      },
      {
        name: "Thermal & Electrochemical Mapping",
        desc: "Identify localized hot-spots and contact degradation without teardown",
      },
      {
        name: "Remaining Useful Life (RUL)",
        desc: "Digital twin degradation models calibrated for stationary & EV duty cycles",
      },
      {
        name: "Micro-fault detection",
        desc: "Sensitive detection of electrode delamination and internal micro-shorts",
        inDevelopment: true,
      },
    ],
    specs: [
      "Supported cell format: Universal pneumatic fixture for all standard prismatic battery form-factors",
      "Non-destructive testing: zero cycle loss, test cells before module assembly or in warranty triage",
      "High-current contact probes: low-contact resistance clamps ensuring sub-milliohm precision",
      "Fast report generation: complete prismatic health diagnostic signature in minutes",
      "Direct pack-line integration: compatible with MES, PLC automation, and automated test fixtures",
      "Safety interlocks: continuous thermal and over-voltage monitoring during characterization",
      "Heavy-duty mobile chassis: industrial castor base for flexible cell line and lab positioning",
      "Power: standard 230V / 380V industrial connection",
    ],
    whyItWins: [
      "Profiles high-capacity prismatic cells without destructive testing or slow multi-day cycling",
      "Zero capacity loss: inspected cells or packs proceed immediately to pack integration",
      "Flags cell-to-cell variability before assembly to prevent premature pack warranty failures",
      "Replaces bulky cycler channels with compact, rapid spectroscopy",
    ],
    bestFor: [
      "Prismatic cell incoming inspection",
      "EV module and pack assembly lines",
      "Stationary Energy Storage (BESS) QC",
      "Warranty triage & second-life grading",
    ],
    ctaHeadline: "For module & pack manufacturing",
    ctaText: "Scale diagnostic intelligence across large-format cells. Book a BatteryScope-C Prismatic demo.",
    image: prismaticImg,
    chamberLabel: "Contact Probe Array",
    chamberType: "Module & Pack Diagnostic Unit",
    chamberFormat: "Large Format Ready",
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
    image: automatedImg,
    chamberLabel: "Inline Sort Array",
    chamberType: "Continuous Factory Unit",
    chamberFormat: "High Speed Automated",
  },
];

function ProductsNarrativeContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab =
    tabParam === "prismatic" || tabParam === "pack"
      ? "prismatic"
      : tabParam === "automated"
      ? "automated"
      : "cylindrical";

  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const activeTab = selectedTab ?? initialTab;
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div id="product-detail" className="w-full scroll-mt-28">
      {/* Product Selector Tabs */}
      <div className="grid items-stretch grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
        {products.map((prod) => {
          const isActive = prod.id === activeTab;
          const badgeDetails =
            prod.id === "cylindrical"
              ? {
                  tag: "BENCHTOP QC",
                  badgeColor: "border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400",
                  metric: "1,920 Cells / Shift",
                  desc: "Operator-led multi-channel unit for lab characterization & incoming QC.",
                }
              : prod.id === "prismatic"
              ? {
                  tag: "PRISMATIC QC",
                  badgeColor: "border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400",
                  metric: "Module & Pack Lines",
                  desc: "Non-invasive module & pack analytics mapping cell variation to safety.",
                }
              : {
                  tag: "INLINE GIGAFACTORY",
                  badgeColor: "border-amber-500/30 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400",
                  metric: "2,880 Cells / Shift",
                  desc: "Autonomous inline high-throughput testing with automated cell sorting.",
                };

          return (
            <button
              key={prod.id}
              type="button"
              onClick={() => setSelectedTab(prod.id)}
              className={`tc-rotating-selector group relative flex h-full flex-col justify-between text-left cursor-pointer transition-all duration-300 ${
                isActive ? "is-active scale-[1.01]" : ""
              }`}
            >
              {/* Top Row: Category Tag + Active Badge / Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className={`rounded-full border px-3.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider ${badgeDetails.badgeColor}`}>
                  {badgeDetails.tag}
                </span>

                {isActive ? (
                  <div
                    className="flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-1 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                    title="Currently viewing"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-1000" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                      Viewing
                    </span>
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--graphite)] transition-colors group-hover:border-[#f97316] group-hover:text-[#f97316]">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                )}
              </div>

              {/* Middle: Product Name & Brief Desc */}
              <div className="relative z-10 my-auto py-2">
                <h4 className="font-display text-2xl sm:text-[1.75rem] lg:text-[1.9rem] font-bold text-[var(--paper)] leading-tight tracking-tight">
                  {prod.name}
                </h4>
                <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-[var(--graphite-on-dark)]">
                  {badgeDetails.desc}
                </p>
              </div>

              {/* Bottom Row: Highlight Metric */}
              <div className="relative z-10 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="inline-block font-mono text-sm sm:text-base font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                  {badgeDetails.metric}
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--graphite)] group-hover:text-[#f97316] transition-colors">
                  {isActive ? "Viewing Specs" : "Select System →"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Product Detail Panel */}
      <div key={activeProduct.id} className="mt-8 sm:mt-10">
        <div>
          {/* 1. Header & System Image & Indicative Throughput */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <AnimatedSection
              animation="fade-right"
              className="product-directional-reveal max-w-2xl"
            >
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
                <div className="mt-6 border-t border-[var(--border)] pt-6">
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
            </AnimatedSection>

            {/* Hardware Image Showcase - Tight portrait fit with zero empty borders */}
            {activeProduct.image && (
              <AnimatedSection
                as="div"
                animation="fade-left"
                className="product-directional-reveal mx-auto w-full max-w-[320px] sm:max-w-[340px] lg:mx-0 lg:max-w-[360px] lg:shrink-0 lg:basis-[360px]"
              >
                <div className="tc-card tc-card-media group relative flex aspect-[3/4] w-full flex-col justify-between">
                  {/* Image Container with tight fit */}
                  <div className="relative w-full h-[82%] overflow-hidden rounded-[14px]">
                    <Image
                      src={activeProduct.image}
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
                      <span className="break-words font-mono text-[9px] font-bold text-[var(--signal)] uppercase tracking-wider">
                        {activeProduct.chamberLabel}
                      </span>
                      <span className="break-words font-display text-xs font-bold text-[var(--paper)]">
                        {activeProduct.chamberType}
                      </span>
                    </div>
                    <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[var(--paper)]">
                      {activeProduct.chamberFormat}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>

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

              <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {activeProduct.measures.map((m, i) => (
                  <AnimatedSection
                    key={m.name}
                    as="div"
                    animation="fade-up"
                    stagger
                    staggerIndex={i}
                    className="group relative flex items-start gap-3.5"
                  >
                    {/* Glowing Bullet Point */}
                    <span className="relative flex h-2.5 w-2.5 shrink-0 mt-1.5 items-center justify-center">
                      <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#f97316] opacity-40 blur-[4px] group-hover:opacity-75 transition-opacity" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f97316] shadow-[0_0_8px_#f97316]" />
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-display text-base font-bold text-[var(--paper)] leading-tight">
                          {m.name}
                        </span>
                        {m.inDevelopment && (
                          <span className="rounded-full border border-[var(--copper)]/30 bg-[var(--copper)]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--copper)]">
                            *In dev
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--graphite-on-dark)]">
                        {m.desc}
                      </p>
                    </div>
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

            <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {activeProduct.specs.map((spec, i) => (
                <AnimatedSection
                  key={i}
                  as="div"
                  animation="fade-up"
                  stagger
                  staggerIndex={i}
                  className="group relative flex items-start gap-3.5 text-sm sm:text-[15px] leading-relaxed text-[var(--paper)]"
                >
                  {/* Glowing Bullet Point */}
                  <span className="relative flex h-2.5 w-2.5 shrink-0 mt-1.5 items-center justify-center">
                    <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#f97316] opacity-40 blur-[4px] group-hover:opacity-75 transition-opacity" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f97316] shadow-[0_0_8px_#f97316]" />
                  </span>
                  <span className="flex-1 text-[var(--paper)]">{spec}</span>
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
          <AnimatedSection animation="fade-up" delay={200} className="tc-card mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
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
