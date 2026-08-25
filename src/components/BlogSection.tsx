import Image from "next/image";

type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
  image: string;
  alt: string;
  href: string;
};

const POSTS: Post[] = [
  {
    category: "Site notes",
    title: "What a monsoon actually costs a concrete pour",
    excerpt:
      "Four weeks of rain does not stop a build, but it changes the sequence. Here is how we re-plan a slab programme in June without pushing the handover date.",
    date: "12 August 2026",
    dateTime: "2026-08-12",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Steel and glass tower under construction against the sky",
    href: "#news",
  },
  {
    category: "Costing",
    title: "Why the cheapest quote is usually the most expensive",
    excerpt:
      "A line-by-line comparison of three real tenders for the same villa, and where the low bid quietly left work out.",
    date: "29 July 2026",
    dateTime: "2026-07-29",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    alt: "Engineer reviewing figures on site",
    href: "#news",
  },
  {
    category: "Materials",
    title: "Fly ash blocks versus red brick, three years on",
    excerpt:
      "We went back to six buildings we finished in 2023 and measured what the walls are doing now.",
    date: "14 July 2026",
    dateTime: "2026-07-14",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    alt: "Two people shaking hands over project documents",
    href: "#news",
  },
  {
    category: "Process",
    title: "Reading a drawing set before you sign the contract",
    excerpt:
      "Six things worth checking in your architect's package that will cost you money if nobody catches them.",
    date: "02 July 2026",
    dateTime: "2026-07-02",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=800&q=80",
    alt: "Architectural drawings spread across a table",
    href: "#news",
  },
];

export default function BlogSection() {
  const [featured, ...rest] = POSTS;

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="bg-background px-6 py-24 md:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Heading row */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="from-left">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-ink uppercase">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-3.5 w-3.5"
                fill="currentColor"
              >
                <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
              </svg>
              News &amp; insight
            </p>

            <h2
              id="news-heading"
              className="mt-5 max-w-[520px] text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.2] font-extrabold tracking-[-0.02em] uppercase"
            >
              What we learn on site,
              <span className="block">written down</span>
            </h2>
          </div>

          <a
            href="#news"
            className="from-right group inline-flex items-center gap-4 border border-line py-3 pr-3 pl-6 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-foreground"
          >
            All articles
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

        {/* Featured + list */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Featured */}
          <article className="from-left group">
            <a href={featured.href} className="block">
              <div className="relative h-[280px] overflow-hidden md:h-[360px]">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-0 left-0 bg-accent px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-on-accent uppercase">
                  {featured.category}
                </span>
              </div>

              <Meta
                date={featured.date}
                dateTime={featured.dateTime}
                readTime={featured.readTime}
                className="mt-6"
              />

              <h3 className="mt-3 text-[clamp(1.15rem,2.2vw,1.6rem)] leading-[1.3] font-bold tracking-[-0.015em] transition-colors group-hover:text-ink">
                {featured.title}
              </h3>

              <p className="mt-3 max-w-[480px] text-[13px] leading-[1.8] text-muted">
                {featured.excerpt}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">
                Read article
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </article>

          {/* Secondary posts */}
          <ul className="from-right divide-y divide-line border-t border-line lg:border-t-0 lg:pt-0">
            {rest.map((post) => (
              <li key={post.title} className="group first:lg:pt-0">
                <a href={post.href} className="flex gap-5 py-6">
                  <div className="relative h-[92px] w-[120px] shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-ink uppercase">
                      {post.category}
                    </p>
                    <h3 className="mt-2 text-[15px] leading-[1.4] font-semibold tracking-[-0.01em] transition-colors group-hover:text-ink">
                      {post.title}
                    </h3>
                    <Meta
                      date={post.date}
                      dateTime={post.dateTime}
                      readTime={post.readTime}
                      className="mt-2"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Meta({
  date,
  dateTime,
  readTime,
  className = "",
}: {
  date: string;
  dateTime: string;
  readTime: string;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] text-muted ${className}`}
    >
      <time dateTime={dateTime}>{date}</time>
      <span aria-hidden className="h-3 w-px bg-line" />
      <span>{readTime}</span>
    </p>
  );
}
