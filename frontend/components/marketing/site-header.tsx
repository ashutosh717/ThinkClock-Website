"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import thinkclockIcon from "@/images/thinkclock_logo.png";

import { FaqButton } from "@/components/ui/faq-button";
import { useTheme } from "@/components/providers/theme-provider";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function ThemeToggleButton() {
  const { theme, toggle } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="inline-block h-[1.8em] w-[3.2em] rounded-[30px] border border-[rgba(91,102,99,0.35)] bg-[var(--secondary)]" />
    );
  }

  return (
    <label
      className="theme-switch"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggle}
        aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      />
      <span className="theme-slider" />
    </label>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
        <div className="flex w-full items-center justify-between px-4 py-2.5 sm:px-8 sm:py-3 lg:px-16">
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-4 transition-all duration-300 hover:scale-[1.02] max-w-[75%] sm:max-w-none">
            <Image
              src={thinkclockIcon}
              alt="ThinkClock"
              className="h-10 sm:h-14 lg:h-16 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display text-base sm:text-xl lg:text-2xl font-bold leading-tight tracking-tight text-[var(--paper)] truncate transition-colors duration-300 group-hover:text-[var(--signal)]">
                ThinkClock Battery Labs
              </span>
              <span className="font-mono text-[10px] sm:text-xs lg:text-[13px] font-semibold leading-tight text-[var(--copper)] truncate">
                Sensing, Modelling, Analytics
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-1.5 lg:flex lg:gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wide transition-all rounded-[6px] px-3 py-1.5 ${
                  isActive(link.href)
                    ? "bg-[var(--secondary)] text-[var(--signal)] border border-[rgba(91,102,99,0.45)]"
                    : "text-[var(--graphite-on-dark)] hover:text-[var(--paper)] hover:bg-white/5"
                }`}
              >
                <span>{link.label}</span>
              </Link>
            ))}
            <FaqButton className="ml-1" />
            <div className="ml-2.5 flex items-center gap-1.5 border-l border-[rgba(91,102,99,0.35)] pl-2.5">
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
              <div className="ml-1">
                <ThemeToggleButton />
              </div>
            </div>
          </nav>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggleButton />
            <button
              type="button"
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[8px] border border-[var(--border)] bg-[var(--card)] p-2 transition-colors hover:border-[var(--signal)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-0.5 w-5 bg-[var(--paper)] transition-all duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-[var(--paper)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-[var(--paper)] transition-all duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[var(--ink)]/98 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-1 flex-col items-center justify-center gap-5 px-6 pt-16 pb-8" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display text-2xl font-bold transition-colors ${
                  isActive(link.href) ? "text-[var(--signal)]" : "text-[var(--paper)] hover:text-[var(--signal)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold text-[var(--paper)] transition-colors hover:text-[var(--signal)]"
            >
              FAQ
            </Link>

            <div className="mt-6 flex items-center gap-4 pt-6 border-t border-[var(--border)] w-full max-w-xs justify-center">
              <a
                href="https://www.linkedin.com/company/thinkclock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--card)] text-[var(--paper)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/thinkclock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--card)] text-[var(--paper)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
                aria-label="X / Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}