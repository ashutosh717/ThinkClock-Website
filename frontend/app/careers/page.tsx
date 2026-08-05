import { AnimatedSection } from "@/components/marketing/animated-section";
import Link from "next/link";
import { ApplyButton } from "@/components/ui/apply-button";

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
    <main>
      <section className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--copper)]/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">Careers</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
              Build the future of battery diagnostics.
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[var(--graphite-on-dark)]">
              We are looking for engineers, scientists, and operators who want to make battery health measurable, predictable, and actionable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="bg-[var(--paper)] px-4 py-24 text-[var(--ink)] sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">Open roles</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Help us make the invisible measurable.</h2>
          </div>
          <div className="mt-14 space-y-4">
            {openRoles.map((role, i) => (
              <AnimatedSection
                key={role.title}
                as="article"
                animation="fade-up"
                stagger
                staggerIndex={i}
                className="group cursor-default rounded-2xl border border-[var(--graphite)]/25 bg-white p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl">{role.title}</h3>
                      <span className="rounded-full bg-[var(--copper)]/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.08em] text-[var(--copper-ink)] uppercase">
                        {role.department}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--graphite)]">{role.description}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="flex items-center gap-1 font-mono text-xs text-[var(--graphite)]">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs text-[var(--graphite)]">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <ApplyButton href="#" label="Apply" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[var(--ink)] px-4 py-24 sm:px-6" animation="fade-up">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[var(--copper)]/5 to-transparent p-10 text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--copper)] uppercase">Not seeing the right fit?</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--paper)] sm:text-4xl">
              We are always open to hearing from talented people.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--graphite-on-dark)]">
              Send your CV and a note about what you do best. If there is a match, we will find it.
            </p>
            <Link
              href="mailto:careers@thinkclock.com"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-[var(--copper)]/50 px-6 py-3 font-semibold text-[var(--copper)] transition-all hover:bg-[var(--copper)]/10 hover:shadow-lg hover:shadow-[var(--copper)]/10"
            >
              careers@thinkclock.com
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
