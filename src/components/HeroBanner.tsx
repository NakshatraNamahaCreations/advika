"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  title: string;
  eyebrow: string;
  solid: string;
  outline: string;
  body: string;
  image: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    title: "Residential contracting",
    eyebrow: "Leading global builder and developer",
    solid: "Your Dream",
    outline: "Building",
    body: "Design-led general contracting for residential, commercial and industrial projects — delivered by in-house crews on a fixed schedule.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1900&q=80",
    alt: "Excavators working across an active construction site",
  },
  {
    title: "Turnkey design & build",
    eyebrow: "Turnkey design and build contracts",
    solid: "Built To",
    outline: "Endure",
    body: "Structure, MEP and interiors under one contract, one programme and one accountable site team, from groundworks through to handover.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1900&q=80",
    alt: "Engineers reviewing drawings on a building site",
  },
  {
    title: "Landmark projects",
    eyebrow: "Twenty five years on site",
    solid: "We Raise",
    outline: "Landmarks",
    body: "Over 400 completed projects across nine states, with safety records and handover dates we publish rather than promise.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1900&q=80",
    alt: "Workers on a high rise construction site at dusk",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Hovering a control should hold the slide; hovering the photo should not.
  const holdOnHover = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };
  const slide = SLIDES[index];

  const go = useCallback((step: number) => {
    setIndex((i) => (i + step + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    // Hold on the current slide for anyone who has asked for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  return (
    <section
      aria-label="Introduction"
      aria-roledescription="carousel"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative isolate min-h-[580px] overflow-hidden lg:min-h-[720px]"
    >
      {/* Background slides */}
      {SLIDES.map((s, i) => (
        <Image
          key={s.solid}
          src={s.image}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`-z-20 object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Warm charcoal wash so the type stays legible over the photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241d19]/92 via-[#241d19]/70 to-[#241d19]/45"
      />

      {/* Slide controls — bottom left, clear of the form column */}
      <div
        {...holdOnHover}
        className="absolute bottom-8 left-6 z-20 hidden gap-2 md:flex md:left-10"
      >
        <SlideButton direction="prev" onClick={() => go(-1)} />
        <SlideButton direction="next" onClick={() => go(1)} />
      </div>

      <div className="mx-auto grid min-h-[580px] max-w-[1240px] items-center gap-10 px-6 pt-32 pb-20 md:px-10 lg:min-h-[720px] lg:pb-44 lg:grid-cols-[minmax(0,1fr)_360px]">
        {/* Left: headline */}
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase">
            <span className="h-px w-8 bg-accent" aria-hidden />
            {slide.eyebrow}
          </p>

          <h1 className="mt-6 text-[clamp(2.5rem,7.5vw,5.5rem)] leading-[0.95] font-black tracking-[-0.03em] text-white uppercase">
            {slide.solid}
            <br />
            <TypedWord
              text={slide.outline}
              className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)]"
            />
          </h1>

          <p className="mt-8 max-w-[440px] text-[13px] leading-[1.8] text-white/70">
            {slide.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaButton
              href="#services"
              label="View services"
              variant="accent"
            />
            <CtaButton href="#about" label="About company" variant="ghost" />
          </div>
        </div>

        {/* Right: request form */}
        <div {...holdOnHover}>
          <RequestForm />
        </div>
      </div>

      {/* Slide index — white bar flush to the bottom-right corner */}
      <ul
        {...holdOnHover}
        className="absolute right-0 bottom-0 z-20 hidden w-[min(760px,74%)] grid-cols-3 bg-background lg:grid"
      >
        {SLIDES.map((s, i) => {
          const isActive = i === index;
          return (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                aria-current={isActive}
                className="group h-full w-full cursor-pointer px-7 py-7 text-left"
              >
                <span
                  className={`block text-[11px] tabular-nums transition-colors ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span
                  className={`mt-3 block max-w-[150px] text-[13px] leading-[1.45] transition-colors ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-muted group-hover:text-foreground"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function RequestForm() {
  const [notice, setNotice] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // No endpoint is wired up yet — say so rather than faking a success state.
        setNotice("This form is not connected yet. Call +91 90000 00000.");
      }}
      className="bg-[#1c1a19]/90 p-6 backdrop-blur-sm md:p-7"
    >
      <h2 className="text-[13px] font-semibold text-white">Send a request</h2>

      <div className="mt-5 space-y-3">
        <Field id="req-name" label="Your name" autoComplete="name" />
        <Field
          id="req-phone"
          label="Your phone"
          type="tel"
          autoComplete="tel"
        />

        <div>
          <label htmlFor="req-type" className="sr-only">
            Project type
          </label>
          <select
            id="req-type"
            name="type"
            defaultValue=""
            className="w-full border border-white/15 bg-transparent px-4 py-3 text-[12px] text-white/80 outline-none focus:border-accent"
          >
            <option value="" disabled className="bg-[#1c1a19]">
              Project type
            </option>
            <option value="house" className="bg-[#1c1a19]">
              Private house
            </option>
            <option value="commercial" className="bg-[#1c1a19]">
              Commercial
            </option>
            <option value="interior" className="bg-[#1c1a19]">
              Interior fit-out
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full cursor-pointer bg-accent px-5 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-on-accent uppercase transition-opacity hover:opacity-90"
      >
        Send a request
      </button>

      <p
        aria-live="polite"
        className="mt-3 text-[10px] leading-[1.6] text-white/50"
      >
        {notice || "We reply within one working day."}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id.replace("req-", "")}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={label}
        className="w-full border border-white/15 bg-transparent px-4 py-3 text-[12px] text-white outline-none placeholder:text-white/40 focus:border-accent"
      />
    </div>
  );
}

function CtaButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "accent" | "ghost";
}) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-4 px-7 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors ${
        variant === "accent"
          ? "bg-accent text-on-accent hover:bg-white hover:text-foreground"
          : "border border-white/35 text-white hover:bg-white hover:text-foreground"
      }`}
    >
      {label}
      <span className="flex h-6 w-6 items-center justify-center bg-on-accent/15 transition-colors group-hover:bg-on-accent/20">
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
    </a>
  );
}

function SlideButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/30 text-white transition-colors hover:border-accent hover:bg-accent"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

function TypedWord({
  text,
  className = "",
  speed = 90,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  // Starts fully rendered so the server HTML carries the real word, then the
  // client retypes it — no hydration mismatch and no empty heading for crawlers.
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval = 0;
    let i = 0;

    // Clearing and typing happen inside callbacks, never in the effect body.
    const frame = window.requestAnimationFrame(() => {
      setShown("");
      interval = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) window.clearInterval(interval);
      }, speed);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <span aria-label={text} className={`relative inline-block ${className}`}>
      {/* Reserves the final width so the line never reflows mid-type */}
      <span aria-hidden className="invisible">
        {text}
      </span>
      <span aria-hidden className="absolute inset-0 whitespace-pre">
        {shown}
      </span>
    </span>
  );
}
