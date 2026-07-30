import { AnimatedSection } from "@/components/marketing/animated-section";
import { PhaseJourney } from "@/components/about/phase-journey";
import Link from "next/link";

const leaders = [
  {
    name: "Babu Devnarayan",
    role: "Chief Executive Officer",
    summary: "Leads product strategy around BatteryScope and deployment partnerships across fleet and OEM programs.",
    initials: "BD",
  },
  {
    name: "Ajith Muthayil",
    role: "Chief Operating Officer",
    summary: "Runs delivery and operations for diagnostics workflows, lab execution, and customer success implementation.",
    initials: "AM",
  },
  {
    name: "Suman",
    role: "Chief Marketing Officer",
    summary: "Shapes product narrative and market education around measurable state-of-health insight and second-life value.",
    initials: "SM",
  },
];

const milestones = [
  { year: "2020", event: "ThinkClock founded with a focus on battery diagnostics R&D" },
  { year: "2021", event: "Innovate UK grant awarded for EIS-based SoH estimation" },
  { year: "2022", event: "BatteryScope platform enters pilot with fleet operators" },
  { year: "2023", event: "CellScope portable diagnostics launched; 5,000th cell characterized" },
  { year: "2024", event: "10,000-cell milestone; RF spectroscopy modality added to platform" },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[var(--copper)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">About ThinkClock</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              Innovate UK-backed battery intelligence grounded in lab reality.
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[var(--graphite-on-dark)]">
              ThinkClock exists to close the gap between battery signal and operational decision. We focus on diagnostics that engineers can trust and teams can act on.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Phase Journey ── */}
      <PhaseJourney />

      {/* ── Why BatteryScope-C ── */}
      <AnimatedSection className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Why BatteryScope-C Matters</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Complete battery health assessment in <span className="text-[var(--copper)]">seconds</span>.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--graphite)]">
              Traditional battery testing methods can take hours — or even days — using charge/discharge cyclers.
              BatteryScope-C delivers a complete battery health assessment in seconds using our proprietary
              combination of non-invasive technologies.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Non-invasive Spectroscopy", desc: "Proprietary multi-modal signal injection and response analysis without opening or damaging cells." },
              { title: "AI & Machine Learning", desc: "Models trained on thousands of cell measurements to predict state-of-health with high accuracy." },
              { title: "Digital Twin Modelling", desc: "Virtual cell models that mirror real-time internal state for predictive diagnostics." },
              { title: "Advanced Battery Analytics", desc: "Comprehensive degradation pathway identification and remaining-useful-life estimation." },
            ].map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-xl border border-[var(--graphite)]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)] font-mono text-sm text-[var(--signal)]">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[var(--copper)]/20 bg-gradient-to-br from-[var(--copper)]/5 to-transparent p-6 text-center">
            <p className="text-sm leading-7 text-[var(--graphite)]">
              We can assess the internal health of battery cells{' '}
              <strong className="text-[var(--ink)]">without opening them, damaging them, or interrupting production flow</strong>.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Leadership ── */}
      <AnimatedSection className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Leadership</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">The team behind the signal.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leaders.map((leader, i) => (
              <AnimatedSection
                key={leader.name}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group cursor-default rounded-2xl border border-[var(--graphite)]/25 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--ink)] font-display text-xl text-[var(--signal)]">
                  {leader.initials}
                </div>
                <h3 className="mt-5 font-display text-2xl">{leader.name}</h3>
                <p className="mt-1 font-mono text-xs tracking-[0.12em] text-[var(--copper-ink)] uppercase">{leader.role}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--graphite)]">{leader.summary}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Milestones ── */}
      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Milestones</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">Our journey in battery intelligence.</h2>
          </div>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-white/10" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection
                  key={m.year}
                  as="div"
                  animation="fade-left"
                  stagger
                  staggerIndex={i}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[var(--signal)] bg-[var(--ink)]" />
                  <span className="font-mono text-sm text-[var(--signal)]">{m.year}</span>
                  <p className="mt-1 text-[var(--graphite-on-dark)]">{m.event}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection className="bg-[var(--paper)] px-4 py-20 text-[var(--ink)] sm:px-6" animation="scale-in">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-2xl border border-[var(--copper)]/20 bg-gradient-to-br from-[var(--copper)]/5 to-transparent p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-3xl">Join the team shaping battery diagnostics.</h3>
            <p className="mt-2 max-w-xl text-[var(--graphite)]">We are hiring across engineering, lab operations, and battery science.</p>
          </div>
          <Link
            href="/careers"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[var(--copper)] px-6 py-3 font-semibold text-[var(--paper)] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[var(--copper)]/25"
          >
            View open roles
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
