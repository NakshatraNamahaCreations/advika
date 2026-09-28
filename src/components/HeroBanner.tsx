import Image from "next/image";
import type { ReactNode } from "react";

// What we do, shown where a template would put partner logos.
const STRIP: { label: string; icon: ReactNode }[] = [
  { label: "Architecture", icon: <PlanIcon /> },
  { label: "Construction", icon: <BuildingIcon /> },
  { label: "Interiors", icon: <SofaIcon /> },
  { label: "Turnkey", icon: <KeyIcon /> },
  { label: "3D Visualization", icon: <CubeIcon /> },
  { label: "Award winning", icon: <TrophyIcon /> },
];

export default function HeroBanner() {
  return (
    <section
      aria-label="Introduction"
      className="relative isolate flex min-h-[max(720px,100svh)] flex-col overflow-hidden"
    >
      <Image
        src="/profile/hero-p28-2.jpg"
        alt="Completed Advika Constructions house in Bengaluru with a white façade and gated entrance"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[72%_center]"
      />
      {/* Warm wash: deep on the left for the copy, clear over the house */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#140c05]/90 via-[#140c05]/50 to-[#140c05]/5"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/25"
      />

      <div className="mx-auto grid w-full max-w-[1320px] flex-1 gap-10 px-6 pt-32 pb-10 md:px-10 md:pt-40 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-16 lg:pt-44">
        {/* Left: headline, call to action and stat card */}
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h1 className="text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[1.02] font-bold tracking-[-0.02em] text-white uppercase">
              Build your
              <br />
              {/* Second line picks up the gold gradient from the logo */}
              <span className="bg-accent bg-clip-text text-transparent">
                dream home
              </span>
            </h1>

            <p className="mt-5 text-[clamp(1rem,1.5vw,1.2rem)] text-white/85">
              Innovative design. Precise construction.
            </p>

            <a
              href="#projects"
              className="group mt-9 inline-flex items-center gap-3"
            >
              <span className="rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-foreground transition-colors group-hover:bg-surface">
                Explore Projects
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </a>
          </div>

          <StatCard />
        </div>

        {/* Right: featured project */}
        <FeaturedCard />
      </div>

      {/* Service strip along the bottom edge */}
      <ul className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 pt-2 pb-9 md:px-10 xl:justify-between">
        {STRIP.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] text-white/70 uppercase"
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}

function StatCard() {
  return (
    <div className="flex w-fit items-center gap-4 rounded-2xl bg-white p-3 pr-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/profile/p11-2.jpg"
          alt=""
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-[26px] leading-none font-bold text-foreground">
          55+
        </p>
        <p className="mt-1.5 max-w-[180px] text-[12px] leading-[1.4] text-muted">
          Projects completed across Bengaluru &amp; Ramanagara
        </p>
      </div>
    </div>
  );
}

function FeaturedCard() {
  return (
    <article className="w-full max-w-[340px] self-center rounded-3xl bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:justify-self-end">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="/profile/p19-2.jpg"
          alt="Completed two-storey house in Ramanagara lit at night with wall washers and warm interior light"
          fill
          sizes="320px"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-foreground uppercase">
          Completed
        </span>
      </div>

      <div className="px-2 pt-4 pb-2">
        <div className="flex items-center gap-3">
          <span className="block h-11 w-11 shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/logo-card.png"
              alt=""
              width={1200}
              height={1094}
              unoptimized
              className="h-full w-full object-contain"
            />
          </span>
          <div>
            <p className="text-[13px] font-semibold text-foreground">
              Deepak CM
            </p>
            <p className="text-[11px] text-muted">
              Proprietor, Advika Constructions
            </p>
          </div>
        </div>

        <h2 className="mt-4 text-[17px] leading-snug font-bold text-foreground">
          Modern Residence
        </h2>
        <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-muted">
          <PinIcon />
          Ramanagara, Karnataka
        </p>

        <a
          href="#projects"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-accent hover:text-on-accent"
        >
          View Details
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-3.5 w-3.5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
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

function PlanIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 5.5 12 3l9 2.5v13L12 21l-9-2.5z" />
      <path d="M12 3v18" />
      <path d="M7 9.5h2M15 9.5h2M7 14h2M15 14h2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 21h18" />
      <path d="M6 21V6l12-3v18" />
      <path d="M9.5 8.5h5M9.5 12h5M9.5 15.5h5" />
    </svg>
  );
}

function SofaIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3 18h18M5 18v2M19 18v2" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l3 3M14.5 8.5l2 2" />
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

function TrophyIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3" />
      <path d="M12 13v4M8.5 20h7M9.5 17h5v3h-5z" />
    </svg>
  );
}
