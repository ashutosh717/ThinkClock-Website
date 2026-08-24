import { AnimatedSection } from "@/components/marketing/animated-section";
import Link from "next/link";
import { ApplyButton } from "@/components/ui/apply-button";

export const metadata = {
  title: "Careers & Open Positions | ThinkClock Battery Labs",
  description: "Join ThinkClock Battery Labs. Build the future of signal-driven battery health diagnostics, AI digital twins, and energy storage analytics.",
};

const openRoles = [
  {
    title: "Battery Systems Engineer",
    department: "Engineering",
    location: "UK / Remote",
    type: "Full-time",
    description: "Design and validate EIS-based diagnostic workflows for battery pack characterization across EV and stationary storage applications.",
  },
  {
    title: "Lab Operations Lead",
    department: "Operations",
    location: "UK",
    type: "Full-time",
    description: "Manage cell testing lab, oversee characterization workflows, maintain instrument calibration and data quality protocols.",
  },
  {
    title: "Electrochemical Research Scientist",
    department: "R&D",
    location: "UK / Hybrid",
    type: "Full-time",
    description: "Advance acoustic and RF spectroscopy methods for non-invasive battery state estimation and degradation pathway identification.",
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain the BatteryScope platform, from data pipeline to customer-facing dashboards and API integrations.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)]">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--copper)]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--copper)] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">
                Careers at ThinkClock
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Build the future of battery diagnostics.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg lg:text-xl">
              We are looking for engineers, scientists, and operators who want to make battery health measurable, predictable, and actionable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Open Roles ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">Open roles</p>
            <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Help us make the invisible measurable.
            </h2>
          </div>
          <div className="mt-8 sm:mt-10 space-y-4 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <AnimatedSection
                key={role.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl transition-all duration-300 hover:border-[var(--signal)]/60"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-lg font-bold text-[var(--paper)]">{role.title}</h3>
                      <span className="rounded-[4px] border border-[var(--copper)]/30 bg-[var(--copper)]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--copper)] uppercase tracking-wider">
                        {role.department}
                      </span>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-[var(--graphite-on-dark)] sm:text-sm">{role.description}</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--graphite-on-dark)]">
                        <svg className="h-3.5 w-3.5 text-[var(--signal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--graphite-on-dark)]">
                        <svg className="h-3.5 w-3.5 text-[var(--signal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <ApplyButton href="mailto:careers@thinkclock.com" label="Apply" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Spontaneous Applications ── */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[14px] border border-[var(--copper)]/40 bg-[var(--card)] p-8 sm:p-12 text-center shadow-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--copper)] uppercase">Not seeing the right fit?</p>
            <h2 className="mt-3.5 font-display text-2xl font-bold leading-tight text-[var(--paper)] sm:text-3xl lg:text-4xl">
              We are always open to hearing from talented people.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--graphite-on-dark)] sm:text-base">
              Send your CV and a note about what you do best. If there is a match, we will find it.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="mailto:careers@thinkclock.com"
                className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--copper)] bg-[var(--copper)]/10 px-6 py-3 font-mono text-xs font-semibold text-[var(--paper)] transition-all hover:bg-[var(--copper)] hover:text-[var(--ink)] shadow-lg shadow-[var(--copper)]/10"
              >
                careers@thinkclock.com
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
