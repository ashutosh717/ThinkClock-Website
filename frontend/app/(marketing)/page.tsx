import Link from "next/link";
import { AlertTriangle, Clock, FileQuestion, ArrowUpRight, Zap, Cpu, Gauge, ShieldCheck } from "lucide-react";
import { HeroVideo } from "@/components/marketing/hero-video";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

const trustStats = [
  {
    category: "RAPID DIAGNOSTICS",
    name: "Full Battery Diagnostic",
    value: "75s",
    metricLabel: "PER CELL SIGNATURE",
    label: "Full multi-physics battery diagnostic report delivered per run with zero waiting.",
    color: "from-[#ff5722] via-[#f97316] to-[#f59e0b]",
    badgeColor: "border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400",
    Icon: Zap,
  },
  {
    category: "OPERATOR BENCHTOP",
    name: "BatteryScope-C Manual",
    value: "1,920",
    metricLabel: "CELLS / 8-HR SHIFT",
    label: "Production-ready benchtop sorting supporting 21700 cell batches with zero cycle loss.",
    color: "from-[#ff5722] via-[#f97316] to-[#f59e0b]",
    badgeColor: "border-amber-500/30 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400",
    Icon: Gauge,
  },
  {
    category: "GIGAFACTORY INLINE",
    name: "BatteryScope-C Automated",
    value: "2,880",
    metricLabel: "CELLS / 8-HR SHIFT",
    label: "Autonomous 6-channel continuous testing & smart sorting for high-speed manufacturing lines.",
    color: "from-[#ff5722] via-[#f97316] to-[#f59e0b]",
    badgeColor: "border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300",
    Icon: Cpu,
  },
  {
    category: "NON-INVASIVE AI",
    name: "Multi-Physics Spectroscopy",
    value: "0 Cycle",
    metricLabel: "ZERO DEGRADATION",
    label: "Non-invasive EIS + digital twin AI reads cell state without a single charge-discharge cycle.",
    color: "from-[#ff5722] via-[#f97316] to-[#f59e0b]",
    badgeColor: "border-amber-500/30 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400",
    Icon: ShieldCheck,
  },
];

const problemComparisons = [
  {
    tag: "CONVENTIONAL QA",
    method: "Manual Voltage / IR Checks",
    cost: "Slow, inconsistent, and completely misses subtle or early cell degradation.",
    Icon: AlertTriangle,
    color: "#ef4444",
  },
  {
    tag: "HIGH OVERHEAD",
    method: "Full Charge-Discharge Cycling",
    cost: "Accurate, but far too slow (hours/days) and energy-intensive for high-throughput sorting.",
    Icon: Clock,
    color: "#f59e0b",
  },
  {
    tag: "BLIND RISK",
    method: "Trusting Supplier Datasheets",
    cost: "Zero visibility into real, cell-level variability across manufactured batches.",
    Icon: FileQuestion,
    color: "#ef4444",
  },
];

const homeProductPreviews = [
  {
    title: "BatteryScope-C Manual",
    badge: "Benchtop / Operator-Led",
    tagline: "Battery characteristics in seconds. Not hours.",
    desc: "Production-ready diagnostic unit supporting LG 21700 profiling with 75-second comprehensive reports and zero cycle loss.",
    throughput: "1,920 cells / shift",
    link: "/products?tab=manual#product-detail",
  },
  {
    title: "BatteryScope-C Automated",
    badge: "Inline / High-Throughput",
    tagline: "Everything the manual unit does: now at production speed.",
    desc: "Autonomous cell feeding, automated 6-channel testing, and smart sorting by SoH & capacity for gigafactories.",
    throughput: "2,880 cells / shift",
    link: "/products?tab=automated#product-detail",
  },
  {
    title: "BatteryScope-P",
    badge: "Pack-Level Intelligence",
    tagline: "Pack-level insight, built on cell-level truth.",
    desc: "Extends non-invasive spectroscopy & digital twin AI to map cell-to-cell variability into pack performance & safety.",
    throughput: "Pack Diagnostics",
    link: "/products?tab=pack#product-detail",
  },
];

const credibilityTimeline = [
  { phase: "Phase 1 • June 2025", title: "Proof of Concept", desc: "Handmade unit validating core spectroscopy technology in lab conditions.", tag: "LAB VALIDATED" },
  { phase: "Phase 2 • Dec 2025", title: "Portable Prototype", desc: "Refined portable unit enabling field demos and early customer trials.", tag: "FIELD READY" },
  { phase: "Phase 3 • April 2026", title: "Manufactured Unit", desc: "Production-ready device, customer-deployable, 21700 supported today.", tag: "IN PRODUCTION" },
  { phase: "Phase 4 • Q3 2026", title: "Automated System", desc: "Inline, hands-free diagnostics integrated into production workflows.", tag: "GIGAFACTORY SCALE" },
];

export default function MarketingHome() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Full-Width Video Hero ── */}
      <HeroVideo videoSrc="/videos/THINKCLOCKv2.mp4" />

      {/* ── 2. Opening Brand Story & Aesthetic Work Cards ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          {/* Section Header */}
          <AnimatedSection className="max-w-4xl" animation="fade-up">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--copper)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                BRAND STORY
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[var(--paper)]">
              Batteries don&apos;t fail randomly.{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                They fail because of what we don&apos;t measure.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--graphite-on-dark)] max-w-3xl">
              A pack built from mismatched, under-graded, or silently degraded cells is a pack that underperforms, ages early, or — worse — becomes a safety risk. ThinkClock exists to close that blind spot. We&apos;re an R&amp;D-driven organization focused on Battery Health Analytics, using non-invasive spectroscopy, digital twins, AI, and machine learning to read the internal state of a cell — without disassembly, without damage, and without a single charge-discharge cycle.
            </p>
          </AnimatedSection>

          {/* Aesthetic Metric Cards Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat, i) => (
              <AnimatedSection
                key={stat.value}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/40 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Top Header: Category + Arrow Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col min-w-0">
                      <span className="font-display text-sm font-bold text-[var(--paper)] truncate">
                        {stat.name}
                      </span>
                      <span className="font-mono text-[10px] tracking-wider text-[var(--graphite)] uppercase truncate mt-0.5">
                        {stat.category}
                      </span>
                    </div>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--graphite)] transition-colors group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]">
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Large Hero Metric */}
                  <div className="mt-7">
                    <p className={`inline-block font-display text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent pr-2`}>
                      {stat.value}
                    </p>
                    <span className="mt-1.5 block font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--graphite)]">
                      {stat.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Description Body */}
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)] border-t border-[var(--border)] pt-4">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Problem & Positioning ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="max-w-3xl" animation="fade-up">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                PROBLEM &amp; POSITIONING
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[var(--paper)]">
              Sorting cells shouldn&apos;t be{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                a bottleneck or a guess.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--graphite-on-dark)]">
              Manufacturers today are stuck choosing between slow testing, missing defects, or risking early pack failure.
            </p>
          </AnimatedSection>

          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
            {problemComparisons.map((item, i) => (
              <AnimatedSection
                key={item.method}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-105"
                      style={{
                        borderColor: `${item.color}40`,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <item.Icon className="h-5 w-5 stroke-[2.2]" style={{ color: item.color }} />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--graphite)]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-[var(--paper)]">{item.method}</h3>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)] border-t border-[var(--border)] pt-4">
                  {item.cost}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* ThinkClock's Answer Banner */}
          <AnimatedSection
            animation="fade-up"
            delay={200}
            className="mt-10 sm:mt-12 rounded-[20px] border border-[#f97316]/25 bg-[var(--card)] p-8 sm:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f97316]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#f59e0b]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[#f97316]" />
                <span className="font-mono text-xs font-semibold text-[#f97316] uppercase tracking-widest">
                  THINKCLOCK&apos;S ANSWER: BATTERYSCOPE
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl lg:text-4xl text-[var(--paper)]">
                Non-invasive spectroscopy + AI digital twins ={" "}
                <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                  lab-grade health in seconds.
                </span>
              </h3>
              <p className="mt-4 max-w-4xl text-base sm:text-lg leading-relaxed text-[var(--graphite-on-dark)]">
                Where traditional cyclers demand hours of charge-discharge cycling, BatteryScope delivers a complete cell health picture in seconds: built specifically for Gigafactories, battery pack manufacturers, resellers, and recyclers who need fast, accurate, actionable battery intelligence at scale.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Product Ecosystem ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="max-w-3xl" animation="fade-up">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#f97316]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase">
                PRODUCT ECOSYSTEM
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[var(--paper)]">
              The BatteryScope{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Diagnostic Family
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--graphite-on-dark)]">
              From lab benchtop testing to Gigafactory inline sorting and pack-level intelligence.
            </p>
          </AnimatedSection>

          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
            {homeProductPreviews.map((prod, i) => (
              <AnimatedSection
                key={prod.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-lg transition-all duration-300 hover:border-[#f97316]/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest font-semibold px-2.5 py-1 rounded-full border border-orange-500/30 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400 uppercase">
                      {prod.badge}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--graphite)] group-hover:border-[#f97316] group-hover:text-[#f97316]">
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-[var(--paper)]">{prod.title}</h3>
                  <p className="mt-2 font-display text-sm italic text-[var(--signal)]">&ldquo;{prod.tagline}&rdquo;</p>
                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">{prod.desc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[var(--paper)]">{prod.throughput}</span>
                  <Link
                    href={prod.link}
                    className="font-mono text-xs sm:text-sm font-semibold text-[var(--signal)] transition-colors hover:text-[var(--paper)] inline-flex items-center gap-1"
                  >
                    View Specs →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={250} className="mt-12 sm:mt-16 flex justify-center">
            <SendButton href="/products" label="Explore Detailed Product Specs" />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Credibility Timeline ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="max-w-3xl" animation="fade-up">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--copper)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                CREDIBILITY TIMELINE
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[var(--paper)]">
              From Proof of Concept to Production:{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                Built in the Open
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--graphite-on-dark)]">
              Iterating from lab prototype to manufactured, customer-deployable diagnostic systems in under a year.
            </p>
          </AnimatedSection>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityTimeline.map((step, i) => (
              <AnimatedSection
                key={step.phase}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] tracking-widest font-semibold px-2.5 py-0.5 rounded-full border border-[var(--signal)]/30 bg-[var(--signal)]/10 text-[var(--signal)] uppercase">
                      {step.tag}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[var(--copper)]">{step.phase}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-[var(--paper)]">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)] border-t border-[var(--border)] pt-4">
                  {step.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Backed by Innovate UK CTA Banner ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection
            animation="fade-up"
            className="mx-auto flex max-w-[1400px] flex-col gap-8 rounded-[20px] border border-purple-500/25 bg-[var(--card)] p-8 sm:p-12 shadow-xl dark:shadow-2xl lg:flex-row lg:items-center lg:justify-between relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[var(--copper)]" />
                <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase tracking-wider">
                  BACKED BY INNOVATE UK
                </span>
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
                ThinkClock Battery Labs
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[var(--graphite-on-dark)]">
                An R&amp;D-driven organization focused on Battery Health Analytics using non-invasive spectroscopy, digital twins, AI, and machine learning. Supported and funded by Innovate UK, the UK&apos;s national innovation agency.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0 relative z-10">
              <SendButton href="/contact" label="Book a BatteryScope Demo" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}