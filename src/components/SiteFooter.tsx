import type { ReactNode } from "react";

// Update on each yearly rollover — deliberately static so a cached build
// can never show a stale year computed at build time.
const YEAR = 2026;

const COMPANY = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "News & insight", href: "#news" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  { label: "General contracting", href: "#services" },
  { label: "Design & build", href: "#services" },
  { label: "Exterior & façade", href: "#services" },
  { label: "Interior fit-out", href: "#services" },
  { label: "Landscape works", href: "#services" },
];

const SOCIAL: { label: string; href: string; icon: ReactNode }[] = [
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-ink text-white">
      {/* Closing call to action */}
      <div className="border-b border-white/10 px-6 py-12 md:px-14">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[520px] text-[clamp(1.35rem,2.8vw,1.9rem)] leading-[1.25] font-extrabold tracking-[-0.015em] uppercase">
            Let&apos;s build something
            <span className="text-accent"> that lasts</span>
          </h2>

          <a
            href="tel:+919000000000"
            className="group inline-flex items-center gap-4 bg-accent py-3.5 pr-3.5 pl-7 text-[11px] font-semibold tracking-[0.16em] text-on-accent uppercase transition-opacity hover:opacity-90"
          >
            Talk to us
            <span className="flex h-7 w-7 items-center justify-center bg-on-accent/15">
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
      </div>

      {/* Columns */}
      <div className="px-6 py-16 md:px-14">
        <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
          {/* Brand */}
          <div className="from-left">
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-on-accent">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 16a9 9 0 0 1 18 0" />
                  <path d="M2 16h20v2H2z" />
                  <path d="M10 7.6V16M14 7.6V16" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold tracking-tight">
                  Advika
                </span>
                <span className="block text-[10px] tracking-[0.18em] text-white/55 uppercase">
                  Construction
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-[320px] text-[12px] leading-[1.85] text-white/55">
              General contracting for residential, commercial and industrial
              projects since 1998. In-house crews, fixed schedules, and a snag
              list that closes in weeks.
            </p>

            <ul className="mt-7 flex gap-3">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterNav title="Company" links={COMPANY} />
          <FooterNav title="What we do" links={SERVICES} />

          {/* Contact */}
          <div className="from-right">
            <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase">
              Get in touch
            </h3>

            <address className="mt-6 space-y-4 text-[12px] leading-[1.7] text-white/55 not-italic">
              <p>
                Plot 118, Sector 44
                <br />
                Gurugram 122003, Haryana
              </p>
              <p>
                <a
                  href="tel:+919000000000"
                  className="transition-colors hover:text-accent"
                >
                  +91 90000 00000
                </a>
                <br />
                <a
                  href="mailto:hello@advika.build"
                  className="transition-colors hover:text-accent"
                >
                  hello@advika.build
                </a>
              </p>
            </address>

            <p className="mt-5 text-[11px] leading-[1.7] text-white/40">
              Site office hours
              <span className="block text-white/60">
                Mon – Sat, 9:00 – 18:30
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 px-6 py-6 md:px-14">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 text-[11px] text-white/45">
          <p>© {YEAR} Advika Construction. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Terms of service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase">
        {title}
      </h3>
      <ul className="mt-6 space-y-3 text-[12px] text-white/55">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  className: "h-4 w-4",
  "aria-hidden": true,
};

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.5-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.5v3h2.7v8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <circle cx="16.8" cy="7.2" r="1.1" />
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm2.4 14a2.4 2.4 0 0 1-2.4 2.4H7A2.4 2.4 0 0 1 4.6 17V7A2.4 2.4 0 0 1 7 4.6h10A2.4 2.4 0 0 1 19.4 7z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6.9 20H3.8V9.6h3.1zM5.3 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 20h-3.1v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H10V9.6h3v1.4h.1a3.3 3.3 0 0 1 3-1.6c3.1 0 3.7 2.1 3.7 4.8z" />
    </svg>
  );
}
