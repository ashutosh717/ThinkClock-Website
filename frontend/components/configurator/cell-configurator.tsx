"use client";

import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { API_BASE_URL } from "@/lib/api-base";

const schema = z.object({
  voltage: z.number().min(2.5).max(4.3),
  capacityAh: z.number().min(1).max(300),
  type: z.enum(["LFP", "NMC", "NCA"]),
  condition: z.enum(["any", "new", "recycled"]),
});

type ConfigValues = z.infer<typeof schema>;

type MatchState = "idle" | "loading" | "success" | "error";

type InventoryCell = {
  id: number;
  item_code: string;
  cell_type: "LFP" | "NMC" | "NCA";
  condition: "new" | "recycled";
  voltage: number;
  capacity_ah: number;
  soh_percent: number;
  price_gbp: number;
};

export function CellConfigurator() {
  const [state, setState] = useState<MatchState>("idle");
  const [statusMessage, setStatusMessage] = useState("Tune values, then run a match.");
  const [results, setResults] = useState<InventoryCell[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfigValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      voltage: 3.7,
      capacityAh: 50,
      type: "NMC",
      condition: "any",
    },
  });

  const onSubmit = async (values: ConfigValues) => {
    setState("loading");
    setStatusMessage("Evaluating impedance-compatible inventory...");

    try {
      const matches = await matchMutation.mutateAsync(values);
      setResults(matches);

      if (matches.length === 0) {
        setState("error");
        setStatusMessage("No cells match this configuration yet. Try widening your voltage range or lowering target capacity.");
        return;
      }

      setState("success");
      setStatusMessage(`Matched ${matches.length} inventory item${matches.length > 1 ? "s" : ""}.`);
    } catch {
      setState("error");
      setStatusMessage("Unable to fetch inventory right now. Please retry.");
      setResults([]);
    }
  };

  const matchMutation = useMutation({
    mutationFn: async (values: ConfigValues): Promise<InventoryCell[]> => {
      const params = new URLSearchParams({
        cell_type: values.type,
        condition: values.condition,
        voltage: values.voltage.toString(),
        capacity_ah: values.capacityAh.toString(),
      });

      const response = await fetch(`${API_BASE_URL}/api/cell-inventory/matches/search?${params}`);
      if (!response.ok) {
        throw new Error("Inventory query failed.");
      }

      return (await response.json()) as InventoryCell[];
    },
  });

  const totalEstimatedPrice = useMemo(
    () => results.reduce((sum, item) => sum + item.price_gbp, 0),
    [results],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-[var(--graphite)]/35 bg-[#0f1413] p-6"
      >
        <h2 className="font-display text-2xl text-[var(--paper)]">Configure target cell profile</h2>
        <p className="mt-2 text-sm text-[var(--graphite-on-dark)]">
          Match inventory by chemistry, operating voltage, capacity, and new/recycled condition.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="voltage" className="mb-2 block font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Target voltage (V)
            </label>
            <input
              id="voltage"
              type="number"
              step="0.01"
              {...register("voltage", { valueAsNumber: true })}
              className="font-mono w-full rounded-md border border-[var(--graphite)]/55 bg-black/25 px-3 py-2 text-[var(--paper)]"
            />
            {errors.voltage && <p className="mt-1 text-sm text-[var(--alert)]">{errors.voltage.message}</p>}
          </div>

          <div>
            <label htmlFor="capacityAh" className="mb-2 block font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Target capacity (Ah)
            </label>
            <input
              id="capacityAh"
              type="number"
              step="0.1"
              {...register("capacityAh", { valueAsNumber: true })}
              className="font-mono w-full rounded-md border border-[var(--graphite)]/55 bg-black/25 px-3 py-2 text-[var(--paper)]"
            />
            {errors.capacityAh && <p className="mt-1 text-sm text-[var(--alert)]">{errors.capacityAh.message}</p>}
          </div>

          <div>
            <label htmlFor="type" className="mb-2 block font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">
              Cell type
            </label>
            <select
              id="type"
              {...register("type")}
              className="font-mono w-full rounded-md border border-[var(--graphite)]/55 bg-black/25 px-3 py-2 text-[var(--paper)]"
            >
              <option value="LFP">LFP</option>
              <option value="NMC">NMC</option>
              <option value="NCA">NCA</option>
            </select>
          </div>

          <fieldset>
            <legend className="mb-2 block font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">Condition</legend>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--paper)]">
              <label className="flex items-center gap-2">
                <input type="radio" value="any" {...register("condition")} /> Any
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="new" {...register("condition")} /> New
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="recycled" {...register("condition")} /> Recycled
              </label>
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="mt-6 rounded-md bg-[var(--signal)] px-5 py-2 font-semibold text-[var(--ink)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "loading" ? "Matching..." : "Match cells"}
        </button>
      </form>

      <section className="rounded-2xl border border-[var(--graphite)]/35 bg-[var(--paper)] p-6 text-[var(--ink)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl">Matched inventory</h3>
            <p className="mt-2 text-sm text-[var(--graphite)]">{statusMessage}</p>
          </div>
          <div className="rounded-md bg-[var(--ink)] px-3 py-2 text-right">
            <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--signal)] uppercase">Estimated bundle</p>
            <p className="font-mono text-sm text-[var(--paper)]">GBP {totalEstimatedPrice.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto rounded-lg border border-[var(--graphite)]/25 bg-white">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-[#eef2ef] text-xs uppercase tracking-[0.12em] text-[var(--graphite)]">
              <tr>
                <th className="px-3 py-2">Cell ID</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Condition</th>
                <th className="px-3 py-2">Voltage</th>
                <th className="px-3 py-2">Capacity</th>
                <th className="px-3 py-2">SoH</th>
                <th className="px-3 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {results.map((cell) => (
                <tr key={cell.id} className="border-t border-[var(--graphite)]/20">
                  <td className="px-3 py-2 font-mono">{cell.item_code}</td>
                  <td className="px-3 py-2">{cell.cell_type}</td>
                  <td className="px-3 py-2 capitalize">{cell.condition}</td>
                  <td className="px-3 py-2 font-mono">{cell.voltage.toFixed(2)} V</td>
                  <td className="px-3 py-2 font-mono">{cell.capacity_ah.toFixed(1)} Ah</td>
                  <td className="px-3 py-2 font-mono">{cell.soh_percent.toFixed(0)}%</td>
                  <td className="px-3 py-2 font-mono">GBP {cell.price_gbp.toFixed(2)}</td>
                </tr>
              ))}
              {results.length === 0 && state !== "loading" && (
                <tr>
                  <td className="px-3 py-5 text-sm text-[var(--graphite)]" colSpan={7}>
                    Run a match to populate inventory results.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
