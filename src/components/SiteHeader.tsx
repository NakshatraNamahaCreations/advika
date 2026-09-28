"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Homepage sections are linked with a leading "/" so they also work from
// inner pages such as /about.
const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Our Team", href: "/about#team" },
  { label: "Contact Us", href: "/#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5">
        <Link href="/" aria-label="AdviconIN home" className="block shrink-0">
          <Image
            src="/logo-full.png"
            alt="AdviconIN — Passion at building your dream"
            width={900}
            height={808}
            preload
            unoptimized
            className="h-20 w-auto md:h-24 lg:h-28"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-white/85 xl:gap-9">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-foreground transition-colors hover:bg-accent hover:text-on-accent sm:inline-block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm lg:hidden"
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
          className="mx-6 overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.3)] md:mx-10 lg:hidden"
        >
          <ul className="divide-y divide-line text-[15.5px] font-medium text-foreground">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3.5 transition-colors hover:bg-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="sm:hidden">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block px-5 py-3.5 font-semibold text-ink transition-colors hover:bg-surface"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
