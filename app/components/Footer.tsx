"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F3F] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-extrabold">
              Sales<span className="text-orange-500">Fluance</span>
            </h2>

            <p className="mt-2 font-medium text-sky-300">
              AI-Powered B2B Growth Partner
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Helping ambitious businesses generate qualified leads,
              build strategic partnerships, and accelerate predictable
              revenue growth through modern B2B strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/process" className="hover:text-orange-400 transition">
                  Process
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Our Services
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>Lead Generation</li>
              <li>Demand Generation</li>
              <li>Email Marketing</li>
              <li>AI Outreach</li>
              <li>Market Expansion</li>
              <li>Strategic Partnerships</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5 text-slate-300">

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+91 8329611844</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>hello@salesfluance.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-orange-500" />
                <span>salesfluance.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/company/salesfluance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-orange-500 hover:bg-white/10"
              >
                Visit our LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-center text-sm text-slate-400 md:flex-row">

          <p>
            © 2026 SalesFluance. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
          </div>

          <p>
            Built with ❤️ in Pune, India
          </p>

        </div>
      </div>
    </footer>
  );
}