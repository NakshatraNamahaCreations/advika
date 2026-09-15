import Image from "next/image";

type Step = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const STEPS: Step[] = [
  {
    title: "Survey & design",
    description:
      "Setting out, soil tests and a constructability review of your drawings before a price is fixed.",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=800&q=80",
    alt: "Architectural drawings and a scale model on a table",
  },
  {
    title: "Foundation & frame",
    description:
      "Excavation, rebar, formwork and pours run to a fixed programme with weekly progress reports.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    alt: "Excavators working across an active construction site",
  },
  {
    title: "Envelope & services",
    description:
      "Cladding, glazing and MEP first fix, sealed and weather-tight before the monsoon arrives.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    alt: "Steel and glass facade of a tower under construction",
  },
  {
    title: "Finish & handover",
    description:
      "Snagging, testing and documentation, with the snag list closed in weeks rather than quarters.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    alt: "Completed modern house with full-height glazing",
  },
];

export default function BuildProcess() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-background px-6 py-24 md:px-14 lg:py-28"
    >
      {/* Oversized word behind the heading */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-14 text-center text-[clamp(4rem,15vw,11rem)] leading-none font-extrabold tracking-[-0.045em] text-[#f3ecdc] select-none"
      >
        Structure
      </span>

      <div className="relative mx-auto max-w-[1180px]">
        <div className="reveal text-center">
          <p className="reveal text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">
            Frame and envelope
          </p>

          <h2
            id="process-heading"
            className="reveal mx-auto mt-4 max-w-[640px] text-[clamp(1.5rem,3.2vw,2.3rem)] leading-[1.22] font-extrabold tracking-[-0.02em] uppercase"
          >
            Long spans, tight tolerances,
            <span className="block">nothing left to the site</span>
          </h2>

          <p className="reveal reveal-1 mx-auto mt-6 max-w-[520px] text-[13px] leading-[1.85] text-muted">
            Four stages, one team, and the same site manager from the first
            setting-out peg to the day you get the keys.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connector running behind the numbers */}
          <span
            aria-hidden
            className="absolute top-[186px] right-0 left-0 hidden h-px bg-line lg:block"
          />

          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`reveal ${i > 0 ? `reveal-${i}` : ""} group relative`}
            >
              <div className="relative h-[190px] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#06101f]/35 to-transparent"
                />
              </div>

              {/* Number sits on the connector line */}
              <span className="relative z-10 -mt-6 ml-5 flex h-12 w-12 items-center justify-center bg-accent text-[15px] font-bold text-on-accent tabular-nums shadow-[0_10px_26px_rgba(201,154,46,0.4)] transition-transform duration-300 group-hover:-translate-y-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-[15px] font-bold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-[1.75] text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal reveal-3 mt-16 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#projects"
            className="group flex items-center gap-4 bg-accent py-4 pr-4 pl-7 text-[11px] font-semibold tracking-[0.16em] text-on-accent uppercase transition-opacity hover:opacity-90"
          >
            See our projects
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
            href="#contact"
            className="border-b-2 border-foreground/30 pb-1 text-[12.5px] font-semibold tracking-[0.06em] transition-colors hover:border-accent hover:text-ink"
          >
            Talk to a site manager
          </a>
        </div>
      </div>
    </section>
  );
}
