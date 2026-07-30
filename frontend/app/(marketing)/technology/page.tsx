import { AnimatedSection } from "@/components/marketing/animated-section";
import Link from "next/link";

const stack = [
  {
    name: "Electrochemical Impedance Spectroscopy (EIS)",
    detail:
      "Nyquist and frequency-response signatures reveal internal resistance growth and early degradation pathways before conventional KPI drift becomes visible.",
    icon: "∿",
    color: "var(--signal)",
  },
  {
    name: "Acoustic Spectroscopy",
    detail:
      "Mechanical resonance behavior and pressure-linked signatures expose structural changes that can indicate safety and lifetime risks.",
    icon: "≋",
    color: "var(--copper)",
  },
  {
    name: "RF Spectroscopy",
    detail:
      "High-frequency response enables fast non-invasive state estimation workflows suitable for screening and production-volume triage.",
    icon: "⌇",
    color: "#5CE1C9",
  },
];

export default function TechnologyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Technology</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              BatteryScope-C — signal-first battery diagnostics
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[var(--graphite-on-dark)]">
              BatteryScope-C combines three non-invasive spectroscopic modalities with AI-driven digital twin modelling to deliver a complete battery health assessment in seconds — without opening, damaging, or interrupting production flow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {stack.map((item, i) => (
              <AnimatedSection
                key={item.name}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group cursor-default rounded-2xl border border-[var(--graphite)]/25 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </span>
                <h2 className="mt-5 font-display text-2xl">{item.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--graphite)]">{item.detail}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[var(--signal)]/5 to-transparent p-10 text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">BatteryScope-C Platform</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--paper)] sm:text-4xl">
              Three modalities, one platform — full health assessment in seconds
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--graphite-on-dark)]">
              No single technique tells the full story. EIS captures bulk resistance shifts, acoustic catches physical deformation, RF enables high-throughput screening. BatteryScope-C fuses all three with AI and digital twin models to deliver a complete battery health profile no single metric can — in seconds, not hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--signal)] px-6 py-3 font-semibold text-[var(--ink)] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[var(--signal)]/25"
            >
              Discuss your application
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
