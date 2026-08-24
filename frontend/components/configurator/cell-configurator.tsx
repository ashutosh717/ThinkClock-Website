"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SendButton } from "@/components/ui/send-button";

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
      <div className="rounded-[10px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-xl">
        <h2 className="font-display text-2xl font-bold text-[var(--paper)]">Battery Pack Builder</h2>
        <p className="mt-1.5 text-sm text-[var(--graphite-on-dark)]">
          Select pack voltage, capacity, chemistry, and cell format.
        </p>

        <div className="mt-6 space-y-6">
          <fieldset>
            <legend className="mb-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Pack Voltage Target
            </legend>
            <div className="flex flex-wrap gap-2">
              {PACK_VOLTAGES.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setPackVoltage(v)}
                  className={`rounded-[6px] px-3.5 py-1.5 font-mono text-xs font-semibold transition-all ${
                    packVoltage === v
                      ? "border border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)] shadow-md shadow-[var(--signal)]/20"
                      : "border border-[var(--border)] bg-[var(--secondary)] text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  {v}V
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Pack Capacity Target
            </legend>
            <div className="flex flex-wrap gap-2">
              {PACK_CAPACITIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setPackCapacity(c)}
                  className={`rounded-[6px] px-3.5 py-1.5 font-mono text-xs font-semibold transition-all ${
                    packCapacity === c
                      ? "border border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)] shadow-md shadow-[var(--signal)]/20"
                      : "border border-[var(--border)] bg-[var(--secondary)] text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  {c}Ah
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Battery Chemistry
            </legend>
            <div className="grid grid-cols-3 gap-2.5">
              {(Object.entries(CHEMISTRIES) as [Chemistry, (typeof CHEMISTRIES)[Chemistry]][]).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setChemistry(key)}
                  className={`rounded-[6px] px-3 py-2 text-center text-xs transition-all ${
                    chemistry === key
                      ? "border border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)] shadow-md shadow-[var(--signal)]/20 font-bold"
                      : "border border-[var(--border)] bg-[var(--secondary)] text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  <span className="font-semibold">{val.label}</span>
                  <span className="ml-1 font-mono text-[11px] opacity-80">{val.voltage}V</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-[var(--signal)] uppercase">
              Cell Format
            </legend>
            <div className="grid grid-cols-3 gap-2.5">
              {(Object.entries(CELL_TYPES) as [CellType, (typeof CELL_TYPES)[CellType]][]).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCellType(key)}
                  className={`rounded-[6px] px-3 py-2 text-center text-xs transition-all ${
                    cellType === key
                      ? "border border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)] shadow-md shadow-[var(--signal)]/20 font-bold"
                      : "border border-[var(--border)] bg-[var(--secondary)] text-[var(--paper)] hover:border-[var(--signal)]/60"
                  }`}
                >
                  <span className="font-semibold">{val.label}</span>
                  <span className="ml-1 font-mono text-[11px] opacity-80">{val.capacity}Ah</span>
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-8 pt-4 border-t border-[var(--border)] flex justify-end">
          <SendButton
            type="button"
            onClick={() => setTabOpen(true)}
            label="Procure your cell specification"
            variant="lab"
          />
        </div>
      </div>

      {/* ── Modal Specification Dialog ── */}
      {tabOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setTabOpen(false)} aria-hidden="true" />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pack-spec-title"
            className="relative z-10 mx-4 mt-16 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 shadow-2xl sm:mt-0"
          >
            <button
              type="button"
              onClick={() => setTabOpen(false)}
              aria-label="Close specification dialog"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-[6px] border border-[var(--border)] bg-[var(--secondary)] text-[var(--paper)] transition-all hover:border-[var(--signal)] hover:text-[var(--signal)]"
            >
              ✕
            </button>

            <h2 id="pack-spec-title" className="font-display text-2xl font-bold text-[var(--paper)]">
              Pack Specification Summary
            </h2>
            <p className="mt-1 text-xs text-[var(--graphite-on-dark)] sm:text-sm">
              Review generated series/parallel configuration and cell counts.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-[10px] border border-[var(--border)] bg-[var(--ink)] p-4 sm:grid-cols-4">
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[var(--signal)] uppercase">Pack Voltage</p>
                <p className="font-mono text-xl font-bold text-[var(--paper)]">{packVoltage}V</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[var(--signal)] uppercase">Pack Capacity</p>
                <p className="font-mono text-xl font-bold text-[var(--paper)]">{packCapacity}Ah</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[var(--signal)] uppercase">Chemistry</p>
                <p className="font-mono text-xl font-bold text-[var(--paper)]">{CHEMISTRIES[chemistry].label}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[var(--signal)] uppercase">Cell Format</p>
                <p className="font-mono text-xl font-bold capitalize text-[var(--paper)]">{cellType}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Series (S)" value={`${seriesCount}S`} />
              <Stat label="Parallel (P)" value={`${parallelCount}P`} />
              <Stat label="Total Cells" value={`${totalCells.toLocaleString()}`} />
              <Stat label="Energy" value={`${(totalEnergyWh / 1000).toFixed(1)} kWh`} />
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-[var(--graphite-on-dark)]">
              <span>Cell Rating: {cellVoltage}V &middot; {cellCapacity}Ah</span>
              <span>
                Actual Pack Output: {actualVoltage}V &middot; {actualCapacity}Ah
              </span>
            </div>

            {/* ── Pack Layout Visualization ── */}
            <div className="mt-5 rounded-[10px] border border-[var(--border)] bg-[var(--ink)] p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-sm font-bold text-[var(--paper)]">Grid Schematic</h3>
                <span className="font-mono text-xs font-semibold text-[var(--signal)]">
                  {seriesCount}S × {parallelCount}P = {totalCells.toLocaleString()} cells
                </span>
              </div>
              <BatteryPackGrid series={seriesCount} parallel={parallelCount} chemistry={chemistry} />
            </div>

            <div className="mt-6 flex justify-end">
              <SendButton href="/contact" label="Request Pack Quote" variant="lab" />
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
    <div className="rounded-[6px] border border-[var(--border)] bg-[var(--ink)] px-3.5 py-2.5">
      <p className="font-mono text-[10px] font-semibold tracking-wider text-[var(--signal)] uppercase">{label}</p>
      <p className="font-mono text-lg font-bold text-[var(--paper)]">{value}</p>
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
    return <p className="text-xs font-mono text-[var(--graphite-on-dark)]">Select values to see the pack layout.</p>;
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
