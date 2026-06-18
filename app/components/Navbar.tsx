"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
  href="/"
  className="text-3xl font-bold text-[#0176D3] transition duration-300 hover:scale-105 hover:text-[#032D60]"
>
  SalesFluance
</Link>

        {navLinks.map((link) => (
  <Link
    key={link.name}
    href={link.href}
    className={`relative group font-medium transition duration-300 ${
      pathname === link.href
        ? "text-[#0176D3]"
        : "text-gray-700 hover:text-[#0176D3]"
    }`}
  >
    {link.name}

    <span
      className={`absolute -bottom-1 left-0 h-0.5 bg-[#0176D3] transition-all duration-300 ${
        pathname === link.href
          ? "w-full"
          : "w-0 group-hover:w-full"
      }`}
    />
  </Link>
))}

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="rounded-xl bg-[#0176D3] px-5 py-2.5 text-white font-medium shadow-md transition hover:bg-[#032D60]">
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}