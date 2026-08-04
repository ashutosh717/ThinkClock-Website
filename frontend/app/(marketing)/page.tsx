import Link from "next/link";

import { VideoSequenceHero } from "@/components/marketing/video-sequence-hero";
import { NyquistHero } from "@/components/marketing/nyquist-hero";
import { AnimatedSection } from "@/components/marketing/animated-section";

const features = [
  {
    title: "BatteryScope",
    body: "Predictive battery health monitoring for EV fleets and OEM programs, with early warning insight before failure cascades.",
    icon: "⬡",
  },
  {
    title: "CellScope",
    body: "Portable diagnostics for rapid cell triage using EIS, acoustic, and RF signatures linked to real usable-state outcomes.",
    icon: "⟐",
  },
  {
    title: "Digital and Physical Twinning",
    body: "Lab measurement workflows that convert raw electrochemical signal into actionable field decisions for warranty and lifecycle planning.",
    icon: "◎",
  },
];

const stats = [
  { label: "Innovate UK-backed", value: "£1.2M+" },
  { label: "Cells characterized", value: "10,000+" },
  { label: "Diagnostic modalities", value: "3" },
  { label: "Fleet partners", value: "5+" },
];

const process = [
  { step: "01", title: "Scan", desc: "Non-invasive spectroscopy — EIS, acoustic, and RF — captures the cell's full signal profile in seconds." },
  { step: "02", title: "Model", desc: "AI and digital twin models map raw signals to internal state, degradation pathways, and remaining useful life." },
  { step: "03", title: "Assess", desc: "A clear health report — SoH, safety risk, and repurposing potential — without opening or damaging the cell." },
  { step: "04", title: "Decide", desc: "Deploy, recover, or retire — with traceable data that supports warranty, second-life, and compliance decisions." },
];

export default function MarketingHome() {
  return (
    <main>
      <VideoSequenceHero />

      <NyquistHero
        title="Battery health is invisible until you measure the signal."
        subtitle="BatteryScope-C combines lab instrumentation and physics-aware analytics to turn impedance, acoustic, and RF traces into clear operational decisions — in seconds, not hours."
      />

      <AnimatedSection className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Products</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Diagnostics that speak data, not marketing.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <AnimatedSection
                key={feature.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group cursor-default rounded-2xl border border-[var(--graphite)]/25 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)] font-mono text-lg text-[var(--signal)]">
                  {feature.icon}
                </span>
                <h3 className="mt-5 font-display text-2xl">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--graphite)]">{feature.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 sm:px-6" animation="fade-up">
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">By the numbers</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">Measurable impact in battery intelligence.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="bg-[var(--ink)] p-8 text-center"
              >
                <p className="font-mono text-3xl text-[var(--signal)] sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--graphite-on-dark)]">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">How It Works</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">From spectroscopy trace to operational decision — in seconds.</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map((item, i) => (
              <AnimatedSection
                key={item.step}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-4xl font-bold text-[var(--signal)]/30">{item.step}</span>
                  {i < process.length - 1 && (
                    <div className="hidden h-px flex-1 bg-[var(--graphite)]/20 md:block" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[var(--ink)] px-4 py-20 sm:px-6" animation="scale-in">
        <div className="mx-auto flex w-full w-full px-6 sm:px-12 lg:px-16 xl:px-24 flex-col gap-6 rounded-2xl border border-[var(--signal)]/25 bg-gradient-to-br from-[var(--signal)]/5 to-transparent p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-3xl text-[var(--paper)]">Ready to see what your cells are saying?</h3>
            <p className="mt-2 max-w-xl text-[var(--graphite-on-dark)]">
              Request a demo to map your battery data, testing cadence, and warranty risk profile.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--signal)] px-6 py-3 font-semibold text-[var(--ink)] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[var(--signal)]/25"
          >
            Request a demo
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}