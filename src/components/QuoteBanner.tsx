import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section
      aria-label="Our approach"
      className="relative isolate z-20 -mt-2 overflow-hidden px-6 pt-28 pb-20 text-center [clip-path:polygon(0_4%,100%_0,100%_100%,0_100%)] md:-mt-3 md:px-14 lg:-mt-4 lg:pt-32 lg:pb-24"
    >
      <Image
        src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1900&q=80"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/92" />

      <blockquote className="mx-auto max-w-[820px]">
        <p className="text-[clamp(1.15rem,2.6vw,1.75rem)] leading-[1.45] font-bold tracking-[-0.01em] text-white uppercase">
          Architecture is basically the design of interiors, the art of
          organizing interior space
        </p>
        <footer className="mt-5 text-[11px] tracking-[0.18em] text-white/55 uppercase">
          <cite className="not-italic">Philip Johnson</cite>
        </footer>
      </blockquote>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#contact"
          className="bg-accent px-7 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-on-accent uppercase transition-opacity hover:opacity-90"
        >
          Request a quote
        </a>
        <a
          href="#services"
          className="border border-white/30 px-7 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-white hover:text-foreground"
        >
          View services
        </a>
      </div>
    </section>
  );
}
