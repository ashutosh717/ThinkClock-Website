import { Zap, Cpu, ShieldCheck, Activity, Battery, BarChart3, Shield, BatteryCharging, Database, Recycle, Layers, Sparkles, FlaskConical } from "lucide-react";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SendButton } from "@/components/ui/send-button";

const coreCapabilities = [
  {
    title: "Three Spectroscopic Modalities",
    desc: "Electrochemical Impedance Spectroscopy (EIS), Acoustic Spectroscopy, and RF/mmWave Spectroscopy combined into a single diagnostic sweep.",
    badge: "Multi-Modal",
    Icon: Activity,
    color: "#5ce1c9",
  },
  {
    title: "AI-Driven Digital Twin Modelling",
    desc: "Relates microscopic battery data with observable system-level behaviour using physics-informed neural network models.",
    badge: "Physics + AI",
    Icon: Cpu,
    color: "#c97a4a",
  },
  {
    title: "75-Second Non-Invasive Report",
    desc: "Delivers complete State of Health (SoH), predicted self-discharge, DCIR, predictive RUL, and internal micro-fault detection in 75 seconds without cycle loss.",
    badge: "75 Seconds",
    Icon: Zap,
    color: "#5ce1c9",
  },
  {
    title: "Patented BatteryScope Platform",
    desc: "Provides fast, accurate battery characterisation for Gigafactories, pack builders, resellers, and recyclers without opening or damaging the cell.",
    badge: "Patented",
    Icon: ShieldCheck,
    color: "#c97a4a",
  },
];

const diagnosticSignatureMetrics = [
  {
    name: "State of Health (SoH)",
    desc: "Accurate SoH reading without charge-discharge cycling",
    status: "Active",
  },
  {
    name: "Self-Discharge Rate",
    desc: "Predicted without waiting days for laboratory results",
    status: "Active",
  },
  {
    name: "Internal Resistance (DCIR)",
    desc: "Measured non-invasively in seconds per cell run",
    status: "Active",
  },
  {
    name: "Remaining Useful Life (RUL)",
    desc: "Predictive RUL for second-life decisions and grading",
    status: "Active",
  },
  {
    name: "Cell Health Signatures",
    desc: "Proprietary spectroscopic fingerprint unique to BatteryScope",
    status: "In Development",
  },
  {
    name: "Micro-Fault Detection",
    desc: "Detects internal short circuits and electrolyte leaks",
    status: "In Development",
  },
];

const chemistryFormFactors = [
  { chemistry: "LFP (Lithium Iron Phosphate)", Icon: Zap, color: "#c97a4a" },
  { chemistry: "NMC (Nickel Manganese Cobalt)", Icon: BatteryCharging, color: "#5ce1c9" },
  { chemistry: "Solid-State Chemistries", Icon: Sparkles, color: "#38bdf8" },
  { chemistry: "Sodium-Ion Chemistries", Icon: FlaskConical, color: "#34d399" },
];

const labCapabilities = [
  {
    title: "Six-Channel Simultaneous Testing",
    desc: "6 cylindrical cells tested simultaneously without compromising accuracy, enabling high-speed shift throughput.",
    Icon: Layers,
    color: "#5ce1c9",
  },
  {
    title: "Multi-Format Form Factor Support",
    desc: "LG 21700 supported out of the box; rapidly trained for 18650, other cylindrical sizes, and prismatic formats.",
    Icon: Battery,
    color: "#c97a4a",
  },
  {
    title: "Advanced Analytics & EIS",
    desc: "Detailed impedance growth, capacity fade, OCV, IR, and degradation pathway mapping.",
    Icon: BarChart3,
    color: "#5ce1c9",
  },
  {
    title: "Second-Life Risk Evaluation",
    desc: "Predictive remaining useful life (RUL) estimation and thermal safety risk profiling for stationary BESS.",
    Icon: Shield,
    color: "#c97a4a",
  },
];

const secondLifeCells = [
  {
    type: "Cylindrical Cells",
    formats: ["18650", "21700"],
    soh: "Tested > 80% SoH",
    desc: "Internally tested, certified, and ready for immediate dispatch.",
    Icon: BatteryCharging,
  },
  {
    type: "Prismatic Cells",
    formats: ["80Ah", "100Ah", "105Ah", "150Ah"],
    soh: "Tested > 80% SoH",
    desc: "High-capacity modules graded for second-life energy storage.",
    Icon: Zap,
  },
];

const supportingPlatforms = [
  {
    name: "Cell Benchmarking Database",
    role: "Independent Source of Truth",
    desc: "An independent source of truth for commercially available cells, built from lab-based characterisation data.",
    Icon: Database,
  },
  {
    name: "CellScope E-Waste Portal",
    role: "Circular Economy Benchmark",
    desc: "A spectroscopic data-driven portal empowering e-waste aggregators to accurately assess and price recycled battery cells based on verified SoH.",
    Icon: Recycle,
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
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Technology Platform
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-[var(--paper)] sm:text-5xl lg:text-6xl">
              BatteryScope-C: Signal-First Battery Diagnostics
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--graphite-on-dark)] sm:text-xl">
              BatteryScope-C combines non-invasive spectroscopy (EIS, acoustic, and RF) with AI-driven digital twin modelling to deliver a complete battery health assessment in 75 seconds: without opening, damaging, or interrupting production flow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Core Capabilities ── */}
      <section className="bg-[var(--paper)] px-6 py-28 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Core Capabilities
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              Precision battery diagnostics in 75 seconds.
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
                className="group cursor-default rounded-3xl border border-[var(--graphite)]/25 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}35`,
                    }}
                  >
                    <item.Icon className="h-6 w-6 stroke-[2]" style={{ color: item.color }} />
                  </div>
                  <span className="rounded-full bg-[var(--paper)] px-3 py-1 font-mono text-xs font-bold tracking-wider text-[var(--graphite)] uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold leading-snug text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Diagnostic Signature Metrics (From Narrative Document) ── */}
      <AnimatedSection className="bg-white/5 px-6 py-28 text-[var(--paper)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Health Signature Modalities
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">
              Complete Cell Diagnostic Profile in Seconds
            </h2>
            <p className="mt-4 text-base text-[var(--graphite-on-dark)] sm:text-lg">
              Six key health metrics captured during every run without a single charge-discharge cycle.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosticSignatureMetrics.map((metric) => (
              <div
                key={metric.name}
                className="rounded-3xl border border-white/10 bg-[var(--ink)] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[var(--signal)]/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-[var(--paper)]">{metric.name}</span>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                      metric.status === "Active"
                        ? "bg-[var(--signal)]/15 text-[var(--signal)] border border-[var(--signal)]/30"
                        : "bg-[var(--copper)]/15 text-[var(--copper)] border border-[var(--copper)]/30"
                    }`}
                  >
                    {metric.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 4. Chemistries Supported ── */}
      <section className="bg-[var(--paper)] px-6 py-24 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Chemistry Versatility
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              Next-Gen Diagnostics Across Chemistries
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chemistryFormFactors.map((item) => (
              <div
                key={item.chemistry}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--graphite)]/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 shrink-0"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}35`,
                  }}
                >
                  <item.Icon className="h-6 w-6 stroke-[2]" style={{ color: item.color }} />
                </div>
                <span className="font-display text-base font-bold text-[var(--ink)]">{item.chemistry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Laboratory Services & Infrastructure ── */}
      <AnimatedSection className="bg-[var(--ink)] px-6 py-28 text-[var(--paper)] sm:px-12 lg:px-16 xl:px-24" animation="fade-up">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              R&D & Lab Infrastructure
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-5xl">
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
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--signal)]/40"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${lab.color}15`,
                    borderColor: `${lab.color}35`,
                  }}
                >
                  <lab.Icon className="h-6 w-6 stroke-[2]" style={{ color: lab.color }} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--paper)]">{lab.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-on-dark)]">{lab.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 6. Second-Life Certified Battery Sales ── */}
      <section className="bg-[var(--paper)] px-6 py-28 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Certified Second-Life Supply
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              Internally tested & certified cells (&gt; 80% SoH).
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {secondLifeCells.map((cell, i) => (
              <AnimatedSection
                key={cell.type}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-3xl border border-[var(--graphite)]/20 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--signal)]/15 border border-[var(--signal)]/30">
                    <cell.Icon className="h-7 w-7 text-[var(--signal)] stroke-[2]" />
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-800 uppercase">
                    {cell.soh}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-[var(--ink)]">{cell.type}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--graphite)]">{cell.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {cell.formats.map((f) => (
                    <span
                      key={f}
                      className="rounded-xl bg-[var(--paper)] px-4 py-2 font-mono text-xs font-bold text-[var(--ink)]"
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

      {/* ── 7. Supporting Platforms ── */}
      <AnimatedSection className="bg-[var(--ink)] px-6 py-28 text-[var(--paper)] sm:px-12 lg:px-16 xl:px-24" animation="fade-up">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
              Supporting Platforms
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-5xl">
              Benchmarking database & CellScope e-waste portal.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {supportingPlatforms.map((platform, i) => (
              <AnimatedSection
                key={platform.name}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-[var(--signal)]/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--signal)]/10 border border-[var(--signal)]/30 transition-transform duration-300 group-hover:scale-110">
                    <platform.Icon className="h-7 w-7 text-[var(--signal)] stroke-[2]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[var(--copper)] uppercase">
                      {platform.role}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[var(--paper)]">{platform.name}</h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)]">
                  {platform.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── 8. Applications ── */}
      <section className="bg-[var(--paper)] px-6 py-28 text-[var(--ink)] sm:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
              Target Ecosystem
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              Built for the entire battery value chain.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--graphite)]">
              Serves battery developers, researchers, product teams, cell OEMs, battery pack manufacturers, fleet operators, recyclers, system integrators, and financial partners.
            </p>
          </AnimatedSection>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3.5">
            {applications.map((app) => (
              <span
                key={app}
                className="rounded-full border border-[var(--graphite)]/20 bg-white px-6 py-3 font-sans text-base font-semibold text-[var(--ink)] shadow-sm transition-all duration-300 hover:border-[var(--copper)] hover:shadow-md"
              >
                {app}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-[var(--copper)]/30 bg-gradient-to-br from-[var(--copper)]/10 via-[var(--paper)] to-transparent p-10 sm:p-12 text-center shadow-lg">
            <h3 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl lg:text-4xl">
              Ready to evaluate BatteryScope-C for your program?
            </h3>
            <p className="mt-4 text-base text-[var(--graphite)]">
              Connect with our engineering team to discuss EIS, acoustic, and RF integration.
            </p>
            <SendButton href="/contact" label="Discuss your application" className="mt-8" />
          </div>
        </div>
      </section>
    </main>
  );
}
