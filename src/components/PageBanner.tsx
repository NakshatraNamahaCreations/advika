import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  crumb: string;
};

// Banner for inner pages: gives the transparent site header a dark backdrop.
export default function PageBanner({
  title,
  subtitle,
  image,
  alt,
  crumb,
}: Props) {
  return (
    <section
      aria-label={title}
      className="relative isolate overflow-hidden px-6 pt-44 pb-20 md:px-14 lg:pt-52 lg:pb-24"
    >
      <Image
        src={image}
        alt={alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06101f]/95 via-[#06101f]/80 to-[#06101f]/60"
      />

      <div className="mx-auto max-w-[1280px]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[12px] text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-accent">{crumb}</li>
          </ol>
        </nav>

        <h1 className="mt-5 text-[clamp(2rem,5vw,3.4rem)] leading-[1.1] font-extrabold tracking-[-0.02em] text-white uppercase">
          {title}
        </h1>
        <p className="mt-5 max-w-[560px] text-[15px] leading-[1.85] text-white/70">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
