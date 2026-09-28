type Team = {
  name: string;
  roles: { role: string; people: string[] }[];
};

// Company structure as charted in the Advicon profile.
const TEAMS: Team[] = [
  {
    name: "Site team",
    roles: [
      { role: "Project manager", people: ["Sridhar"] },
      {
        role: "Site engineers",
        people: ["Sunil", "Vijay", "Sagar", "Shahsi", "Bharth", "Sharth"],
      },
    ],
  },
  {
    name: "Design & office team",
    roles: [
      {
        role: "Design engineers",
        people: ["Hemavathi", "Jaahanavi", "Rakshitha"],
      },
      { role: "Costing & planning engineer", people: ["Nirmala"] },
    ],
  },
  {
    name: "Non-technical",
    roles: [
      { role: "Admin", people: ["Darshan"] },
      { role: "Accounts & finance", people: ["Chaitra"] },
    ],
  },
];

type Trade = {
  trade: string;
  count: string;
  unit: string;
  detail: string;
};

const CIVIL: Trade[] = [
  { trade: "Masonry", count: "10", unit: "mesthris", detail: "10 masons and 5 helpers" },
  { trade: "Centering", count: "5", unit: "mesthris", detail: "Each with 4 to 5 helpers" },
  { trade: "Bar bending", count: "5", unit: "mesthris", detail: "Each with 4 to 5 helpers" },
  { trade: "Plastering", count: "8", unit: "mesthris", detail: "Each with 6 to 8 helpers" },
  { trade: "Concrete mixing", count: "10", unit: "gangs", detail: "20 to 25 members in each gang" },
];

const TECHNICIAN: Trade[] = [
  { trade: "Electrician", count: "5", unit: "teams", detail: "5 to 6 members in each team" },
  { trade: "Plumbing", count: "4", unit: "teams", detail: "5 members in each team" },
  { trade: "Carpenter", count: "3", unit: "teams", detail: "4 to 5 members in each team" },
  { trade: "Granite & tiles", count: "5", unit: "teams", detail: "8 to 12 members in each team" },
  { trade: "Painter", count: "4", unit: "teams", detail: "9 to 15 members in each team, plus polishing crews of 2 to 3" },
  { trade: "Fabricator", count: "2", unit: "teams", detail: "8 to 10 members in each team" },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative overflow-hidden bg-ink px-6 py-20 text-white md:px-14 lg:py-28"
    >
      {/* Blueprint grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="reveal text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
            </svg>
            Advicon strength
          </p>

          <h2
            id="team-heading"
            className="mt-5 text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.2] font-extrabold tracking-[-0.02em] uppercase"
          >
            Company structure
          </h2>

          <p className="mt-4 text-[13px] tracking-[0.3em] text-white/55 uppercase">
            Creating spaces together
          </p>
        </div>

        {/* Org chart */}
        <div className="mt-14">
          <div className="reveal mx-auto w-fit bg-accent px-10 py-5 text-center text-on-accent">
            <p className="text-[17px] font-bold">Deepak CM</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] uppercase">
              Proprietor
            </p>
          </div>

          <span aria-hidden className="mx-auto block h-10 w-px bg-white/25" />

          <div className="relative">
            {/* Rail joining the three teams */}
            <span
              aria-hidden
              className="absolute top-0 right-[16.66%] left-[16.66%] hidden h-px bg-white/25 lg:block"
            />

            <ul className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              {TEAMS.map((team, i) => (
                <li
                  key={team.name}
                  className={`reveal reveal-${i + 1} flex flex-col`}
                >
                  <span
                    aria-hidden
                    className="mx-auto hidden h-8 w-px bg-white/25 lg:block"
                  />
                  <div className="flex-1 border border-white/15 bg-white/[0.03] p-7">
                    <h3 className="text-[12px] font-bold tracking-[0.18em] text-accent uppercase">
                      {team.name}
                    </h3>
                    <dl className="mt-6 space-y-5">
                      {team.roles.map((r) => (
                        <div key={r.role}>
                          <dt className="text-[10px] font-semibold tracking-[0.16em] text-white/50 uppercase">
                            {r.role}
                          </dt>
                          <dd className="mt-2 flex flex-wrap gap-2">
                            {r.people.map((person) => (
                              <span
                                key={person}
                                className="bg-white/[0.08] px-3 py-1.5 text-[12.5px] font-medium"
                              >
                                {person}
                              </span>
                            ))}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workforce */}
        <div className="mt-24">
          <div className="reveal flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                Advicon strength
              </p>
              <h2 className="mt-3 text-[clamp(1.4rem,2.8vw,1.9rem)] leading-[1.2] font-extrabold tracking-[-0.015em] uppercase">
                Experienced workforce
              </h2>
            </div>
            <p className="max-w-[420px] text-[12.5px] leading-[1.8] text-white/55">
              Dedicated civil crews and technician teams for every stage of the
              build, from the first pour to the final polish.
            </p>
          </div>

          <WorkforceGroup
            title="Civil work"
            lead="Led by 10 head mesthris"
            trades={CIVIL}
            columns="lg:grid-cols-5"
          />
          <WorkforceGroup
            title="Technicians"
            lead="Finishing and services teams"
            trades={TECHNICIAN}
            columns="lg:grid-cols-3"
          />
        </div>
      </div>
    </section>
  );
}

function WorkforceGroup({
  title,
  lead,
  trades,
  columns,
}: {
  title: string;
  lead: string;
  trades: Trade[];
  columns: string;
}) {
  return (
    <div className="mt-12">
      <div className="reveal flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-[13px] font-bold tracking-[0.18em] uppercase">
          {title}
        </h3>
        <span className="text-[12px] text-white/50">{lead}</span>
      </div>

      <ul className={`mt-5 grid gap-3 sm:grid-cols-2 ${columns}`}>
        {trades.map((t) => (
          <li
            key={t.trade}
            className="reveal border border-white/12 p-5 transition-colors hover:border-accent/60"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase">
              {t.trade}
            </p>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-[2rem] leading-none font-bold text-accent tabular-nums">
                {t.count}
              </span>
              <span className="text-[12px] text-white/60">{t.unit}</span>
            </p>
            <p className="mt-3 text-[11.5px] leading-[1.6] text-white/50">
              {t.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
