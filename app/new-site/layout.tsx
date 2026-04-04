"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const navLinks = [
  { label: "Home", href: "/new-site" },
  { label: "Our Story", href: "/new-site/our-story" },
  { label: "Amenities", href: "/new-site/amenities" },
  { label: "Volunteer", href: "/new-site/be-a-volunteer" },
  { label: "Donate", href: "/new-site/donate" },
  { label: "Contact", href: "/new-site/contact" },
  { label: "FAQs", href: "/new-site/faqs" },
];

const centersDropdown = [
  { label: "Royapettah", href: "/new-site/royapettah" },
  { label: "Vichur (Thirunilai)", href: "/new-site/vichur" },
];

const aboutDropdown = [
  { label: "Trustees", href: "/new-site/trustees" },
  { label: "Infrastructure", href: "/new-site/infrastructure" },
  { label: "Appeal", href: "/new-site/appeal" },
];

const updatesDropdown = [
  { label: "Pulse", href: "/new-site/pulse" },
  { label: "2025", href: "/new-site/2025" },
  { label: "Reports", href: "/new-site/reports" },
];

function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors py-1"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-blue-100 py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NewSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});

  function toggleMobileDropdown(key: string) {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/new-site" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Anbagam Logo"
              width={44}
              height={44}
              className="w-11 h-11 object-contain flex-shrink-0"
            />
            <div>
              <p className="font-bold text-blue-900 text-base leading-tight tracking-widest uppercase">
                Anbagam
              </p>
              <p className="text-xs text-blue-500 font-medium leading-tight">
                An Initiative By TERDOD
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu label="Centers" items={centersDropdown} />
            <DropdownMenu label="About Us" items={aboutDropdown} />
            <DropdownMenu label="Updates" items={updatesDropdown} />
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.label === "Donate"
                    ? "text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors"
                    : "text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-blue-100 bg-white px-4 py-3 flex flex-col gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Centers */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("centers")}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Centers
                <svg className={`w-3.5 h-3.5 transition-transform ${mobileDropdowns.centers ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.centers && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {centersDropdown.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="py-1.5 px-3 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* About Us */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("about")}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                About Us
                <svg className={`w-3.5 h-3.5 transition-transform ${mobileDropdowns.about ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.about && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {aboutDropdown.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="py-1.5 px-3 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Updates */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("updates")}
                className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Updates
                <svg className={`w-3.5 h-3.5 transition-transform ${mobileDropdowns.updates ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.updates && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {updatesDropdown.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="py-1.5 px-3 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  link.label === "Donate"
                    ? "py-2 px-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center"
                    : "py-2 px-3 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
