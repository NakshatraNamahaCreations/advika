import type { ReactNode } from "react";

type Step = { label: string; caption: string; icon: ReactNode };

// The stages of a design-build project, as set out in the Advicon profile.
const STEPS: Step[] = [
  {
    label: "Conceptualization",
    caption: "Initial sketches to detailed plans, worked out with you.",
    icon: <SketchIcon />,
  },
  {
    label: "Design & Visualization",
    caption: "Space planning and realistic 3D renderings before we build.",
    icon: <CubeIcon />,
  },
  {
    label: "Materials & Finishes",
    caption: "Quality, durable and environmentally friendly selections.",
    icon: <SwatchIcon />,
  },
  {
    label: "Construction & Updates",
    caption: "Our civil crews raise the structure, with regular updates.",
    icon: <CraneIcon />,
  },
  {
    label: "Interiors & Fit-out",
    caption: "Electrical, plumbing, carpentry, tiling and painting teams.",
    icon: <SofaIcon />,
  },
  {
    label: "Completion & Handover",
    caption: "Turnkey handover, with maintenance and warranty support.",
    icon: <HandoverIcon />,
  },
];

export default function BuildProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-background px-6 py-24 md:px-14 lg:py-28"
    >
      {/* Faint blueprint grid and a warm wash behind the heading */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#06101f_1px,transparent_1px),linear-gradient(to_bottom,#06101f_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="reveal text-center">
          <p className="flex items-center justify-center gap-3 text-[15px] font-semibold text-accent">
            <Flourish />
            Working steps
            <Flourish className="-scale-x-100" />
          </p>

          <h2
            id="process-heading"
            className="mt-3 text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink"
          >
            Our proven house construction process
          </h2>

          <span
            aria-hidden
            className="mx-auto mt-5 block w-[min(560px,85%)] border-t-2 border-dashed border-line"
          />
        </div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical rail on small screens, horizontal through the nodes on large */}
          <span
            aria-hidden
            className="absolute top-8 bottom-8 left-[27px] w-[2px] bg-gradient-to-b from-accent via-line to-line lg:top-[184px] lg:right-[8.33%] lg:bottom-auto lg:left-[8.33%] lg:h-[2px] lg:w-auto lg:bg-gradient-to-r"
          />

          <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-4">
            {STEPS.map((step, i) => {
              const above = i % 2 === 1;
              return (
                <li
                  key={step.label}
                  className="group flex items-start gap-5 lg:grid lg:grid-rows-[150px_auto_150px] lg:items-center lg:gap-0 lg:text-center"
                >
                  {/* Node */}
                  <span className="relative shrink-0 lg:row-start-2 lg:justify-self-center">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full transition-all duration-300 lg:h-[86px] lg:w-[86px] ${
                        i === 0
                          ? "bg-accent text-on-accent shadow-[0_16px_34px_rgba(201,154,46,0.35)]"
                          : "border border-line bg-background text-accent shadow-[0_10px_24px_rgba(20,17,15,0.06)] group-hover:border-accent group-hover:bg-surface"
                      }`}
                    >
                      {step.icon}
                    </span>
                  </span>

                  {/* Card */}
                  <div
                    className={`relative flex-1 border border-line bg-surface/60 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:bg-surface group-hover:shadow-[0_18px_40px_rgba(20,17,15,0.08)] ${
                      above
                        ? "lg:row-start-1 lg:mb-7 lg:self-end"
                        : "lg:row-start-3 lg:mt-7 lg:self-start"
                    }`}
                  >
                    {/* Stub joining the card to the rail */}
                    <span
                      aria-hidden
                      className={`absolute left-1/2 hidden h-7 w-px -translate-x-1/2 bg-line lg:block ${
                        above ? "-bottom-7" : "-top-7"
                      }`}
                    />

                    <p className="text-[10px] font-bold tracking-[0.18em] text-accent uppercase tabular-nums">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-[14px] leading-[1.35] font-bold">
                      {step.label}
                    </h3>
                    <p className="mt-2 text-[12px] leading-[1.65] text-muted">
                      {step.caption}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`h-5 w-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M17 4c-4 1.5-6.5 4.5-7 8" />
      <path d="M20 9c-3.5 1.5-5.5 4-6 7" />
      <path d="M7 14c-1.5 2-2 4-1.5 6" />
    </svg>
  );
}

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7 lg:h-10 lg:w-10",
  "aria-hidden": true,
};

function SketchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10 39h28" />
      <path d="m30 9 7 7-17 17-9 2 2-9z" />
      <path d="m27 12 7 7" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M24 7l15 8.5v17L24 41 9 32.5v-17z" />
      <path d="M24 24 39 15.5M24 24v17M24 24 9 15.5" />
    </svg>
  );
}

function SwatchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M24 8 41 17 24 26 7 17z" />
      <path d="m7 24 17 9 17-9" />
      <path d="m7 31 17 9 17-9" />
    </svg>
  );
}

function CraneIcon() {
  return (
    <svg {...iconProps}>
      {/* Tower crane */}
      <path d="M20 40V12" />
      <path d="M7 12h34" />
      <path d="M14 40h12" />
      <path d="M20 12 12 19M20 12l8 7" />
      <path d="M33 12v9" />
      <path d="M29.5 21h7l-3.5 5z" />
    </svg>
  );
}

function SofaIcon() {
  return (
    <svg {...iconProps}>
      <path d="M7 34v-8a4 4 0 0 1 4-4h26a4 4 0 0 1 4 4v8" />
      <path d="M11 22v-7a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v7" />
      <path d="M7 34h34M12 34v4M36 34v4" />
    </svg>
  );
}

function HandoverIcon() {
  return (
    <svg {...iconProps}>
      {/* Finished house, signed off */}
      <path d="M9 24 24 12l15 12" />
      <path d="M13 22v17h22V22" />
      <path d="m18 30 4.5 4.5L31 26" />
    </svg>
  );
}
