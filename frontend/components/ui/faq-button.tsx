"use client";

import Link from "next/link";

export function FaqButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/faq"
      className={`inline-flex items-center gap-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--card)] px-2.5 py-1.5 font-mono text-xs font-semibold text-[var(--graphite-on-dark)] transition-all hover:border-[var(--signal)] hover:text-[var(--signal)] focus:outline-none focus:ring-1 focus:ring-[var(--signal)] ${className}`}
      aria-label="Frequently Asked Questions (FAQ)"
    >
      <svg className="h-3.5 w-3.5 text-[var(--signal)] shrink-0" viewBox="0 0 320 512" fill="currentColor">
        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
      </svg>
      <span>FAQ</span>
    </Link>
  );
}
