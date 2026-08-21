import Link from "next/link";
import { AlertTriangle, Clock, FileQuestion } from "lucide-react";
import { VideoSequenceHero } from "@/components/marketing/video-sequence-hero";
import { NyquistHero } from "@/components/marketing/nyquist-hero";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

const trustStats = [
  { value: "75 Seconds", label: "Full battery diagnostic report per run" },
  { value: "6 Channels", label: "Simultaneous cylindrical cell testing" },
  { value: "2,880 Cells", label: "Per 8-hr shift (Automated unit throughput)" },
  { value: "Innovate UK", label: "Supported & funded innovation agency" },
  { value: "0 Cycle Loss", label: "Non-invasive zero damage testing" },
];

const problemComparisons = [
  {
    method: "Manual Voltage / IR Checks",
    cost: "Slow, inconsistent, and completely misses subtle or early cell degradation.",
    Icon: AlertTriangle,
    color: "#f87171",
  },
  {
    method: "Full Charge-Discharge Cycling",
    cost: "Accurate, but far too slow (hours/days) and energy-intensive for high-throughput sorting.",
    Icon: Clock,
    color: "#fbbf24",
  },
  {
    method: "Trusting Supplier Datasheets",
    cost: "Zero visibility into real, cell-level variability across manufactured batches.",
    Icon: FileQuestion,
    color: "#f87171",
  },
];

const homeProductPreviews = [
  {
    title: "BatteryScope-C Manual",
    badge: "Benchtop / Operator-Led",
    tagline: "Battery characteristics in seconds. Not hours.",
    desc: "Production-ready diagnostic unit supporting LG 21700 profiling with 75-second comprehensive reports and zero cycle loss.",
    throughput: "1,920 cells / shift",
    link: "/products",
  },
  {
    title: "BatteryScope-C Automated",
    badge: "Inline / High-Throughput",
    tagline: "Everything the manual unit does: now at production speed.",
    desc: "Autonomous cell feeding, automated 6-channel testing, and smart sorting by SoH & capacity for gigafactories.",
    throughput: "2,880 cells / shift",
    link: "/products",
  },
  {
    title: "BatteryScope-P",
    badge: "Pack-Level Intelligence",
    tagline: "Pack-level insight, built on cell-level truth.",
    desc: "Extends non-invasive spectroscopy & digital twin AI to map cell-to-cell variability into pack performance & safety.",
    throughput: "Pack Diagnostics",
    link: "/products",
  },
];

const credibilityTimeline = [
  { phase: "Phase 1 • June 2025", title: "Proof of Concept", desc: "Handmade unit validating core spectroscopy technology in lab conditions." },
  { phase: "Phase 2 • Dec 2025", title: "Portable Prototype", desc: "Refined portable unit enabling field demos and early customer trials." },
  { phase: "Phase 3 • April 2026", title: "Manufactured Unit", desc: "Production-ready device, customer-deployable, 21700 supported today." },
  { phase: "Phase 4 • Q3 2026", title: "Automated System", desc: "Inline, hands-free diagnostics integrated into production workflows." },
];

export default function MarketingHome() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* Video Sequence Hero */}
      <VideoSequenceHero />

      {/* Nyquist Narrative Hero */}
      <NyquistHero
        title="Battery Characteristics in Seconds. Not Hours."
        subtitle="Every battery pack is only as good as its weakest cell. ThinkClock Battery Labs builds diagnostic tools that let Gigafactories, pack manufacturers, resellers, and recyclers see inside every cell in seconds, with lab-grade accuracy and zero cycle loss."
      />

      {/* Opening Narrative & Trust Bar */}
      <AnimatedSection className="bg-[var(--ink)] px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
            Brand Story
          </span>
          <p className="mt-4 font-display text-2xl font-bold leading-relaxed text-[var(--paper)] sm:text-3xl">
            Batteries don&apos;t fail randomly. They fail because of what we don&apos;t measure.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--graphite-on-dark)] sm:text-xl">
            A pack built from mismatched, under-graded, or silently degraded cells is a pack that underperforms, ages early, or (worse) becomes a safety risk. ThinkClock exists to close that blind spot. We use non-invasive spectroscopy, digital twins, AI, and machine learning to read the internal state of a cell without disassembly, without damage, and without a single charge-discharge cycle.
          </p>
        </div>

        {/* Trust & Credibility Stat Bar */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustStats.map((stat, i) => (
            <AnimatedSection
              key={stat.value}
              as="div"
              animation="fade-up"
              stagger
              staggerIndex={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <p className="font-mono text-3xl font-bold text-[var(--signal)] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* The Problem We Solve */}
      <AnimatedSection className="bg-white/5 px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Problem & Positioning
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl text-[var(--paper)]">
              Sorting cells shouldn&apos;t be a bottleneck or a guess.
            </h2>
            <p className="mt-5 text-lg text-[var(--graphite-on-dark)] sm:text-xl">
              Manufacturers today are stuck choosing between slow testing, missing defects, or risking early pack failure.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problemComparisons.map((item, i) => (
              <AnimatedSection
                key={item.method}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-3xl border border-red-500/20 bg-red-950/10 p-8 sm:p-10 transition-all duration-300 hover:border-red-500/40"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 shadow-lg transition-transform duration-300 group-hover:scale-110"
                >
                  <item.Icon className="h-7 w-7 stroke-[2]" style={{ color: item.color }} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-red-200">{item.method}</h3>
                <p className="mt-3 text-sm leading-relaxed text-red-300/80">{item.cost}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* ThinkClock's Answer Banner */}
          <div className="mt-12 rounded-3xl border border-[var(--signal)]/30 bg-gradient-to-r from-[var(--signal)]/15 via-[var(--signal)]/5 to-transparent p-8 sm:p-12">
            <span className="font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
              ThinkClock&apos;s Answer: BatteryScope
            </span>
            <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-[var(--paper)]">
              Non-invasive spectroscopy + AI digital twins = lab-grade health in seconds.
            </h3>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg">
              Where traditional cyclers demand hours of charge-discharge cycling, BatteryScope delivers a complete cell health picture in seconds: built specifically for Gigafactories, battery pack manufacturers, resellers, and recyclers who need fast, accurate, actionable battery intelligence at scale.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Products Preview Section */}
      <AnimatedSection className="px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Product Ecosystem
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl text-[var(--paper)]">
              The BatteryScope Diagnostic Family
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              From lab benchtop testing to Gigafactory inline sorting and pack-level intelligence.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {homeProductPreviews.map((prod, i) => (
              <AnimatedSection
                key={prod.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--signal)]/40 hover:shadow-2xl hover:shadow-[var(--signal)]/10"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase tracking-wider">{prod.badge}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-[var(--paper)]">{prod.title}</h3>
                  <p className="mt-2 font-display text-base italic text-[var(--signal)]">&ldquo;{prod.tagline}&rdquo;</p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{prod.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[var(--paper)]">{prod.throughput}</span>
                  <Link
                    href={prod.link}
                    className="font-mono text-sm font-semibold text-[var(--signal)] transition-colors hover:text-white"
                  >
                    View Specs →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-14 text-center">
            <SendButton href="/products" label="Explore Detailed Product Specs" />
          </div>
        </div>
      </AnimatedSection>

      {/* Credibility Timeline Section */}
      <AnimatedSection className="bg-white/5 px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Credibility Timeline
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl text-[var(--paper)]">
              From Proof of Concept to Production: Built in the Open
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              Iterating from lab prototype to manufactured, customer-deployable diagnostic systems in under a year.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {credibilityTimeline.map((step, i) => (
              <AnimatedSection
                key={step.phase}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-2xl border border-white/10 bg-[var(--ink)] p-7"
              >
                <span className="font-mono text-xs font-semibold text-[var(--signal)]">{step.phase}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-[var(--paper)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Innovate UK Funded Company Story */}
      <AnimatedSection className="px-6 py-24 sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 rounded-3xl border border-[var(--signal)]/30 bg-gradient-to-br from-[var(--signal)]/10 to-transparent p-10 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-4xl">
            <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase tracking-wider">
              Backed by Innovate UK
            </span>
            <h3 className="mt-3 font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
              ThinkClock Battery Labs
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg">
              An R&D-driven organization focused on Battery Health Analytics using non-invasive spectroscopy, digital twins, AI, and machine learning. Supported and funded by Innovate UK, the UK&apos;s national innovation agency.
            </p>
          </div>
          <div className="shrink-0">
            <SendButton href="/contact" label="Book a BatteryScope Demo" />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}