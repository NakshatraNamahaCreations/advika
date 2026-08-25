import Image from "next/image";

const GHOST_PHRASE = "Our vision. We build.";

export default function VisionIntro() {
  return (
    <section
      id="about"
      aria-labelledby="vision-heading"
      className="relative overflow-hidden bg-background px-6 pt-20 pb-14 md:px-14 lg:pt-24 lg:pb-16"
    >
      <div className="reveal mx-auto max-w-[1180px] text-center">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-3.5 w-3.5"
            fill="currentColor"
          >
            <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
          </svg>
          Building the future
        </p>

        <h2
          id="vision-heading"
          className="mx-auto mt-5 max-w-[720px] text-[clamp(1.5rem,3.4vw,2.35rem)] leading-[1.24] font-extrabold tracking-[-0.015em] uppercase"
        >
          We build more than structures —{" "}
          <span>we build trust, innovation</span> and enduring value
        </h2>

        <span
          aria-hidden
          className="mx-auto mt-7 block h-[3px] w-14 bg-accent"
        />

        <a
          href="#services"
          className="group mt-7 inline-flex items-center gap-4 border border-line py-3 pr-3 pl-6 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-foreground"
        >
          More about us
          <span className="flex h-7 w-7 items-center justify-center bg-surface transition-colors group-hover:bg-accent group-hover:text-on-accent">
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

      {/* Media band: ghost type behind, offset accent frame, photo on top */}
      <div className="relative mt-12 lg:mt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden select-none"
        >
          <div className="animate-marquee-slow flex w-max gap-10 text-[clamp(3.5rem,11vw,8.5rem)] leading-none font-extrabold whitespace-nowrap text-transparent uppercase [-webkit-text-stroke:2px_var(--ghost)]">
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>{GHOST_PHRASE}</span>
            ))}
          </div>
        </div>

        <div className="from-right relative mx-auto w-[min(900px,92vw)]">
          {/* Offset outline gives the photo depth without a drop shadow */}
          <span
            aria-hidden
            className="absolute -top-4 -left-4 hidden h-full w-full border-[3px] border-accent md:block"
          />

          <div className="relative h-[260px] md:h-[400px] lg:h-[440px]">
            <Image
              src="/construction-site.jpg"
              alt="Aerial view of an active construction site with tower cranes over a city skyline"
              fill
              sizes="(min-width: 768px) 900px, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-7 max-w-[560px] text-center text-[12px] leading-[1.8] text-muted">
        Twenty five years of general contracting across nine states — the same
        crews, the same site managers, and a snag list that closes in weeks
        rather than quarters.
      </p>
    </section>
  );
}
