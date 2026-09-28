import Image from "next/image";

type Milestone = {
  value: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const MILESTONES: Milestone[] = [
  {
    value: "55+",
    title: "Completed projects",
    description:
      "55+ projects successfully delivered, demonstrating a proven track record of efficient project management and client satisfaction.",
    image: "/profile/p06-2.jpg",
    alt: "Completed two-storey house with wood-clad bays and a pergola terrace",
  },
  {
    value: "15+",
    title: "Ongoing projects",
    description:
      "Currently 15+ projects underway, reflecting the company's continued growth and expanding portfolio.",
    image: "/profile/p06-1.jpg",
    alt: "Narrow three-storey house with orange and grey façade",
  },
];

const AWARDS = [
  {
    image: "/profile/p07-1.jpg",
    caption: "UltraTech Concrete Day & Construction Excellence Awards 2021",
    alt: "The Advika Constructions team on stage receiving plaques at the UltraTech Concrete Day and Construction Excellence Awards 2021",
    width: 960,
    height: 504,
  },
  {
    image: "/profile/p07-2.jpg",
    caption: "ICI UltraTech Awards",
    alt: "The Advika Constructions team on stage holding their trophy at the ICI UltraTech Awards",
    width: 896,
    height: 672,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative overflow-hidden bg-surface px-6 py-20 md:px-14 lg:py-28"
    >
      {/* Faint blueprint grid for texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#06101f_1px,transparent_1px),linear-gradient(to_bottom,#06101f_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="reveal max-w-[640px]">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
            </svg>
            A legacy of achievement
          </p>

          <h2
            id="achievements-heading"
            className="mt-6 text-[clamp(1.75rem,3.6vw,2.6rem)] leading-[1.15] font-extrabold tracking-[-0.02em] uppercase"
          >
            Award-winning excellence
          </h2>

          <span aria-hidden className="mt-7 block h-[3px] w-14 bg-accent" />

          <p className="mt-7 text-[14px] leading-[1.85] text-muted">
            Advika Constructions received prestigious recognition for two
            consecutive years, in 2021 and 2022, showcasing our dedication to
            quality and design excellence.
          </p>
        </div>

        {/* Award photos */}
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {AWARDS.map((award, i) => (
            <li
              key={award.image}
              className={i === 0 ? "from-left" : "from-right"}
            >
              <figure className="h-full bg-background p-3 shadow-[0_12px_34px_rgba(20,17,15,0.08)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.alt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center gap-3 px-2 pt-4 pb-2 text-[12.5px] font-semibold">
                  <TrophyIcon />
                  {award.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Project milestones */}
        <div className="mt-20">
          <h3 className="reveal text-[11px] font-bold tracking-[0.2em] text-ink uppercase">
            Projects
          </h3>

          <ul className="mt-6 grid gap-6 lg:grid-cols-2">
            {MILESTONES.map((m, i) => (
              <li
                key={m.title}
                className={`reveal ${i > 0 ? "reveal-1" : ""} grid overflow-hidden border border-line bg-background sm:grid-cols-[200px_minmax(0,1fr)]`}
              >
                <div className="relative h-[220px] sm:h-full sm:min-h-[240px]">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    sizes="(min-width: 640px) 200px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <span className="block text-[2.6rem] leading-none font-bold tracking-tight text-accent tabular-nums">
                    {m.value}
                  </span>
                  <span className="mt-3 block text-[13px] font-bold tracking-[0.12em] uppercase">
                    {m.title}
                  </span>
                  <p className="mt-3 text-[12.5px] leading-[1.8] text-muted">
                    {m.description}
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

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-5 w-5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3" />
      <path d="M12 13v4M8.5 20h7M9.5 17h5v3h-5z" />
    </svg>
  );
}
