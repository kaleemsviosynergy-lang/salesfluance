"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#0A1F3F] lg:text-3xl"
        >
          SalesFluance
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-slate-700 hover:text-[#0A1F3F] transition">
            Home
          </Link>

          <Link href="/about" className="text-slate-700 hover:text-[#0A1F3F] transition">
            About
          </Link>

          <Link href="/services" className="text-slate-700 hover:text-[#0A1F3F] transition">
            Services
          </Link>

          <Link href="/process" className="text-slate-700 hover:text-[#0A1F3F] transition">
            Process
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-[#E85D26] px-6 py-3 font-semibold text-white transition hover:bg-[#F2783F]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Button */}
        <button
  onClick={() => {
    alert("Button Clicked");
    setIsOpen(!isOpen);
  }}
  className="md:hidden"
>
          {isOpen ? (
            <X className="h-8 w-8 text-[#0A1F3F]" />
          ) : (
            <Menu className="h-8 w-8 text-[#0A1F3F]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-6 py-6">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg text-slate-700"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg text-slate-700"
            >
              Services
            </Link>

            <Link
              href="/process"
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg text-slate-700"
            >
              Process
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-lg bg-[#E85D26] py-3 text-center font-semibold text-white"
            >
              Book a Call
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}