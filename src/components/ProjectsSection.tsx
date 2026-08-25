"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

type Project = {
  id: string;
  date: string;
  created: string;
  headline: string;
  tag: string;
  caption: string;
  columns: [string, string];
  blurb: string;
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    date: "20.11.2018",
    created: "2017",
    headline: "Comfortable zoning in one open space.",
    tag: "Architecture",
    caption: "The interior of the apartments.",
    columns: [
      "The interior of the apartments in the color of Siena.",
      "Combinations give warmth to such strict materials.",
    ],
    blurb:
      "This interior was created for a young couple and the main task was comfortable zoning in one open space.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Open plan living room with warm wooden finishes",
  },
  {
    id: "02",
    date: "04.03.2019",
    created: "2018",
    headline: "Quiet light across a working kitchen.",
    tag: "Interior",
    caption: "The kitchen and dining area.",
    columns: [
      "Matte stone surfaces carry the light without glare.",
      "Deep green cabinetry anchors the open volume.",
    ],
    blurb:
      "A compact kitchen built around a single island, designed so the room stays open while the work zone stays contained.",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern kitchen with dark cabinetry",
  },
  {
    id: "03",
    date: "17.09.2019",
    created: "2019",
    headline: "A living room that holds the evening.",
    tag: "Residential",
    caption: "The main living volume.",
    columns: [
      "Full height glazing pulls the terrace inside.",
      "Soft textiles balance the concrete shell.",
    ],
    blurb:
      "The brief asked for one uninterrupted volume, so storage and services were folded into the perimeter walls.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Living room with large windows and soft seating",
  },
  {
    id: "04",
    date: "28.05.2020",
    created: "2020",
    headline: "Warm materials against a strict grid.",
    tag: "Studio",
    caption: "The studio and workspace.",
    columns: [
      "Oak and brass warm the orthogonal plan.",
      "Every joint was detailed to stay visible.",
    ],
    blurb:
      "A studio apartment where the structural grid was left exposed and the joinery was built to match its rhythm.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio workspace with oak joinery",
  },
];

const CARD_ACTIVE = 384;
const CARD_IDLE = 212;
const CARD_GAP = 12;

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const active = PROJECTS[index];

  const go = useCallback((step: number) => {
    setIndex((i) => (i + step + PROJECTS.length) % PROJECTS.length);
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-background px-6 py-16 text-foreground md:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Section heading */}
        <div className="from-left mb-12">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
            </svg>
            Selected work
          </p>

          <h2
            id="projects-heading"
            className="mt-5 text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.2] font-extrabold tracking-[-0.02em] uppercase"
          >
            Our projects
          </h2>

          <span aria-hidden className="mt-6 block h-[3px] w-14 bg-accent" />
        </div>

        {/* Top row: meta / headline / description */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <dl className="from-left col-span-12 flex gap-10 md:col-span-2 md:flex-col md:gap-6">
            <Meta label="Date" value={active.date} />
            <Meta label="Created" value={active.created} />
          </dl>

          <h3 className="col-span-12 text-4xl font-bold leading-[1.06] tracking-[-0.02em] md:col-span-6 md:text-5xl lg:text-[3.4rem]">
            {active.headline}
          </h3>

          <div className="from-right col-span-12 md:col-span-4">
            <h4 className="text-[13px] font-semibold">{active.tag}</h4>
            <div className="mt-3 grid grid-cols-2 gap-5 text-[11px] leading-[1.6] text-muted">
              <p>{active.columns[0]}</p>
              <p>{active.columns[1]}</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal relative mt-14 lg:pl-[16%]">
          <div className="overflow-hidden">
            <ul
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: CARD_GAP,
                transform: `translateX(-${index * (CARD_IDLE + CARD_GAP)}px)`,
              }}
            >
              {PROJECTS.map((project, i) => {
                const isActive = i === index;
                return (
                  <li
                    key={project.id}
                    className="relative h-[196px] shrink-0 overflow-hidden transition-[width,opacity] duration-500 ease-out"
                    style={{
                      width: isActive ? CARD_ACTIVE : CARD_IDLE,
                      opacity: i < index ? 0 : 1,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show project ${project.id}: ${project.tag}`}
                      aria-current={isActive}
                      className="group block h-full w-full cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="384px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        priority={i === 0}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Caption card overlapping the carousel */}
          <div className="pointer-events-none absolute bottom-[-22px] left-0 flex w-[340px] max-w-full items-center justify-between bg-foreground px-5 py-4 text-white shadow-[0_18px_40px_rgba(20,17,15,0.18)] lg:left-[16%]">
            <div>
              <p className="text-[13px] font-semibold">{active.tag}</p>
              <p className="mt-1 text-[11px] text-white/60">{active.caption}</p>
            </div>
            <div className="pointer-events-auto flex items-center gap-4">
              <Arrow direction="prev" onClick={() => go(-1)} />
              <Arrow direction="next" onClick={() => go(1)} />
            </div>
          </div>
        </div>

        {/* Bottom row: blurb / slide number */}
        <div className="mt-16 grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="max-w-[380px] text-[11px] leading-[1.7] text-muted">
              {active.blurb}
            </p>
          </div>

          <div className="col-span-12 flex items-end justify-end gap-4 md:col-span-6 lg:col-span-7">
            <span aria-hidden className="h-14 w-px rotate-[20deg] bg-line" />
            <span className="text-5xl font-light leading-none tracking-tight tabular-nums lg:text-6xl">
              {active.id}
            </span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="mb-1 h-5 w-5 stroke-current text-muted"
              fill="none"
              strokeWidth="1.5"
            >
              <path d="M17 7L7 17M7 17h7M7 17v-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] text-muted">{label}</dt>
      <dd className="mt-1 text-[11px] text-foreground">{value}</dd>
    </div>
  );
}

function Arrow({
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
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      className="cursor-pointer text-white/50 transition-colors hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 stroke-current"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="square"
      >
        <path d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
