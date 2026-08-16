import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

// Reuses the exact brand lockup from the nav — same mark, same
// "Sales" + cyan "Fluance" wordmark, at a confident size since this
// is the last brand touchpoint on the page.
import Logo from "@/components/brand/Logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Demand Generation", href: "/services/demand-generation" },
  { label: "Account-Based Marketing", href: "/services/account-based-marketing" },
];

// "Technology" -> "IT Services" to match the label used on About/Industries.
const industryLinks = [
  { label: "SaaS", href: "/industries/saas" },
  { label: "IT Services", href: "/industries/it-services" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Finance", href: "/industries/finance" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
];

export default function Footer() {
  return (
    // Aligned to the site's locked Ink Black token (#0A0E14) — this
    // file previously used a close-but-different #07111F.
    <footer className="bg-[#0A0E14] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Logo
  variant="full"
  size="lg"
  className="text-white"
/>

            <p className="mt-6 max-w-sm text-base leading-7 text-slate-400">
              B2B growth built around intelligence, execution,
              verification, and stronger revenue relationships.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>hello@salesfluance.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>India · Serving B2B businesses globally</span>
              </div>
            </div>

            {/* Social — made intentional: icon and destination now match
                (mailto:), rather than a Mail icon under a LinkedIn label.
                Swap in a real LinkedIn icon + URL once one exists rather
                than linking to a page that isn't real yet. */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="mailto:hello@salesfluance.com"
                aria-label="Email SalesFluance"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E2530] text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Services
            </p>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-6 text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries — already real Link elements; label fixed above */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Industries
            </p>

            <ul className="mt-6 space-y-4">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FLUANZ / CTA — kept exactly as the closing element, per your
            instruction. Border token aligned to the site's white/10
            internal-panel convention (was border-slate-700). */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1B2D]">
          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                FLUANZ
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Turn commercial signals into revenue.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                SalesFluance combines human expertise, intelligent
                systems, verified data, and disciplined execution
                to help B2B businesses build a stronger revenue pipeline.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book Discovery Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar — border token aligned to #1E2530 (was slate-800) */}
      <div className="border-t border-[#1E2530]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 SalesFluance. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/privacy-policy/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}