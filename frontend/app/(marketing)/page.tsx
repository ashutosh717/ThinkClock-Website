import Link from "next/link";
import { AlertTriangle, Clock, FileQuestion } from "lucide-react";
import { HeroVideo } from "@/components/marketing/hero-video";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

const trustStats = [
  { value: "75 Seconds", label: "Full battery diagnostic report per run" },
  { value: "1,920 Cells", label: "Per 8-hr shift (Manual unit throughput)" },
  { value: "2,880 Cells", label: "Per 8-hr shift (Automated unit throughput)" },
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
  { phase: "Phase 1 • June 2025", title: "Proof of Concept", desc: "Handmade unit validating core spectroscopy technology in lab conditions." },
  { phase: "Phase 2 • Dec 2025", title: "Portable Prototype", desc: "Refined portable unit enabling field demos and early customer trials." },
  { phase: "Phase 3 • April 2026", title: "Manufactured Unit", desc: "Production-ready device, customer-deployable, 21700 supported today." },
  { phase: "Phase 4 • Q3 2026", title: "Automated System", desc: "Inline, hands-free diagnostics integrated into production workflows." },
];

export default function MarketingHome() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Full-Width Video Hero ── */}
      <HeroVideo videoSrc="/videos/THINKCLOCKv2.mp4" />

      {/* ── 2. Opening Brand Story & Trust Stats Bar ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center" animation="fade-up">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Brand Story
            </span>
            <p className="mt-3 font-display text-2xl font-bold leading-snug text-[var(--paper)] sm:text-3xl lg:text-4xl">
              Batteries don&apos;t fail randomly. They fail because of what we don&apos;t measure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg">
              A pack built from mismatched, under-graded, or silently degraded cells is a pack that underperforms, ages early, or — worse — becomes a safety risk. ThinkClock exists to close that blind spot. We&apos;re an R&amp;D-driven organization focused on Battery Health Analytics, using non-invasive spectroscopy, digital twins, AI, and machine learning to read the internal state of a cell — without disassembly, without damage, and without a single charge-discharge cycle. The result is BatteryScope: a complete cell health signature delivered in seconds, not the hours or days traditional testing demands.
            </p>
          </AnimatedSection>

          {/* Trust Stat Grid */}
          <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat, i) => (
              <AnimatedSection
                key={stat.value}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-lg transition-all duration-300 hover:border-[var(--signal)]/50"
              >
                <p className="font-mono text-2xl font-bold text-[var(--signal)] sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--graphite-on-dark)] sm:text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Problem & Positioning ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center" animation="fade-up">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Problem &amp; Positioning
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl text-[var(--paper)]">
              Sorting cells shouldn&apos;t be a bottleneck or a guess.
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              Manufacturers today are stuck choosing between slow testing, missing defects, or risking early pack failure.
            </p>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
            {problemComparisons.map((item, i) => (
              <AnimatedSection
                key={item.method}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-red-500/50"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[10px] border shadow-sm transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${item.color}40`,
                    backgroundColor: `${item.color}15`,
                  }}
                >
                  <item.Icon className="h-6 w-6 stroke-[2.2]" style={{ color: item.color }} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--paper)]">{item.method}</h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[var(--graphite-on-dark)]">{item.cost}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* ThinkClock's Answer Banner */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-8 sm:mt-10 rounded-[14px] border border-[var(--signal)]/40 bg-[var(--card)] p-6 sm:p-10 shadow-xl">
            <span className="font-mono text-xs font-semibold text-[var(--signal)] uppercase tracking-wider">
              ThinkClock&apos;s Answer: BatteryScope
            </span>
            <h3 className="mt-2.5 font-display text-2xl font-bold sm:text-3xl text-[var(--paper)]">
              Non-invasive spectroscopy + AI digital twins = lab-grade health in seconds.
            </h3>
            <p className="mt-3.5 max-w-4xl text-sm leading-relaxed text-[var(--graphite-on-dark)] sm:text-base">
              Where traditional cyclers demand hours of charge-discharge cycling, BatteryScope delivers a complete cell health picture in seconds: built specifically for Gigafactories, battery pack manufacturers, resellers, and recyclers who need fast, accurate, actionable battery intelligence at scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Product Ecosystem ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Product Ecosystem
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl text-[var(--paper)]">
              The BatteryScope Diagnostic Family
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              From lab benchtop testing to Gigafactory inline sorting and pack-level intelligence.
            </p>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-8 md:grid-cols-3">
            {homeProductPreviews.map((prod, i) => (
              <AnimatedSection
                key={prod.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/40 hover:shadow-2xl hover:shadow-[var(--signal)]/10"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase tracking-wider">{prod.badge}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-[var(--paper)]">{prod.title}</h3>
                  <p className="mt-2 font-display text-sm italic text-[var(--signal)]">&ldquo;{prod.tagline}&rdquo;</p>
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[var(--graphite-on-dark)]">{prod.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[var(--paper)]">{prod.throughput}</span>
                  <Link
                    href={prod.link}
                    className="font-mono text-xs sm:text-sm font-semibold text-[var(--signal)] transition-colors hover:text-[var(--paper)]"
                  >
                    View Specs →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={250} className="mt-10 sm:mt-12 flex justify-center">
            <SendButton href="/products" label="Explore Detailed Product Specs" />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Credibility Timeline ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Credibility Timeline
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl text-[var(--paper)]">
              From Proof of Concept to Production: Built in the Open
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              Iterating from lab prototype to manufactured, customer-deployable diagnostic systems in under a year.
            </p>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityTimeline.map((step, i) => (
              <AnimatedSection
                key={step.phase}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/40"
              >
                <span className="font-mono text-xs font-semibold text-[var(--signal)]">{step.phase}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-[var(--paper)]">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--graphite-on-dark)] sm:text-sm">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Backed by Innovate UK CTA Banner ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection animation="fade-up" className="mx-auto flex max-w-[1400px] flex-col gap-8 rounded-[14px] border border-[var(--signal)]/40 bg-[var(--card)] p-8 sm:p-12 shadow-2xl lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold text-[var(--copper)] uppercase tracking-wider">
                Backed by Innovate UK
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold text-[var(--paper)] sm:text-4xl">
                ThinkClock Battery Labs
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--graphite-on-dark)]">
                An R&D-driven organization focused on Battery Health Analytics using non-invasive spectroscopy, digital twins, AI, and machine learning. Supported and funded by Innovate UK, the UK&apos;s national innovation agency.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <SendButton href="/contact" label="Book a BatteryScope Demo" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}