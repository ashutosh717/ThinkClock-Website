import { AlertTriangle, Clock, FileQuestion, ArrowUpRight, Zap, Cpu, Gauge, ShieldCheck } from "lucide-react";
import { HeroVideo } from "@/components/marketing/hero-video";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { CountUp } from "@/components/marketing/count-up";
import { ScrollColorReveal } from "@/components/marketing/scroll-color-reveal";

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

export default function MarketingHome() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Full-Width Video Hero ── */}
      <HeroVideo videoSrc="/videos/thinkclock-hero-combined.mp4" />

      {/* ── 2. Opening Brand Story & Aesthetic Work Cards ── */}
      <section className="tc-section pt-16 sm:pt-20">
        <div className="tc-container">
          {/* Section Header */}
          <AnimatedSection className="max-w-4xl" animation="fade-up">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--copper)]" />
              <span className="tc-label font-mono font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                BRAND STORY
              </span>
            </div>
            <h2 className="mt-2 font-display tc-h2 font-bold text-[var(--paper)]">
              Batteries don&apos;t fail randomly.{" "}
              <span className="inline italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1">
                They fail because of what we don&apos;t measure.
              </span>
            </h2>
            <p className="mt-3 tc-body text-[var(--graphite-on-dark)]">
              A pack built from mismatched, under-graded, or silently degraded cells is a pack that underperforms, ages early, or — worse — becomes a safety risk. ThinkClock exists to close that blind spot. We&apos;re an R&amp;D-driven organization focused on Battery Health Analytics, using non-invasive spectroscopy, digital twins, AI, and machine learning to read the internal state of a cell — without disassembly, without damage, and without a single charge-discharge cycle.
            </p>
          </AnimatedSection>

          {/* Aesthetic Metric Cards Grid */}
          <div className="mt-6 sm:mt-8 grid items-stretch gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((stat, i) => (
              <AnimatedSection
                key={stat.value}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="tc-card tc-stat-card group relative flex h-full flex-col justify-between"
              >
                <div>
                  {/* Top Header: Category + Arrow Icon */}
                  <div className="tc-stat-heading flex items-start justify-between gap-3">
                    <div className="flex flex-col min-w-0">
                      <span className="font-display text-sm font-bold text-[var(--paper)]">
                        {stat.name}
                      </span>
                      <span className="mt-0.5 font-mono text-[10px] tracking-wider text-[var(--graphite)] uppercase">
                        {stat.category}
                      </span>
                    </div>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--secondary)] text-[var(--graphite)] transition-colors group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]">
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Large Hero Metric */}
                  <div className="mt-4 sm:mt-5">
                    <p className="inline-block font-mono tc-stat-value font-bold tracking-tight text-[var(--signal)]">
                      <CountUp value={stat.value} />
                    </p>
                    <span className="mt-1 block font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--graphite)]">
                      {stat.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Description Body */}
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)] border-t border-[var(--border)] pt-3">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Problem & Positioning ── */}
      <section className="tc-section">
        <div className="tc-container">
          <AnimatedSection className="max-w-3xl" animation="fade-up">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="tc-label font-mono font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                PROBLEM &amp; POSITIONING
              </span>
            </div>
            <h2 className="mt-2 font-display tc-h2 font-bold text-[var(--paper)]">
              Sorting cells shouldn&apos;t be{" "}
              <span className="inline italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1">
                a bottleneck or a guess.
              </span>
            </h2>
            <p className="mt-3 tc-body text-[var(--graphite-on-dark)]">
              Manufacturers today are stuck choosing between slow testing, missing defects, or risking early pack failure.
            </p>
          </AnimatedSection>

          <div className="mt-6 sm:mt-8 grid items-stretch gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {problemComparisons.map((item, i) => (
              <AnimatedSection
                key={item.method}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="tc-card group relative flex h-full flex-col justify-between"
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
                  <h3 className="mt-3 font-display text-xl font-bold text-[var(--paper)]">{item.method}</h3>
                </div>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)] border-t border-[var(--border)] pt-3">
                  {item.cost}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* ThinkClock's Answer */}
          <AnimatedSection
            animation="fade-up"
            delay={200}
            className="mt-8 sm:mt-12"
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#f97316]" />
              <span className="font-mono text-xs font-semibold text-[#f97316] uppercase tracking-widest">
                THINKCLOCK&apos;S ANSWER: BATTERYSCOPE
              </span>
            </div>
            <h3 className="mt-2 font-display tc-h3-lg font-bold text-[var(--paper)]">
              Non-invasive spectroscopy + AI digital twins ={" "}
              <span className="inline italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-1">
                lab-grade health in seconds.
              </span>
            </h3>
            <p className="mt-3 tc-body text-[var(--graphite-on-dark)]">
              Where traditional cyclers demand hours of charge-discharge cycling, BatteryScope delivers a complete cell health picture in seconds: built specifically for Gigafactories, battery pack manufacturers, resellers, and recyclers who need fast, accurate, actionable battery intelligence at scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ScrollColorReveal />
    </main>
  );
}