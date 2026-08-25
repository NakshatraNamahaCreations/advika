import Image from "next/image";
import type { ReactNode } from "react";

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "625+", label: "Projects completed" },
  { value: "200+", label: "Happy clients" },
  { value: "25+", label: "Years experience" },
  { value: "60+", label: "Team members" },
];

type Service = { title: string; description: string; icon: ReactNode };

const SERVICES: Service[] = [
  {
    title: "Exterior & façade",
    description:
      "Structural envelopes, cladding and glazing detailed to survive monsoon and sun without losing their line.",
    icon: <FacadeIcon />,
  },
  {
    title: "Interior fit-out",
    description:
      "Joinery, services and finishes coordinated on one programme, so trades never queue behind each other.",
    icon: <InteriorIcon />,
  },
  {
    title: "Landscape works",
    description:
      "Hardscape, drainage and planting handled as part of the build rather than an afterthought at handover.",
    icon: <LandscapeIcon />,
  },
];

export default function StatsServices() {
  return (
    <section
      id="services"
      aria-label="By the numbers and core services"
      className="relative"
    >
      {/* Accent band with a diagonal lower edge */}
      <div className="relative bg-accent pt-16 pb-40 [clip-path:polygon(0_0,100%_0,100%_62%,0_100%)] md:pb-52">
        {/* Blueprint grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
        />

        <dl className="reveal relative mx-auto grid max-w-[1080px] grid-cols-2 gap-y-10 px-6 text-center text-white md:grid-cols-4 md:px-14">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(1.9rem,4vw,2.6rem)] leading-none font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-3 block text-[10px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Dark services card overlapping the band, beside the render */}
      <div className="relative z-10 px-6 pb-16 md:px-14 lg:pb-24">
        <div className="mx-auto grid max-w-[1180px] items-end gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-4">
          <div className="from-left -mt-28 bg-ink p-8 text-white md:-mt-36 md:p-10 lg:-mt-44">
            <h2 className="text-[13px] font-bold tracking-[0.2em] uppercase">
              Our great services
            </h2>

            <ul className="mt-8 space-y-8">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <span className="flex h-9 w-9 items-center justify-center text-accent">
                    {service.icon}
                  </span>
                  <h3 className="mt-3 text-[11px] font-bold tracking-[0.16em] uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[290px] text-[11px] leading-[1.75] text-white/55">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="from-right flex items-end justify-center">
            <Image
              src="/building-model.png"
              alt="Render of a multi-storey apartment block standing on architectural floor plans"
              width={580}
              height={430}
              sizes="(min-width: 1024px) 700px, 100vw"
              className="h-auto w-full max-w-[640px] object-contain"
            />
          </div>
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
  className: "h-6 w-6",
  "aria-hidden": true,
};

function FacadeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 21h18" />
      <path d="M6 21V6l12-3v18" />
      <path d="M9.5 8.5h5M9.5 12h5M9.5 15.5h5" />
    </svg>
  );
}

function InteriorIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3 18h18M5 18v2M19 18v2" />
    </svg>
  );
}

function LandscapeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 20h18" />
      <path d="M12 20V9" />
      <path d="M12 9c0-2.5-1.6-4-4-4 0 2.5 1.6 4 4 4z" />
      <path d="M12 12c0-2.5 1.6-4 4-4 0 2.5-1.6 4-4 4z" />
    </svg>
  );
}
