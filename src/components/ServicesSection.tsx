"use client";

import { useState, type ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "General contracting",
    description:
      "Comprehensive management and execution of construction projects from start to finish.",
    icon: <CraneIcon />,
  },
  {
    title: "Design & build",
    description:
      "An integrated approach that combines architectural design, engineering and construction under one roof.",
    icon: <DraftIcon />,
  },
  {
    title: "Project management",
    description:
      "Professional planning, scheduling, budgeting and oversight to keep every project on track.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Building construction",
    description:
      "From single homes to apartment complexes, we bring residential visions to life with quality that lasts.",
    icon: <BuildingIcon />,
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(SERVICES.length - 1);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-ink px-6 py-20 text-white md:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Heading row */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-3.5 w-3.5"
                fill="currentColor"
              >
                <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
              </svg>
              From design to delivery
            </p>

            <h2
              id="services-heading"
              className="mt-5 max-w-[520px] text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.25] font-extrabold tracking-[-0.01em] uppercase"
            >
              Comprehensive solutions for every project
            </h2>
          </div>

          <a
            href="#services"
            className="group inline-flex items-center gap-4 border border-white/25 py-3 pr-3 pl-6 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-white"
          >
            All services
            <span className="flex h-7 w-7 items-center justify-center bg-white/10 transition-colors group-hover:bg-accent">
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
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>

        {/* Cards */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => {
            const isActive = i === active;
            return (
              <li key={service.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex h-full w-full cursor-pointer flex-col justify-between gap-10 p-6 text-left transition-colors ${
                    isActive
                      ? "bg-accent text-on-accent"
                      : "border border-white/15 hover:border-white/40"
                  }`}
                >
                  <div>
                    <h3 className="text-[13px] font-bold tracking-[0.08em] uppercase">
                      {service.title}
                    </h3>
                    <p
                      className={`mt-4 text-[11px] leading-[1.7] ${
                        isActive ? "text-on-accent/80" : "text-white/55"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <span
                    className={`flex h-11 w-11 items-center justify-center transition-colors ${
                      isActive
                        ? "bg-on-accent/15 text-on-accent"
                        : "bg-accent text-on-accent"
                    }`}
                  >
                    {service.icon}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {SERVICES.map((service, i) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Highlight ${service.title}`}
              aria-current={i === active}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                i === active ? "bg-accent" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

function CraneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 21V4l14 3" />
      <path d="M4 7h14" />
      <path d="M12 7v4" />
      <path d="M9.5 11h5l-2.5 4z" />
      <path d="M2 21h9" />
    </svg>
  );
}

function DraftIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 3h16v18H4z" />
      <path d="M8 3v18M4 9h16" />
      <path d="M12 13h4" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 4h6v3H9z" />
      <path d="M15 5.5h3V21H6V5.5h3" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9.5 21v-5h5v5" />
      <path d="M9.5 11h1M13.5 11h1" />
    </svg>
  );
}
