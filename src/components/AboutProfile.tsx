import Image from "next/image";

// The About Us page of the Advicon company profile, word for word.
export default function AboutProfile() {
  return (
    <section
      aria-labelledby="about-profile-heading"
      className="bg-background px-6 py-20 md:px-14 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="from-left">
          <p className="text-[12px] font-semibold tracking-[0.3em] text-accent uppercase">
            About us
          </p>

          <h2
            id="about-profile-heading"
            className="mt-5 max-w-[520px] text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.22] font-extrabold tracking-[-0.02em]"
          >
            Advika Constructions &amp; Architects, established in 2016
          </h2>

          <span aria-hidden className="mt-6 block h-[3px] w-14 bg-accent" />

          <div className="mt-7 space-y-5 text-[15px] leading-[1.9] text-muted">
            <p>
              Advicon is more than a construction company, we have a team of
              dedicated architects, engineers, and construction professionals
              committed to bringing visions to life.
            </p>
            <p>
              The company&apos;s strength lies in its ability to seamlessly
              blend innovative architectural design with precise construction
              execution, offering comprehensive solutions from concept to
              completion.
            </p>
          </div>
        </div>

        <div className="from-right relative">
          <span
            aria-hidden
            className="absolute -top-5 -right-5 hidden h-full w-full border-[3px] border-accent/35 lg:block"
          />
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/profile/p03-1-cropped.jpg"
              alt="3D visualization of a bedroom interior with a teal upholstered bed, fluted wall panelling and a study desk"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
