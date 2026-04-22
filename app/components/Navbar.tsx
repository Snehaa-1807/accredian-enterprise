"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-blue-600 tracking-tight">accredian</span>
            <span className="text-[10px] text-gray-500 tracking-wide">credentials that matter</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                  active === l.label
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-3 flex flex-col gap-1 border-t border-gray-100">
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => { setActive(l.label); setOpen(false); }}
                className="px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
