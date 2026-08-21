import { CellConfigurator } from "@/components/configurator/cell-configurator";

export default function MarketplacePage() {
  return (
    <main className="bg-[var(--ink)] px-4 py-16 text-[var(--paper)] sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase">Cell Store / Pack Builder</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight">
          Design your battery pack: configure voltage, capacity, chemistry, and cell format.
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--graphite-on-dark)]">
          Select pack-level targets to generate a series/parallel configuration and visualize the layout.
        </p>

        <div className="mt-10">
          <CellConfigurator />
        </div>
      </div>
    </main>
  );
}
