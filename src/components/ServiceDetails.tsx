import Image from "next/image";
import type { ReactNode } from "react";

type Item = { title: string; description: string; icon: ReactNode };

type ServiceGroup = {
  title: string;
  tag: string;
  lead: string;
  image: string;
  alt: string;
  items: Item[];
};

// Service descriptions as set out in the Advicon company profile.
const GROUPS: ServiceGroup[] = [
  {
    title: "Architectural design & planning",
    tag: "Design & planning",
    lead: "Everything settled on paper and on screen before a single brick is laid.",
    image: "/profile/p04-1.jpg",
    alt: "Architectural floor plan drawing with a pencil resting on it",
    items: [
      {
        title: "Conceptualization",
        description:
          "From initial sketches to detailed plans, we work with clients to bring their vision to life.",
        icon: <SketchIcon />,
      },
      {
        title: "Space planning",
        description:
          "The layout is optimized for functionality, safety, aesthetics and a user-friendly experience.",
        icon: <PlanIcon />,
      },
      {
        title: "3D visualization",
        description:
          "Realistic renderings help clients visualize the final outcome before construction begins.",
        icon: <CubeIcon />,
      },
      {
        title: "Material and finish selection",
        description:
          "Clients are guided in choosing quality, durable, visually appealing and environmentally friendly materials.",
        icon: <SwatchIcon />,
      },
    ],
  },
  {
    title: "Construction & project execution",
    tag: "Build & handover",
    lead: "One accountable team on site, from the first pour to the warranty period.",
    image: "/profile/p05-1.jpg",
    alt: "Completed three-storey house with a wood-clad panel carrying a tree motif",
    items: [
      {
        title: "Turnkey solutions",
        description:
          "Managing every aspect of a project, from the initial concept to the final handover, ensuring smooth execution and exceptional results.",
        icon: <KeyIcon />,
      },
      {
        title: "Project management & coordination",
        description:
          "Overseeing the entire construction process, coordinating timelines, budgets and client communication for transparency and timely completion.",
        icon: <ClipboardIcon />,
      },
      {
        title: "Skilled workforce & quality craftsmanship",
        description:
          "Delivering projects of the highest quality through a dedicated team of engineers, architects and skilled technicians and labour, while adhering to rigorous standards and local regulations, ensuring structural integrity and safety.",
        icon: <HelmetIcon />,
      },
      {
        title: "Real-time progress updates",
        description:
          "Providing regular updates and access to project progress, which fosters transparency and trust.",
        icon: <PulseIcon />,
      },
      {
        title: "Post-construction support",
        description:
          "Offering post-construction services, including maintenance and warranty support, to ensure continued satisfaction.",
        icon: <ShieldIcon />,
      },
    ],
  },
];

export default function ServiceDetails() {
  return (
    <section
      aria-label="Service details"
      className="relative overflow-hidden bg-background px-6 pb-24 md:px-14 lg:pb-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#06101f_1px,transparent_1px),linear-gradient(to_bottom,#06101f_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto max-w-[1280px] space-y-24 lg:space-y-32">
        {GROUPS.map((group, i) => {
          const flipped = i % 2 === 1;
          const number = String(i + 1).padStart(2, "0");

          return (
            <article
              key={group.title}
              // The photo always takes the narrow column, the cards the wide one
              className={`grid items-center gap-14 lg:gap-20 ${
                flipped
                  ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                  : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              }`}
            >
              {/* Photo, with the group number behind it and a gold tag on it */}
              <div
                className={`relative ${flipped ? "from-right lg:order-2" : "from-left"}`}
              >
                <span
                  aria-hidden
                  className="absolute -top-10 -left-2 z-10 text-[clamp(4.5rem,9vw,7rem)] leading-none font-extrabold text-transparent tabular-nums select-none [-webkit-text-stroke:2px_var(--line)]"
                >
                  {number}
                </span>

                <span
                  aria-hidden
                  className={`absolute -bottom-5 hidden h-[88%] w-[88%] border-[3px] border-accent/40 md:block ${
                    flipped ? "-left-5" : "-right-5"
                  }`}
                />

                <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#06101f]/55 via-transparent to-transparent"
                  />
                  <span className="absolute bottom-5 left-5 bg-accent px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-on-accent uppercase">
                    {group.tag}
                  </span>
                </div>
              </div>

              {/* Copy and the service cards */}
              <div className={flipped ? "from-left lg:order-1" : "from-right"}>
                <p className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ink uppercase">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  Services · {number}
                </p>

                <h3 className="mt-5 text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.18] font-extrabold tracking-[-0.02em] uppercase">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-[520px] text-[15px] leading-[1.85] text-muted">
                  {group.lead}
                </p>

                <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.title}
                      className="group relative overflow-hidden border border-line bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_45px_rgba(20,17,15,0.1)]"
                    >
                      {/* Accent edge grows in on hover */}
                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                      />

                      <span className="flex h-12 w-12 items-center justify-center bg-accent/15 text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent">
                        {item.icon}
                      </span>

                      <h4 className="mt-5 text-[15px] leading-[1.35] font-bold">
                        {item.title}
                      </h4>
                      <p className="mt-2.5 text-[13px] leading-[1.75] text-muted">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
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

function SketchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 20h16" />
      <path d="m15 4 4 4-9 9-5 1 1-5z" />
      <path d="m13.5 5.5 4 4" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3.5 4h17v16h-17z" />
      <path d="M3.5 11h9M12.5 4v7M12.5 15h8M8 11v9" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </svg>
  );
}

function SwatchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3.5 21 8l-9 4.5L3 8z" />
      <path d="m3 12 9 4.5L21 12" />
      <path d="m3 16 9 4.5L21 16" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="8" cy="16" r="3.5" />
      <path d="m10.5 13.5 8.5-8.5" />
      <path d="m15 9 2 2M17.5 6.5l2 2" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 4h6v2.5H9z" />
      <path d="M15 5.2h3V21H6V5.2h3" />
      <path d="M9 11h6M9 15h4" />
    </svg>
  );
}

function HelmetIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 16a9 9 0 0 1 18 0" />
      <path d="M2 16h20v2.5H2z" />
      <path d="M10 7.6V16M14 7.6V16" />
      <path d="M9.5 7.3a5 5 0 0 1 5 0" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 12h4l2.5-6 4 13 2.5-7h5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3.5 20 6v6c0 4.6-3.2 7.6-8 9.5-4.8-1.9-8-4.9-8-9.5V6z" />
      <path d="m8.8 12 2.3 2.3 4.2-4.3" />
    </svg>
  );
}
