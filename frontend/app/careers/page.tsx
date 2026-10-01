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
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--copper)]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--copper)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                CAREERS AT THINKCLOCK
              </span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
              Build the future of{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                battery diagnostics.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg lg:text-xl">
              We are looking for engineers, scientists, and operators who want to make battery health measurable, predictable, and actionable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Open Roles ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-b border-[var(--border)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[var(--signal)]" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--signal)] uppercase">
                OPEN ROLES
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--paper)] sm:text-4xl lg:text-5xl">
              Help us make the{" "}
              <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                invisible measurable.
              </span>
            </h2>
          </div>
          <div className="mt-12 sm:mt-16 space-y-6 max-w-4xl mx-auto">
            {openRoles.map((role, i) => (
              <AnimatedSection
                key={role.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-lg transition-all duration-300 hover:border-[var(--signal)]/40 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-[var(--paper)]">{role.title}</h3>
                      <span className="rounded-full border border-purple-500/20 bg-purple-50 text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300 px-3 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {role.department}
                      </span>
                    </div>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">{role.description}</p>
                    <div className="mt-4 flex flex-wrap gap-5">
                      <span className="flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--graphite-on-dark)]">
                        <svg className="h-3.5 w-3.5 text-[var(--signal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--graphite-on-dark)]">
                        <svg className="h-3.5 w-3.5 text-[var(--signal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <ApplyButton href="mailto:careers@thinkclock.com" label="Apply" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Spontaneous Applications ── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-[20px] border border-purple-500/25 bg-[var(--card)] p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-[var(--copper)]" />
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--copper)] uppercase">
                  NOT SEEING THE RIGHT FIT?
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[var(--paper)] sm:text-3xl lg:text-4xl">
                We are always open to hearing from{" "}
                <span className="inline-block italic font-bold bg-gradient-to-r from-[#ff5722] via-[#f97316] to-[#f59e0b] bg-clip-text text-transparent pr-2">
                  talented people.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--graphite-on-dark)]">
                Send your CV and a note about what you do best. If there is a match, we will find it.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="mailto:careers@thinkclock.com"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--copper)] bg-[var(--copper)]/10 px-6 py-3 font-mono text-xs font-semibold text-[var(--paper)] transition-all hover:bg-[var(--copper)] hover:text-white shadow-lg shadow-[var(--copper)]/10"
                >
                  careers@thinkclock.com
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
