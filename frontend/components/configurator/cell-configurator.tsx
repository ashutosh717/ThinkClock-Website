"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const CHEMISTRIES = {
  LFP: { label: "LFP", voltage: 3.2, color: "#5CE1C9", text: "Safe, long cycle life" },
  NMC: { label: "NMC", voltage: 3.7, color: "#C97A4A", text: "High energy density" },
  NCA: { label: "NCA", voltage: 3.7, color: "#4A9AC9", text: "High specific energy" },
} as const;

const CELL_TYPES = {
  cylindrical: { label: "Cylindrical", capacity: 3 },
  prismatic: { label: "Prismatic", capacity: 50 },
  pouch: { label: "Pouch", capacity: 30 },
} as const;

const PACK_VOLTAGES = [12, 24, 36, 48, 72, 96];
const PACK_CAPACITIES = [10, 20, 50, 100, 200, 500];

type Chemistry = keyof typeof CHEMISTRIES;
type CellType = keyof typeof CELL_TYPES;

export function CellConfigurator() {
  const [packVoltage, setPackVoltage] = useState(48);
  const [packCapacity, setPackCapacity] = useState(100);
  const [chemistry, setChemistry] = useState<Chemistry>("LFP");
  const [cellType, setCellType] = useState<CellType>("prismatic");
  const [tabOpen, setTabOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const cellVoltage = CHEMISTRIES[chemistry].voltage;
  const cellCapacity = CELL_TYPES[cellType].capacity;

  const seriesCount = useMemo(() => Math.ceil(packVoltage / cellVoltage), [packVoltage, cellVoltage]);
  const parallelCount = useMemo(() => Math.ceil(packCapacity / cellCapacity), [packCapacity, cellCapacity]);
  const actualVoltage = seriesCount * cellVoltage;
  const actualCapacity = parallelCount * cellCapacity;
  const totalCells = seriesCount * parallelCount;
  const totalEnergyWh = actualVoltage * actualCapacity;

  useEffect(() => {
    if (tabOpen && panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, [tabOpen]);

  useEffect(() => {
    if (!tabOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTabOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [tabOpen]);

  return (
    <>
      <div className="rounded-2xl border border-[var(--graphite)]/35 bg-[#0f1413] p-6">
        <h2 className="font-display text-2xl text-[var(--paper)]">Battery Pack Builder</h2>
        <p className="mt-2 text-sm text-[var(--graphite-on-dark)]">
          Select pack voltage, capacity, chemistry, and cell format.
        </p>

        <div className="mt-6 space-y-6">
          <fieldset>
            <legend className="mb-2 font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Pack Voltage
            </legend>
            <div className="flex flex-wrap gap-2">
              {PACK_VOLTAGES.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setPackVoltage(v)}
                  className={`rounded-md px-3 py-1.5 text-sm font-mono transition ${
                    packVoltage === v
                      ? "bg-[var(--signal)] text-[var(--ink)]"
                      : "border border-[var(--graphite)]/55 text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  {v}V
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Pack Capacity
            </legend>
            <div className="flex flex-wrap gap-2">
              {PACK_CAPACITIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setPackCapacity(c)}
                  className={`rounded-md px-3 py-1.5 text-sm font-mono transition ${
                    packCapacity === c
                      ? "bg-[var(--signal)] text-[var(--ink)]"
                      : "border border-[var(--graphite)]/55 text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  {c}Ah
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Battery Chemistry
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {(Object.entries(CHEMISTRIES) as [Chemistry, (typeof CHEMISTRIES)[Chemistry]][]).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setChemistry(key)}
                  className={`rounded-md px-2 py-2 text-center text-sm transition ${
                    chemistry === key
                      ? "bg-[var(--signal)] text-[var(--ink)]"
                      : "border border-[var(--graphite)]/55 text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  <span className="font-semibold">{val.label}</span>
                  <span className="ml-1 font-mono text-xs opacity-70">{val.voltage}V</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Cell Type
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {(Object.entries(CELL_TYPES) as [CellType, (typeof CELL_TYPES)[CellType]][]).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCellType(key)}
                  className={`rounded-md px-2 py-2 text-center text-sm transition ${
                    cellType === key
                      ? "bg-[var(--signal)] text-[var(--ink)]"
                      : "border border-[var(--graphite)]/55 text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  <span className="font-semibold">{val.label}</span>
                  <span className="ml-1 font-mono text-xs opacity-70">{val.capacity}Ah</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <button
          type="button"
          onClick={() => setTabOpen(true)}
          className="mt-6 w-full rounded-md bg-[var(--signal)] px-5 py-2.5 font-semibold text-[var(--ink)] transition hover:brightness-95"
        >
          Procure your cell
        </button>
      </div>

      {/* ── Modal ── */}
      {tabOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setTabOpen(false)} />

          <div
            ref={panelRef}
            className="relative z-10 mx-4 mt-16 max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--graphite)]/35 bg-[#0f1413] p-6 shadow-2xl sm:mt-0"
          >
            <button
              type="button"
              onClick={() => setTabOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--graphite)]/40 text-[var(--graphite-on-dark)] transition hover:border-[var(--signal)] hover:text-[var(--signal)]"
            >
              ✕
            </button>

            <h2 className="font-display text-2xl text-[var(--paper)]">Pack Specification</h2>
            <p className="mt-1 text-sm text-[var(--graphite-on-dark)]">Review your configuration and cell count.</p>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-[var(--graphite)]/25 bg-black/20 p-4 sm:grid-cols-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--signal)] uppercase">Pack Voltage</p>
                <p className="font-display text-2xl text-[var(--paper)]">{packVoltage}V</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--signal)] uppercase">Pack Capacity</p>
                <p className="font-display text-2xl text-[var(--paper)]">{packCapacity}Ah</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--signal)] uppercase">Chemistry</p>
                <p className="font-display text-2xl text-[var(--paper)]">{CHEMISTRIES[chemistry].label}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--signal)] uppercase">Cell Type</p>
                <p className="font-display text-2xl capitalize text-[var(--paper)]">{cellType}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Series (S)" value={`${seriesCount}S`} />
              <Stat label="Parallel (P)" value={`${parallelCount}P`} />
              <Stat label="Total Cells" value={`${totalCells.toLocaleString()}`} />
              <Stat label="Energy" value={`${(totalEnergyWh / 1000).toFixed(1)} kWh`} />
            </div>

            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--graphite-on-dark)]">
              <span>Cell: {cellVoltage}V &middot; {cellCapacity}Ah</span>
              <span>
                Pack: {actualVoltage}V &middot; {actualCapacity}Ah
              </span>
            </div>

            {/* ── Pack Layout Visualization ── */}
            <div className="mt-5 rounded-xl border border-[var(--graphite)]/25 bg-black/20 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-base text-[var(--paper)]">Pack Layout</h3>
                <span className="font-mono text-xs text-[var(--graphite-on-dark)]">
                  {seriesCount}S × {parallelCount}P = {totalCells.toLocaleString()} cells
                </span>
              </div>
              <BatteryPackGrid series={seriesCount} parallel={parallelCount} chemistry={chemistry} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── sub-components ── */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-[#eef2ef] px-3 py-2">
      <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--graphite)] uppercase">{label}</p>
      <p className="font-display text-xl text-[var(--ink)]">{value}</p>
    </div>
  );
}

/* ── Battery Cell SVG ── */

function CellIcon({ label, color, size = 36 }: { label: string; color: string; size?: number }) {
  const pad = 1;
  const w = size - pad * 2;
  const bodyH = w * 0.75;
  const bodyY = (size - bodyH) / 2;
  const rx = w * 0.18;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect
        x={pad}
        y={bodyY}
        width={w}
        height={bodyH}
        rx={rx}
        fill={`${color}18`}
        stroke={color}
        strokeWidth={1}
      />
      <text
        x={size / 2}
        y={size / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize={size * 0.2}
        fontFamily="var(--font-mono, monospace)"
        fontWeight={700}
      >
        {label}
      </text>
    </svg>
  );
}

/* ── Battery Pack Grid ── */

function BatteryPackGrid({
  series,
  parallel,
  chemistry,
}: {
  series: number;
  parallel: number;
  chemistry: Chemistry;
}) {
  const color = CHEMISTRIES[chemistry].color;
  const cellSize = 56;
  const labelColW = 40;
  const headerRowH = 28;
  const gap = 8;

  if (series === 0 || parallel === 0) {
    return <p className="text-sm text-[var(--graphite-on-dark)]">Select values to see the pack layout.</p>;
  }

  return (
    <div className="overflow-auto">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `${labelColW}px repeat(${parallel}, ${cellSize}px)`,
          gridTemplateRows: `${headerRowH}px repeat(${series}, ${cellSize}px)`,
          gap: `${gap}px`,
          width: `${labelColW + parallel * (cellSize + gap) - gap}px`,
        }}
      >
        {/* corner */}
        <div />

        {/* P headers */}
        {Array.from({ length: parallel }).map((_, p) => (
          <div
            key={`ph${p}`}
            className="flex items-end justify-center font-mono text-xs leading-none text-[var(--graphite-on-dark)]"
            style={{ gridRow: 1, gridColumn: p + 2, paddingBottom: 3 }}
          >
            P{p + 1}
          </div>
        ))}

        {/* rows */}
        {Array.from({ length: series }).flatMap((_, s) => [
          // S label
          <div
            key={`sl${s}`}
            className="flex items-center justify-end font-mono text-xs leading-none text-[var(--graphite-on-dark)]"
            style={{ gridRow: s + 2, gridColumn: 1, paddingRight: 6 }}
          >
            S{s + 1}
          </div>,

          // cells in this row
          ...Array.from({ length: parallel }).map((_, p) => (
            <div
              key={`c${s}-${p}`}
              className="relative"
              style={{ gridRow: s + 2, gridColumn: p + 2 }}
            >
              <CellIcon label={`S${s + 1}`} color={color} size={cellSize} />
              {/* series connector dot below */}
              {s < series - 1 && (
                <div className="pointer-events-none absolute -bottom-[5px] left-1/2 z-10 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[var(--graphite)]/40" />
              )}
            </div>
          )),
        ])}
      </div>
    </div>
  );
}
