import Image from "next/image";
import type { ReactNode } from "react";

type Feature = { title: string; description: string; icon: ReactNode };

// Drawn from the services and strength pages of the Advicon profile.
const FEATURES: Feature[] = [
  {
    title: "Turnkey Solutions",
    description:
      "Every aspect of the project managed from the initial concept to the final handover, ensuring smooth execution.",
    icon: <KeyIcon />,
  },
  {
    title: "Exclusive Design",
    description:
      "Space planning, 3D visualization and material selection, worked out with you before construction begins.",
    icon: <CompassIcon />,
  },
  {
    title: "Professional Team",
    description:
      "Architects, engineers and skilled technicians delivering quality craftsmanship to rigorous standards.",
    icon: <TeamIcon />,
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-us-heading"
      className="relative overflow-hidden bg-background px-6 pt-20 pb-16 md:px-14 lg:pt-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Two overlapping photos */}
          <div className="from-left relative">
            <span
              aria-hidden
              className="absolute top-20 -left-3 hidden h-44 w-14 bg-[repeating-linear-gradient(to_right,var(--line)_0_1px,transparent_1px_9px)] lg:block"
            />

            <div className="relative ml-auto w-[88%]">
              <div className="absolute -top-10 -left-[20%] z-0 hidden aspect-square w-[55%] overflow-hidden shadow-[0_18px_40px_rgba(20,17,15,0.12)] sm:block">
                <Image
                  src="/profile/p37-2.jpg"
                  alt="Dining area with a slatted wooden partition and framed art"
                  fill
                  sizes="(min-width: 1024px) 280px, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 aspect-[4/3] overflow-hidden">
                <Image
                  src="/profile/p31-1.jpg"
                  alt="Modular kitchen with grey gloss cabinets, white upper shutters and under-cabinet lighting"
                  fill
                  sizes="(min-width: 1024px) 500px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="from-right">
            <p className="text-[12px] font-semibold tracking-[0.3em] text-muted uppercase">
              About us
            </p>

            <h2
              id="about-us-heading"
              className="mt-5 max-w-[480px] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.2] font-semibold tracking-[-0.02em]"
            >
              Advika Constructions &amp; Architects, established in 2016
            </h2>

            <div className="mt-6 max-w-[490px] space-y-5 text-[15px] leading-[1.9] text-muted">
              <p>
                Advicon is more than a construction company, we have a team of
                dedicated architects, engineers, and construction professionals
                committed to bringing visions to life.
              </p>
              <p>
                The company&apos;s strength lies in its ability to seamlessly
                blend innovative architectural design with precise construction
                execution, offering comprehensive solutions from concept to
                completion.
              </p>
            </div>

            <a
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-accent hover:text-on-accent"
            >
              Read more about us
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Feature row */}
        <ul className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-12 lg:mt-20">
          {FEATURES.map((feature, i) => (
            <li
              key={feature.title}
              className={`reveal ${i > 0 ? `reveal-${i}` : ""} flex gap-5`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center text-ink">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-[15px] font-bold tracking-[0.01em]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 max-w-[320px] text-[13.5px] leading-[1.75] text-muted">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-11 w-11",
  "aria-hidden": true,
};

function KeyIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="16" cy="32" r="7" />
      <path d="M21 27 39 9" />
      <path d="m29 19 4 4M33 15l3 3" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg {...iconProps}>
      {/* Set square and pencil */}
      <path d="M9 39h18L9 21z" />
      <path d="m30 10 8 8-15 15-10 2 2-10z" />
      <path d="m27 13 8 8" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="19" cy="18" r="6" />
      <path d="M7 38c0-6.6 5.4-11 12-11s12 4.4 12 11" />
      <circle cx="34" cy="20" r="4.5" />
      <path d="M33 29c5 0 8 3.6 8 9" />
    </svg>
  );
}
