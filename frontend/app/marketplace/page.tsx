import { CellConfigurator } from "@/components/configurator/cell-configurator";

export const metadata = {
  title: "Cell Store & Battery Pack Configurator | ThinkClock Battery Labs",
  description: "Design your custom battery pack configuration. Select pack voltage, capacity, chemistry, and cell form factor.",
};

export default function MarketplacePage() {
  return (
    <main className="bg-[var(--ink)] px-4 pt-16 pb-12 text-[var(--paper)] sm:px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
            Cell Store / Pack Builder
          </span>
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.15] text-[var(--paper)] sm:text-5xl lg:text-6xl">
          Design your battery pack: configure voltage, capacity, chemistry, and cell format.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--graphite-on-dark)] sm:text-lg">
          Select pack-level targets to generate a series/parallel configuration and visualize the layout.
        </p>

        <div className="mt-8 sm:mt-10">
          <CellConfigurator />
        </div>
      </div>
    </main>
  );
}
