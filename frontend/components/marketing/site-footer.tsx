import Link from "next/link";
import Image from "next/image";
import thinkclockIcon from "@/images/thinkclock_logo.png";

const footerLinks = [
  {
    title: "Products",
    links: [
      { href: "/technology", label: "BatteryScope" },
      { href: "/technology", label: "CellScope" },
      { href: "/marketplace", label: "Cell Store" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[var(--ink)]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={thinkclockIcon}
                alt="ThinkClock"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-display text-sm leading-tight text-[var(--paper)]">
                  ThinkClock Battery Labs
                </span>
                <span className="font-mono text-xs leading-tight text-[var(--copper)]">
                  Sensing, Modelling, Analytics
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--graphite-on-dark)]">
              Battery diagnostics that make the invisible measurable. Innovate UK-backed R&D for measurable battery health.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-mono text-xs tracking-[0.12em] text-[var(--signal)] uppercase">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--graphite-on-dark)] transition-colors hover:text-[var(--signal)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-[var(--graphite)]">
          ThinkClock Battery Labs &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
