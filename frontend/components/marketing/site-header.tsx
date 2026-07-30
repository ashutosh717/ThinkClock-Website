"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import thinkclockIcon from "@/images/thinkclock_logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--ink)]/90 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]">
            <Image
              src={thinkclockIcon}
              alt="ThinkClock"
              className="h-10 w-10 rounded-lg object-cover transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[var(--signal)]/30"
              priority
            />
            <div className="flex flex-col">
              <span className="font-display text-sm leading-tight text-[var(--paper)] transition-all duration-300 group-hover:text-[var(--signal)]">
                ThinkClock Battery Labs
              </span>
              <span className="font-mono text-xs leading-tight text-[var(--copper)]">
                Sensing, Modelling, Analytics
              </span>
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-[var(--graphite-on-dark)] transition-all hover:bg-white/5 hover:text-[var(--signal)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/marketplace"
              className="ml-2 rounded-md bg-[var(--signal)] px-3 py-1.5 text-sm font-semibold text-[var(--ink)] transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[var(--signal)]/25"
            >
              Cell Store
            </Link>
            <div className="ml-4 flex items-center gap-1.5 border-l border-[var(--graphite)]/30 pl-4">
              <a
                href="https://www.linkedin.com/company/thinkclock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--graphite-on-dark)] transition-all hover:bg-white/5 hover:text-[var(--signal)]"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/thinkclock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--graphite-on-dark)] transition-all hover:bg-white/5 hover:text-[var(--signal)]"
                aria-label="X / Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-5 bg-[var(--paper)] transition-all duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-[var(--paper)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-[var(--paper)] transition-all duration-300 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[var(--ink)]/98 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-1 flex-col items-center justify-center gap-6" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-[var(--paper)] transition-colors hover:text-[var(--signal)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/marketplace"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-md bg-[var(--signal)] px-8 py-3 font-display text-xl font-semibold text-[var(--ink)]"
            >
              Cell Store
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}