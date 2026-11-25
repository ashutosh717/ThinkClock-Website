import { CellConfigurator } from "@/components/configurator/cell-configurator";

export const metadata = {
  title: "Cell Store & Battery Pack Configurator | ThinkClock Battery Labs",
  description: "Design your custom battery pack configuration. Select pack voltage, capacity, chemistry, and cell form factor.",
};

export default function MarketplacePage() {
  return (
    <main className="bg-[var(--ink)] tc-section-hero text-[var(--paper)]">
      <div className="tc-container">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
          <span className="tc-label font-mono font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
            Cell Store / Pack Builder
          </span>
        </div>
        <h1 className="mt-5 max-w-4xl font-display tc-h1 font-bold text-[var(--paper)]">
          Design your battery pack: configure voltage, capacity, chemistry, and cell format.
        </h1>
        <p className="mt-4 tc-body text-[var(--graphite-on-dark)]">
          Select pack-level targets to generate a series/parallel configuration and visualize the layout.
        </p>

        <div className="mt-8 sm:mt-10">
          <CellConfigurator />
        </div>
      </div>
    </main>
  );
}
