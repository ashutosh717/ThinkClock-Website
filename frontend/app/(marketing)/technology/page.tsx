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
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--signal)]/15 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-[var(--copper)]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
                Technology Platform
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              BatteryScope-C: Signal-First Battery Diagnostics
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg lg:text-xl">
              BatteryScope-C combines non-invasive spectroscopy (EIS, acoustic, and RF) with AI-driven digital twin modelling to deliver a complete battery health assessment in <span className="font-mono font-semibold text-[var(--paper)]">75 seconds</span>: without opening, damaging, or interrupting production flow.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <SendButton href="/contact" label="Discuss Your Application" />
              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] px-5 py-3 font-sans text-sm font-semibold text-[var(--paper)] transition-all hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                Explore Product Ecosystem →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Core Capabilities ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Core Capabilities
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Precision battery diagnostics in <span className="font-mono text-[var(--signal)]">75 seconds</span>.
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${item.color}45`,
                    }}
                  >
                    <item.Icon className="h-5 w-5 stroke-[2]" style={{ color: item.color }} />
                  </div>
                  <span className="rounded-[6px] border border-[var(--border)] bg-[var(--ink)] px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-[var(--graphite-on-dark)] uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-[var(--paper)]">{item.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[var(--graphite-on-dark)] sm:text-sm">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Diagnostic Signature Metrics ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
              Health Signature Modalities
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Complete Cell Diagnostic Profile in Seconds
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--graphite-on-dark)] sm:text-base">
              Six key health metrics captured during every run without a single charge-discharge cycle.
            </p>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosticSignatureMetrics.map((metric) => (
              <div
                key={metric.name}
                className="rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-[var(--paper)]">{metric.name}</h3>
                  <span
                    className={`rounded-[6px] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${metric.status === "Active"
                      ? "border border-[var(--signal)]/40 bg-[var(--signal)]/10 text-[var(--signal)]"
                      : "border border-[var(--copper)]/40 bg-[var(--copper)]/10 text-[var(--copper)]"
                      }`}
                  >
                    {metric.status}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--graphite-on-dark)] sm:text-sm">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Chemistries Supported ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
              Chemistry Versatility
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Next-Gen Diagnostics Across Chemistries
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chemistryFormFactors.map((item) => (
              <div
                key={item.chemistry}
                className="group flex items-center gap-4 rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${item.color}45`,
                  }}
                >
                  <item.Icon className="h-5 w-5 stroke-[2]" style={{ color: item.color }} />
                </div>
                <span className="font-mono text-xs font-semibold text-[var(--paper)]">{item.chemistry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Laboratory Services & Infrastructure ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              R&D & Lab Infrastructure
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Advanced laboratory services & testing infrastructure.
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {labCapabilities.map((lab, i) => (
              <AnimatedSection
                key={lab.title}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${lab.color}45`,
                  }}
                >
                  <lab.Icon className="h-5 w-5 stroke-[2]" style={{ color: lab.color }} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-[var(--paper)]">{lab.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[var(--graphite-on-dark)] sm:text-sm">{lab.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Supporting Platforms ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Supporting Platforms
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Benchmarking database & CellScope e-waste portal.
            </h2>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 grid gap-8 md:grid-cols-2">
            {supportingPlatforms.map((platform, i) => (
              <AnimatedSection
                key={platform.name}
                as="div"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-[var(--signal)]/30 bg-[var(--signal)]/10 transition-transform duration-300 group-hover:scale-105">
                    <platform.Icon className="h-6 w-6 text-[var(--signal)] stroke-[2]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[var(--copper)] uppercase">
                      {platform.role}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[var(--paper)]">{platform.name}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[var(--graphite-on-dark)]">
                  {platform.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Target Ecosystem & Call to Action ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-3xl text-center" animation="fade-up">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
              Target Ecosystem
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Built for the entire battery value chain.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--graphite-on-dark)] sm:text-base">
              Serves battery developers, researchers, product teams, cell OEMs, battery pack manufacturers, fleet operators, recyclers, system integrators, and financial partners.
            </p>
          </AnimatedSection>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="rounded-[6px] border border-[var(--border)] bg-[var(--card)] px-4 py-2 font-mono text-xs font-semibold text-[var(--paper)] shadow-sm transition-all duration-300 hover:border-[var(--signal)] hover:text-[var(--signal)]"
              >
                {app}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-12 sm:mt-14 max-w-4xl rounded-[14px] border border-[var(--signal)]/40 bg-[var(--card)] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-[var(--paper)] sm:text-3xl lg:text-4xl">
              Ready to evaluate BatteryScope-C for your program?
            </h3>
            <p className="mt-4 text-sm text-[var(--graphite-on-dark)] sm:text-base">
              Connect with our engineering team to discuss EIS, acoustic, and RF integration.
            </p>
            <div className="mt-8 flex justify-center">
              <SendButton href="/contact" label="Discuss your application" variant="lab" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
