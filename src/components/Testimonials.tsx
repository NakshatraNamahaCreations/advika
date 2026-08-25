"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  project: string;
  rating: number;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They flagged a drainage problem in our architect's drawings before a single trench was dug. That one call saved us a monsoon of trouble and about eleven lakh in rework.",
    name: "Ananya Rao",
    role: "Homeowner",
    project: "Private villa, Gurugram",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Four towers, thirty months, and the handover dates never moved. The weekly reports were detailed enough that our board stopped asking me for updates and just read them.",
    name: "Vikram Shetty",
    role: "Director",
    project: "Residential towers, Pune",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "As the architect I was braced for the usual fight over details. Instead they built what was drawn, and told me early where the drawings were wrong. Rare, and worth it.",
    name: "Meera Krishnan",
    role: "Principal architect",
    project: "Commercial fit-out, Hyderabad",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Two years after handover I still call their site manager and he picks up. The snag list was closed in three weeks, not three quarters. That is the whole review.",
    name: "Rohit Malhotra",
    role: "Facilities head",
    project: "Warehousing, Bhiwandi",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const go = useCallback((step: number) => {
    setIndex((i) => (i + step + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-surface px-6 py-24 md:px-14 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-20">
        {/* Left: heading and controls */}
        <div className="from-left lg:pt-6">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
            </svg>
            What clients say
          </p>

          <h2
            id="testimonials-heading"
            className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.18] font-extrabold tracking-[-0.02em] uppercase"
          >
            Trusted on site
            <span className="block">and after handover</span>
          </h2>

          <p className="mt-6 max-w-[330px] text-[13px] leading-[1.8] text-muted">
            Every project ends with a snag list. What separates contractors is
            how fast it gets closed — and whether anyone answers the phone a
            year later.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <NavButton direction="prev" onClick={() => go(-1)} />
            <NavButton direction="next" onClick={() => go(1)} />
            <span className="ml-2 text-[12px] tabular-nums text-muted">
              <span className="font-semibold text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right: active quote */}
        <div className="from-right">
          <figure className="relative bg-background p-8 shadow-[0_18px_50px_rgba(20,17,15,0.07)] md:p-11">
            <span
              aria-hidden
              className="absolute -top-5 right-8 font-serif text-[5rem] leading-none text-accent select-none md:right-11"
            >
              &rdquo;
            </span>

            <div
              className="flex gap-1 text-accent"
              role="img"
              aria-label={`Rated ${active.rating} out of 5`}
            >
              {Array.from({ length: active.rating }, (_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                >
                  <path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.7L12 17.2 6.1 20.4l1.2-6.7-4.8-4.6 6.6-.9z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-6">
              <p className="text-[clamp(1rem,1.9vw,1.3rem)] leading-[1.6] font-medium tracking-[-0.01em]">
                {active.quote}
              </p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={active.avatar}
                  alt=""
                  aria-hidden
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block text-[13px] font-semibold">
                  {active.name}
                </span>
                <span className="block text-[11px] text-muted">
                  {active.role} · {active.project}
                </span>
              </span>
            </figcaption>
          </figure>

          {/* Client selector */}
          <ul className="mt-6 flex flex-wrap gap-3">
            {TESTIMONIALS.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Read the review from ${item.name}`}
                  aria-current={i === index}
                  className={`relative block h-12 w-12 cursor-pointer overflow-hidden rounded-full transition-all ${
                    i === index
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-surface"
                      : "opacity-55 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.avatar}
                    alt=""
                    aria-hidden
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function NavButton({
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
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
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
