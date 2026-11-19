import Link from "next/link";
import Image from "next/image";
import thinkclockIcon from "@/images/thinkclock_logo.png";

const footerLinks = [
  {
    title: "Products",
    links: [
      { href: "/products", label: "Overview" },
      { href: "/products?tab=manual#product-detail", label: "BatteryScope-C Manual" },
      { href: "/products?tab=automated#product-detail", label: "BatteryScope-C Automated" },
      { href: "/products?tab=pack#product-detail", label: "BatteryScope-P" },
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
    <footer
      className="site-footer text-[#1A1A1A]"
      style={{
        backgroundColor: "#F5E4D0",
        color: "#1A1A1A",
        fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif',
      }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
        {/* ── Top Grid: Brand | Products | Company | Locations ── */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 transition-transform hover:scale-[1.01]">
              <Image
                src={thinkclockIcon}
                alt="ThinkClock"
                className="h-10 sm:h-11 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl leading-tight text-[#1A1A1A] font-bold tracking-tight">
                  ThinkClock Battery Labs
                </span>
                <span className="text-[11px] sm:text-xs leading-tight text-[#B3300A] font-bold mt-0.5 tracking-wide">
                  Sensing, Modelling, Analytics
                </span>
              </div>
            </Link>
            <p className="mt-2.5 max-w-sm text-[13.5px] sm:text-[14px] leading-snug text-[#4A4038]">
              Battery Characterization in Seconds. Not Hours. Innovate UK-backed R&amp;D organization focused on non-invasive spectroscopy, digital twins, and AI battery diagnostics.
            </p>
            <div className="mt-3.5 space-y-1.5">
              <a
                href="mailto:contact@thinkclock.com"
                className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-[#4A4038] transition-colors hover:text-[#B3300A]"
              >
                <svg className="h-3.5 w-3.5 shrink-0 text-[#B3300A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@thinkclock.com
              </a>
              <a
                href="mailto:bdc@thinkclock.com"
                className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-[#4A4038] transition-colors hover:text-[#B3300A]"
              >
                <svg className="h-3.5 w-3.5 shrink-0 text-[#B3300A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bdc@thinkclock.com
              </a>
              <a
                href="mailto:ajith@thinkclock.com"
                className="flex items-center gap-2 text-[13.5px] sm:text-[14px] font-semibold text-[#4A4038] transition-colors hover:text-[#B3300A]"
              >
                <svg className="h-3.5 w-3.5 shrink-0 text-[#B3300A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ajith@thinkclock.com
              </a>
            </div>
          </div>

          {/* Nav Groups */}
          {footerLinks.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h4 className="mb-2.5 text-xs tracking-[0.16em] text-[#B3300A] uppercase font-bold">
                {group.title}
              </h4>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] sm:text-[14px] font-semibold text-[#4A4038] transition-colors hover:text-[#B3300A] hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locations */}
          <div className="lg:col-span-4">
            <h4 className="mb-2.5 text-xs tracking-[0.16em] text-[#B3300A] uppercase font-bold">
              Global Locations
            </h4>
            <div className="space-y-3">
              {/* India HQ */}
              <div>
                <span className="text-[14px] sm:text-[14.5px] font-bold text-[#1A1A1A] block leading-tight">India HQ:</span>
                <p className="mt-0.5 text-[12.5px] sm:text-[13px] leading-snug text-[#4A4038]">
                  ThinkClock Battery Labs Pvt Ltd<br />
                  3rd floor, Confident Square Mall, Unit-301,<br />
                  Varthur–Sarjapur Rd, Dommasandra, Yamare, Bengaluru 562125
                </p>
                <a
                  href="tel:+919461160122"
                  className="mt-1 inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-bold text-[#B3300A] transition-colors hover:text-[#1A1A1A]"
                >
                  <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9461160122 · +91 9148104639
                </a>
              </div>

              {/* UK Office */}
              <div>
                <span className="text-[14px] sm:text-[14.5px] font-bold text-[#1A1A1A] block leading-tight">UK Office:</span>
                <p className="mt-0.5 text-[12.5px] sm:text-[13px] leading-snug text-[#4A4038]">
                  ThinkClock Ltd.<br />
                  Unit 100, Kingspark Business Centre,<br />
                  Kingston Rd, New Malden KT3 3ST, United Kingdom
                </p>
                <a
                  href="tel:+447773171072"
                  className="mt-1 inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-bold text-[#B3300A] transition-colors hover:text-[#1A1A1A]"
                >
                  <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +44 7773171072
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-7 border-t border-black/15 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] sm:text-[13px] font-medium text-[#4A4038]">
            ThinkClock Battery Labs &copy; {new Date().getFullYear()} · Sensing, Modelling, Analytics
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[12px] sm:text-[13px] font-semibold text-[#4A4038] hover:text-[#B3300A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12px] sm:text-[13px] font-semibold text-[#4A4038] hover:text-[#B3300A] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
