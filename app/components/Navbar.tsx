"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Stats", href: "#stats", id: "stats" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Accredian Edge", href: "#edge", id: "edge" },
  { label: "CAT", href: "#cat", id: "cat" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "FAQs", href: "#faqs", id: "faqs" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map(link =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    sections.forEach(section => {
      if(section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if(section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="#home"
            className="flex flex-col leading-none"
          >
            <span className="text-2xl font-bold text-blue-600 tracking-tight">
              accredian
            </span>
            <span className="text-[10px] text-gray-500 tracking-wide">
              credentials that matter
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link)=>(
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-all border-b-2
                ${
                  active === link.id
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-700 border-transparent hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <button
            onClick={()=>setOpen(!open)}
            className="md:hidden p-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden py-3 flex flex-col gap-1 border-t border-gray-100">
            {links.map((link)=>(
              <Link
                key={link.label}
                href={link.href}
                onClick={()=>setOpen(false)}
                className={`px-4 py-2 rounded text-sm
                ${
                  active===link.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}