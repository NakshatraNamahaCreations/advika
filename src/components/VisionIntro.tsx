"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";

type Pillar = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

// Company pillars from the About and Introduction pages of the Advicon profile.
const PILLARS: Pillar[] = [
  {
    title: "Design-build approach",
    text: "Architectural design and construction services integrated under one roof, for exceptional results.",
    image: "/profile/p21-1.jpg",
    alt: "Completed contemporary house with a gabled wood-clad tower in Ramanagara",
  },
  {
    title: "Architects, engineers & builders",
    text: "Advicon is more than a construction company: a team of dedicated architects, engineers and construction professionals committed to bringing visions to life.",
    image: "/profile/p15-1.jpg",
    alt: "Completed three-storey corner house with a grey and white façade in Channapatna",
  },
  {
    title: "3D visualization",
    text: "Realistic renderings let you see the final outcome before construction begins.",
    image: "/profile/p03-1-cropped.jpg",
    alt: "3D visualization of a bedroom interior with a teal upholstered bed, fluted wall panelling and a study desk",
  },
  {
    title: "Concept to completion",
    text: "Innovative architectural design blended with precise construction execution, from the first sketch to the final handover.",
    image: "/profile/p12-2.jpg",
    alt: "Completed three-storey house in Ramanagara lit with festive lights at night",
  },
  {
    title: "Interiors & finishes",
    text: "Kitchens, living rooms, bedrooms and pooja rooms, finished by the same team that builds the house.",
    image: "/profile/p29-1.jpg",
    alt: "Double-height living room with a wooden ceiling feature and sectional sofa",
  },
];

// Start on the second pillar so the first one peeks in from the left edge.
const START = 1;

export default function VisionIntro() {
  const [index, setIndex] = useState(START);
  const touchX = useRef<number | null>(null);
  const last = PILLARS.length - 1;

  const go = (step: number) =>
    setIndex((i) => Math.min(last, Math.max(0, i + step)));

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden bg-background px-6 pt-20 pb-16 md:px-14 lg:pt-28"
    >
      {/* Accent stripe on the right edge */}
      <span
        aria-hidden
        className="absolute top-0 right-0 hidden h-[62%] w-1.5 bg-accent lg:block"
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Headline and intro */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          <div className="from-left">
            <h2
              id="approach-heading"
              className="max-w-[620px] text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.1] font-semibold tracking-[-0.025em]"
            >
              Bringing visions to life through building
            </h2>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                aria-label="Previous"
                aria-controls="about-slides"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={index === last}
                aria-controls="about-slides"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-accent hover:text-on-accent disabled:cursor-default disabled:opacity-40 disabled:hover:bg-ink disabled:hover:text-white"
              >
                Next
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <p className="from-right self-start border-l border-line pl-6 text-[15px] leading-[1.85] text-muted">
            Advika Constructions offers a unique design-build approach, which
            integrates architectural design and construction services for
            exceptional results.
          </p>
        </div>

        {/* Pillar slider: the active card is gold, upcoming ones white, and
            passed slides drop their card so only the photo peeks in. */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="What sets Advicon apart"
          className="mt-14 lg:mt-6"
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }}
        >
          <p className="sr-only" aria-live="polite">
            {`Slide ${index + 1} of ${PILLARS.length}: ${PILLARS[index].title}`}
          </p>

          <ul
            id="about-slides"
            className="flex w-max gap-(--gap) transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [--gap:16px] [--lead:0px] [--slide:280px] sm:[--slide:320px] md:[--gap:20px] lg:[--lead:200px] lg:[--slide:400px]"
            style={
              {
                transform: `translateX(calc(var(--lead) - ${index} * (var(--slide) + var(--gap))))`,
              } as CSSProperties
            }
          >
            {PILLARS.map((pillar, k) => {
              const isActive = k === index;
              const isPast = k < index;
              return (
                <li
                  key={pillar.title}
                  aria-roledescription="slide"
                  aria-label={`${k + 1} of ${PILLARS.length}: ${pillar.title}`}
                  className={`relative w-(--slide) shrink-0 pt-12 transition-opacity duration-500 ${
                    isPast ? "max-lg:opacity-0" : ""
                  }`}
                >
                  <div className="relative h-[360px] overflow-hidden md:h-[340px]">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, 320px"
                      className="object-cover"
                    />
                  </div>

                  <div
                    aria-hidden={isPast}
                    className={`absolute top-0 right-0 left-5 z-10 flex min-h-[190px] flex-col p-6 transition-opacity duration-500 md:left-6 ${
                      isPast ? "opacity-0" : "opacity-100"
                    } ${
                      isActive
                        ? "bg-accent text-on-accent"
                        : "bg-background text-foreground shadow-[0_18px_40px_rgba(20,17,15,0.08)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[18px] leading-[1.3] font-semibold">
                        {pillar.title}
                      </h3>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="mt-0.5 h-5 w-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </div>
                    <p
                      className={`mt-3 text-[13.5px] leading-[1.7] ${
                        isActive ? "text-on-accent/80" : "text-muted"
                      }`}
                    >
                      {pillar.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Origin statement */}
        <div className="mt-20 grid gap-8 border-b border-line pb-16 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
          <h3 className="reveal max-w-[560px] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2] font-semibold tracking-[-0.02em]">
            55+ projects delivered, with 15+ more underway
          </h3>

          <div className="reveal reveal-1">
            <p className="text-[15px] leading-[1.85] text-muted">
              A proven track record of efficient project management and client
              satisfaction across Bengaluru, Ramanagara, Channapatna, Bidadi
              and Makali &mdash; from independent houses and farm houses to
              complete interiors, recognised with awards in 2021 and 2022.
            </p>
            <a
              href="#projects"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              Our work
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
