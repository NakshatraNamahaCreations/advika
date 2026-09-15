import Image from "next/image";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Licensed & insured crews",
    description:
      "Certified site engineers and fully insured teams on every project, from foundation to final handover.",
    icon: <HelmetIcon />,
  },
  {
    title: "On time, on budget",
    description:
      "Fixed schedules and transparent costing, with weekly progress reports so there are no surprises.",
    icon: <ScheduleIcon />,
  },
  {
    title: "Turnkey design & build",
    description:
      "Architecture, structure, MEP and interiors handled under one contract and one point of contact.",
    icon: <BlueprintIcon />,
  },
];

const PROOF = ["In-house crews", "Fixed schedules", "25+ years on site"];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-surface px-6 py-20 md:px-14 lg:py-28"
    >
      {/* Faint blueprint grid for texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#06101f_1px,transparent_1px),linear-gradient(to_bottom,#06101f_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy + CTA */}
        <div className="from-left lg:pr-6">
          <p className="reveal inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
            </svg>
            Why choose us
          </p>

          <h2
            id="why-choose-us-heading"
            className="reveal mt-6 text-[clamp(1.9rem,4vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.025em]"
          >
            Everything you need
            <br />
            to plan, build and deliver
            <br />
            <span className="block">in one place</span>
          </h2>

          <span
            aria-hidden
            className="reveal reveal-1 mt-7 block h-[3px] w-14 bg-accent"
          />

          <p className="reveal reveal-1 mt-7 max-w-[400px] text-[13.5px] leading-[1.85] text-muted">
            Residential towers, commercial fit-outs and industrial builds
            delivered by in-house crews. One contract, one accountable team, and
            a finish that holds up long after handover.
          </p>

          <ul className="reveal reveal-2 mt-8 flex flex-wrap gap-2">
            {PROOF.map((item) => (
              <li
                key={item}
                className="border border-line bg-background px-4 py-2 text-[11.5px] font-medium tracking-[0.04em] text-foreground/75"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="reveal reveal-3 mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="group flex items-center gap-4 bg-accent py-4 pr-4 pl-7 text-[11px] font-semibold tracking-[0.16em] text-on-accent uppercase transition-opacity hover:opacity-90"
            >
              Request a quote
              <span className="flex h-7 w-7 items-center justify-center bg-on-accent/15">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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

            <a
              href="#services"
              className="border-b-2 border-foreground/30 pb-1 text-[12.5px] font-semibold tracking-[0.06em] text-foreground transition-colors hover:border-accent hover:text-ink"
            >
              See how we work
            </a>
          </div>
        </div>

        {/* Right: image with overlapping feature cards */}
        <div className="relative">
          {/* Offset outline gives the photo depth */}
          <span
            aria-hidden
            className="absolute -top-5 -right-5 hidden h-full w-full border-[3px] border-accent/35 lg:block"
          />

          <div className="from-right relative h-[340px] overflow-hidden md:h-[460px] lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Construction team reviewing plans on an active building site"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[#06101f]/45 to-transparent"
            />
          </div>

          {/* Accent badge anchored to the photo */}
          <div className="absolute right-0 -bottom-5 hidden bg-accent px-6 py-4 text-on-accent shadow-[0_16px_40px_rgba(20,17,15,0.22)] lg:block">
            <span className="block text-[1.7rem] leading-none font-bold">
              625+
            </span>
            <span className="mt-1.5 block text-[10px] font-semibold tracking-[0.16em] text-white/85 uppercase">
              Projects delivered
            </span>
          </div>

          <ul className="mt-4 space-y-3 lg:absolute lg:top-1/2 lg:left-[-72px] lg:mt-0 lg:w-[368px] lg:-translate-y-1/2">
            {FEATURES.map((feature, i) => (
              <li
                key={feature.title}
                className={`reveal reveal-${i + 1} group relative flex gap-4 border border-line bg-background p-5 shadow-[0_12px_34px_rgba(20,17,15,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_48px_rgba(20,17,15,0.15)]`}
              >
                {/* Accent edge grows in on hover */}
                <span
                  aria-hidden
                  className="absolute top-0 bottom-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                />

                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/20 text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                  {feature.icon}
                </span>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-bold tracking-[0.14em] text-ink tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[13.5px] font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[11.5px] leading-[1.7] text-muted">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

function HelmetIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 16a9 9 0 0 1 18 0" />
      <path d="M2 16h20v2H2z" />
      <path d="M10 7.6V16M14 7.6V16" />
      <path d="M9.5 7.3a5 5 0 0 1 5 0" />
    </svg>
  );
}

function ScheduleIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function BlueprintIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 5.5 12 3l9 2.5v13L12 21l-9-2.5z" />
      <path d="M12 3v18" />
      <path d="M7 9.5h2M15 9.5h2M7 14h2M15 14h2" />
    </svg>
  );
}
