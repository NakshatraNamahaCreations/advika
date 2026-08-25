const PHRASES = [
  "Building better homes for better tomorrow",
  "Concrete, steel and craft since 1998",
  "On time, on budget, on site",
];

export default function Marquee() {
  // Rendered twice back to back so the -50% translate loops seamlessly.
  const run = [...PHRASES, ...PHRASES];

  return (
    <div className="overflow-hidden border-y border-line bg-background py-6">
      <ul
        className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap"
        aria-label="Company slogans"
      >
        {run.map((phrase, i) => (
          <li
            key={`${phrase}-${i}`}
            aria-hidden={i >= PHRASES.length}
            className="flex items-center gap-10 text-[15px] font-bold tracking-[-0.01em] uppercase md:text-[19px]"
          >
            {phrase}
            <span className="text-accent" aria-hidden>
              ✳
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
