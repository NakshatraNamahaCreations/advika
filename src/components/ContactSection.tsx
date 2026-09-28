"use client";

import { useRef, useState, type FormEvent } from "react";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, WHATSAPP_NUMBER } from "@/lib/contact";

const PROJECT_TYPES = [
  "House construction",
  "Architectural design & planning",
  "Interiors",
  "Turnkey project",
  "Something else",
];

const LOCATIONS = "Bengaluru · Ramanagara · Channapatna · Bidadi · Makali";

type Enquiry = {
  name: string;
  phone: string;
  email: string;
  type: string;
  place: string;
  message: string;
};

function readForm(form: HTMLFormElement): Enquiry {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    type: get("type"),
    place: get("place"),
    message: get("message"),
  };
}

// One plain-text enquiry, whether it travels by WhatsApp or by email.
function composeMessage(enquiry: Enquiry) {
  const lines = [
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    enquiry.email && `Email: ${enquiry.email}`,
    `Project: ${enquiry.type}`,
    enquiry.place && `Location: ${enquiry.place}`,
    enquiry.message && `Details: ${enquiry.message}`,
  ].filter(Boolean);
  return `New enquiry from the Advicon website\n\n${lines.join("\n")}`;
}

export default function ContactSection() {
  const [notice, setNotice] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const send = (form: HTMLFormElement, via: "whatsapp" | "email") => {
    const enquiry = readForm(form);
    const body = composeMessage(enquiry);

    if (via === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setNotice("Opening WhatsApp with your details. Press send there to reach us.");
    } else {
      const subject = `Website enquiry — ${enquiry.type || "project"}`;
      // A link click hands the mailto: to the mail app without navigating away
      const link = document.createElement("a");
      link.href = `${EMAIL_HREF}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      link.rel = "noopener";
      link.click();
      setNotice("Opening your email app with your details. Press send there to reach us.");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-surface px-6 py-20 md:px-14 lg:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#06101f_1px,transparent_1px),linear-gradient(to_bottom,#06101f_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Left: why get in touch, and the direct details */}
        <div className="from-left">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-ink uppercase">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
            </svg>
            Get in touch
          </p>

          <h2
            id="contact-heading"
            className="mt-6 text-[clamp(1.9rem,4vw,2.9rem)] leading-[1.15] font-extrabold tracking-[-0.025em]"
          >
            Tell us about your project
          </h2>

          <span aria-hidden className="mt-7 block h-[3px] w-14 bg-accent" />

          <p className="mt-7 max-w-[420px] text-[15px] leading-[1.9] text-muted">
            Share a few details and we will get back to you. Whether it is a new
            house, a design and planning package or interiors, one team takes it
            from the first sketch to the final handover.
          </p>

          <dl className="mt-10 space-y-6 text-[15px]">
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                Call us
              </dt>
              <dd className="mt-1.5">
                <a
                  href={PHONE_HREF}
                  className="font-semibold transition-colors hover:text-ink"
                >
                  {PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                Email us
              </dt>
              <dd className="mt-1.5">
                <a
                  href={EMAIL_HREF}
                  className="font-semibold transition-colors hover:text-ink"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                We build across
              </dt>
              <dd className="mt-1.5 text-[14px] text-muted">{LOCATIONS}</dd>
            </div>
          </dl>
        </div>

        {/* Right: the form */}
        <div className="from-right border border-line bg-background p-6 shadow-[0_18px_50px_rgba(20,17,15,0.07)] md:p-10">
          <form
            ref={formRef}
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              send(event.currentTarget, "whatsapp");
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Field id="name" label="Your name" autoComplete="name" required />
            <Field
              id="phone"
              label="Phone number"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
            />
            <Field
              id="email"
              label="Email (optional)"
              type="email"
              autoComplete="email"
            />
            <Field
              id="place"
              label="Project location (optional)"
              autoComplete="address-level2"
            />

            <div className="sm:col-span-2">
              <label
                htmlFor="type"
                className="block text-[12px] font-semibold tracking-[0.1em] text-foreground uppercase"
              >
                What do you need?
              </label>
              <select
                id="type"
                name="type"
                defaultValue={PROJECT_TYPES[0]}
                className="mt-2 w-full border border-line bg-background px-4 py-3.5 text-[15px] outline-none focus:border-accent"
              >
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-[12px] font-semibold tracking-[0.1em] text-foreground uppercase"
              >
                Details (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Plot size, floors, budget range, timeline…"
                className="mt-2 w-full resize-y border border-line bg-background px-4 py-3.5 text-[15px] outline-none placeholder:text-muted/70 focus:border-accent"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex cursor-pointer items-center gap-3 bg-accent px-7 py-4 text-[12px] font-semibold tracking-[0.16em] text-on-accent uppercase transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon />
                Send on WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  // Same fields and the same validation, delivered by email
                  const form = formRef.current;
                  if (!form || !form.reportValidity()) return;
                  send(form, "email");
                }}
                className="cursor-pointer border-b-2 border-foreground/30 pb-1 text-[14px] font-semibold tracking-[0.06em] transition-colors hover:border-accent hover:text-ink"
              >
                Send by email instead
              </button>
            </div>

            <p
              aria-live="polite"
              className="text-[13px] leading-[1.7] text-muted sm:col-span-2"
            >
              {notice ||
                "Your details are sent straight to us on WhatsApp — nothing is stored on this website."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[12px] font-semibold tracking-[0.1em] text-foreground uppercase"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="mt-2 w-full border border-line bg-background px-4 py-3.5 text-[15px] outline-none focus:border-accent"
      />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-2.8.8.8-2.8-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3l-1.8-.9c-.3-.1-.5-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4z" />
    </svg>
  );
}
