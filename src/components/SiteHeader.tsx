"use client";

import { useState } from "react";

const NAV = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="absolute inset-x-0 top-0 z-30">
      {/* Utility bar */}
      <div className="border-b border-white/10 bg-foreground/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-2.5 text-[11px] text-white/70 md:px-10">
          <p className="truncate">
            Transforming landscapes with over 25 years of expertise
          </p>
          <ul className="hidden items-center gap-6 lg:flex">
            <li>
              <a href="tel:+919000000000" className="hover:text-white">
                +91 90000 00000
              </a>
            </li>
            <li>
              <a href="mailto:hello@advika.build" className="hover:text-white">
                hello@advika.build
              </a>
            </li>
            <li>Plot 118, Sector 44, Gurugram 122003</li>
          </ul>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-on-accent">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 16a9 9 0 0 1 18 0" />
              <path d="M2 16h20v2H2z" />
              <path d="M10 7.6V16M14 7.6V16" />
            </svg>
          </span>
          <span className="leading-tight text-white">
            <span className="block text-lg font-bold tracking-tight">
              Advika
            </span>
            <span className="block text-[10px] tracking-[0.18em] text-white/60 uppercase">
              Construction
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8 text-[13px] font-medium text-white/85">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-accent px-6 py-3 text-[12px] font-semibold tracking-[0.08em] text-on-accent uppercase transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get a quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/25 text-white xl:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mx-6 border border-white/15 bg-foreground/95 backdrop-blur-sm md:mx-10 xl:hidden"
        >
          <ul className="divide-y divide-white/10 text-[14px] text-white">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3.5 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
