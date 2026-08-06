import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

const coreCapabilities = [
  {
    title: "Three Spectroscopic Modalities",
    desc: "Electrochemical Impedance Spectroscopy (EIS), Acoustic Spectroscopy, and RF/mmWave Spectroscopy.",
    badge: "Multi-Modal",
    icon: "∿",
    color: "var(--signal)",
  },
  {
    title: "AI-Driven Digital Twin Modelling",
    desc: "Relates microscopic battery data with observable system-level behaviour using models based on physics and machine learning.",
    badge: "Physics + AI",
    icon: "⟐",
    color: "var(--copper)",
  },
  {
    title: "Non-Invasive Diagnostics",
    desc: "Delivers State of Health (SoH), State of Charge (SoC), Internal Resistance (IRR), Open Circuit Voltage (OCV), Remaining Useful Life (RUL), and internal cell defect detection in under 20 seconds.",
    badge: "< 20 Seconds",
    icon: "⚡",
    color: "#5CE1C9",
  },
  {
    title: "Patented BatteryScope Platform",
    desc: "Provides fast, accurate battery characterisation in seconds, not hours, without dismantling or damaging the battery.",
    badge: "Patented",
    icon: "⬡",
    color: "#e8925c",
  },
];

const labCapabilities = [
  {
    title: "High-Power 300A Test Platform",
    desc: "Integrated 300A, 4-channel charge-discharge testing platform for edge-case validation across wide operating ranges.",
    icon: "⚡",
  },
  {
    title: "Cell & Module Testing",
    desc: "Comprehensive characterisation across Lithium-ion, LFP, NMC, 18650, 21700, and prismatic formats.",
    icon: "🔋",
  },
  {
    title: "Advanced Analytics & EIS",
    desc: "Detailed impedance growth, capacity fade, OCV, IR, and degradation pathway mapping.",
    icon: "📊",
  },
  {
    title: "Second-Life Risk Evaluation",
    desc: "Predictive remaining useful life (RUL) estimation and thermal safety risk profiling.",
    icon: "🛡️",
  },
];

const secondLifeCells = [
  {
    type: "Cylindrical Cells",
    formats: ["18650", "21700"],
    soh: "Tested > 80% SoH",
    desc: "Internally tested, certified, and ready for immediate dispatch.",
    icon: "🔋",
  },
  {
    type: "Prismatic Cells",
    formats: ["80Ah", "100Ah", "105Ah", "150Ah"],
    soh: "Tested > 80% SoH",
    desc: "High-capacity modules graded for second-life energy storage.",
    icon: "⚡",
  },
];

const supportingPlatforms = [
  {
    name: "Cell Benchmarking Database",
    role: "Independent Source of Truth",
    desc: "An independent source of truth for commercially available cells, built from lab-based characterisation data.",
    icon: "📊",
  },
  {
    name: "CellScope E-Waste Portal",
    role: "Circular Economy Benchmark",
    desc: "A spectroscopic data-driven portal empowering e-waste aggregators to accurately assess and price recycled battery cells based on verified SoH.",
    icon: "🔬",
  },
];

const applications = [
  "Battery Developers",
  "Researchers",
  "Product Teams",
  "Cell OEMs",
  "Battery Pack Manufacturers",
  "Fleet Operators",
  "Recyclers",
  "System Integrators",
  "Financial Partners",
];

export default function TechnologyPage() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              Technology
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              BatteryScope-C — signal-first battery diagnostics
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--graphite-on-dark)]">
              BatteryScope-C combines three non-invasive spectroscopic modalities with AI-driven digital twin modelling to deliver a complete battery health assessment in seconds — without opening, damaging, or interrupting production flow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Core Capabilities ── */}
      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-2xl text-center" animation="fade-up">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              Core Capabilities
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              Precision battery diagnostics in under 20 seconds.
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group cursor-default rounded-2xl border border-[var(--graphite)]/25 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="rounded-full bg-[var(--paper)] px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-[var(--graphite)] uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl leading-snug text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--graphite)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Laboratory Services & Infrastructure ── */}
      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 text-[var(--paper)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              R&D & Lab Infrastructure
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
              Advanced laboratory services & testing infrastructure.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {labCapabilities.map((lab, i) => (
              <AnimatedSection
                key={lab.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--signal)]/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--signal)]/10 text-xl">
                  {lab.icon}
                </span>
                <h3 className="mt-5 font-display text-lg text-[var(--paper)]">{lab.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--graphite-on-dark)]">{lab.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 4. Second-Life Certified Battery Sales ── */}
      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-2xl text-center" animation="fade-up">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
              Certified Second-Life Supply
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              Internally tested & certified cells (&gt; 80% SoH).
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {secondLifeCells.map((cell, i) => (
              <AnimatedSection
                key={cell.type}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-2xl border border-[var(--graphite)]/20 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{cell.icon}</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800 uppercase">
                    {cell.soh}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-[var(--ink)]">{cell.type}</h3>
                <p className="mt-2 text-sm text-[var(--graphite)]">{cell.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cell.formats.map((f) => (
                    <span
                      key={f}
                      className="rounded-lg bg-[var(--paper)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--ink)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Supporting Platforms ── */}
      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 text-[var(--paper)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">
              Supporting Platforms
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--paper)] sm:text-5xl">
              Benchmarking database & CellScope e-waste portal.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {supportingPlatforms.map((platform, i) => (
              <AnimatedSection
                key={platform.name}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[var(--signal)]/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--signal)]/10 text-2xl">
                    {platform.icon}
                  </span>
                  <div>
                    <span className="font-mono text-xs tracking-wider text-[var(--copper)] uppercase">
                      {platform.role}
                    </span>
                    <h3 className="font-display text-2xl text-[var(--paper)]">{platform.name}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-[var(--graphite-on-dark)]">
                  {platform.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 6. Applications ── */}
      <section className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-2xl text-center" animation="fade-up">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">
              Target Ecosystem
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              Built for the entire battery value chain.
            </h2>
            <p className="mt-4 text-base text-[var(--graphite)]">
              Serves battery developers, researchers, product teams, cell OEMs, battery pack manufacturers, fleet operators, recyclers, system integrators, and financial partners.
            </p>
          </AnimatedSection>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="rounded-full border border-[var(--graphite)]/20 bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[var(--ink)] shadow-sm transition-all duration-300 hover:border-[var(--copper)] hover:shadow-md"
              >
                {app}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[var(--copper)]/30 bg-gradient-to-br from-[var(--copper)]/10 via-[var(--paper)] to-transparent p-10 text-center shadow-lg">
            <h3 className="font-display text-2xl text-[var(--ink)] sm:text-3xl">
              Ready to evaluate BatteryScope-C for your program?
            </h3>
            <p className="mt-3 text-sm text-[var(--graphite)]">
              Connect with our engineering team to discuss EIS, acoustic, and RF integration.
            </p>
            <SendButton href="/contact" label="Discuss your application" className="mt-6" />
          </div>
        </div>
      </section>
    </main>
  );
}
