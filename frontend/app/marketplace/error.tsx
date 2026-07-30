"use client";

export default function MarketplaceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-[var(--ink)] px-4 py-16 text-[var(--paper)] sm:px-6">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-[var(--alert)]/40 bg-black/25 p-6">
        <h1 className="font-display text-3xl">Configurator interrupted</h1>
        <p className="mt-3 text-[var(--graphite-on-dark)]">
          {error.message || "Something unexpected happened while preparing inventory matches."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-5 rounded-md bg-[var(--signal)] px-5 py-2 font-semibold text-[var(--ink)]"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
