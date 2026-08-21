import Link from "next/link";
import Image from "next/image";
import thinkclockIcon from "@/images/thinkclock_logo.png";

const footerLinks = [
  {
    title: "Products",
    links: [
      { href: "/products", label: "Overview" },
      { href: "/products", label: "BatteryScope-C Manual" },
      { href: "/products", label: "BatteryScope-C Automated" },
      { href: "/products", label: "BatteryScope-P" },
      { href: "/marketplace", label: "Cell Store" },
    ],
  },
  {
    title: "Company & Tech",
    links: [
      { href: "/technology", label: "Technology Platform" },
      { href: "/about", label: "About ThinkClock" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={thinkclockIcon}
                alt="ThinkClock"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-display text-base leading-tight text-[var(--paper)] font-bold">
                  ThinkClock Battery Labs
                </span>
                <span className="font-mono text-xs leading-tight text-[var(--copper)] font-semibold">
                  Sensing, Modelling, Analytics
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--graphite-on-dark)]">
              Battery Characterization in Seconds. Not Hours. Innovate UK-backed R&D organization focused on non-invasive spectroscopy, digital twins, and AI battery diagnostics.
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-sm font-mono text-[var(--paper)] font-medium">
              <span>📧 contact@thinkclock.com</span>
              <span>📧 ajith@thinkclock.com</span>
            </div>
          </div>

          {/* Nav Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase font-semibold">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-[var(--graphite-on-dark)] transition-colors hover:text-[var(--signal)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locations & Phone Contact */}
          <div>
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[var(--signal)] uppercase font-semibold">
              Global Locations
            </h4>
            <div className="space-y-5 text-sm text-[var(--graphite-on-dark)]">
              <div>
                <span className="font-bold text-[var(--paper)]">India HQ:</span>
                <p className="mt-1 leading-relaxed">
                  ThinkClock Battery Labs Pvt Ltd<br />
                  3rd floor, Confident Square Mall, Unit-301, Varthur–Sarjapur Rd, Dommasandra, Yamare, Bengaluru, Karnataka 562125
                </p>
                <p className="mt-2 font-mono text-xs font-semibold text-[var(--copper)]">
                  📞 +91 9461160122 · +91 9148104639
                </p>
              </div>
              <div>
                <span className="font-bold text-[var(--paper)]">UK Office:</span>
                <p className="mt-1 leading-relaxed">
                  ThinkClock Ltd.<br />
                  Unit 100, Kingspark Business Centre, Kingston Rd, New Malden KT3 3ST, United Kingdom
                </p>
                <p className="mt-2 font-mono text-xs font-semibold text-[var(--copper)]">
                  📞 +44 7773171072
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--graphite)] font-medium">
          <p>ThinkClock Battery Labs &copy; {new Date().getFullYear()} • Sensing, Modelling, Analytics</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--signal)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--signal)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
