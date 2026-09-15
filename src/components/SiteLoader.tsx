"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Never let the loader outlive the page — if `load` is slow or never fires,
// this is the hard ceiling after which the site is shown regardless.
const SAFETY_MS = 4000;
const MIN_VISIBLE_MS = 700;
const FADE_MS = 600;

export default function SiteLoader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let safety: number;
    let minimum: number;

    const finish = () => {
      // Hold briefly so a fast load does not flash the loader on and off.
      minimum = window.setTimeout(() => setLeaving(true), MIN_VISIBLE_MS);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      safety = window.setTimeout(() => setLeaving(true), SAFETY_MS);
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(safety);
      window.clearTimeout(minimum);
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setRemoved(true), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  // Hold the page still underneath while the curtain is up.
  useEffect(() => {
    if (removed) return;
    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previous;
    };
  }, [removed]);

  if (removed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading AdviconIN"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-[600ms] ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Blueprint grid, same motif as the site */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#06101f_1px,transparent_1px),linear-gradient(to_bottom,#06101f_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl"
      />

      <div className="relative flex flex-col items-center">
        {/* The logo exactly as supplied, on its own navy */}
        <span className="loader-mark block overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(6,16,31,0.28)]">
          <Image
            src="/logo-card.png"
            alt="AdviconIN — Passion at building your dream"
            width={1200}
            height={1094}
            priority
            unoptimized
            className="h-auto w-[min(260px,68vw)]"
          />
        </span>

        {/* Progress rail */}
        <span
          aria-hidden
          className="mt-8 block h-[3px] w-[200px] overflow-hidden bg-line"
        >
          <span className="loader-bar block h-full w-full bg-accent" />
        </span>
      </div>
    </div>
  );
}
