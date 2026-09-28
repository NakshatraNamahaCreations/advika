import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/contact";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. Advika Constructions & Architects offers a design-build approach: our architects, engineers and construction professionals take your project from the first sketch to the final handover under one roof.",
  },
  {
    question: "Can I see the design before construction starts?",
    answer:
      "Yes. We work from conceptual sketches to detailed plans with you, optimise the layout through space planning, and prepare realistic 3D visualizations so you can see the final outcome before construction begins.",
  },
  {
    question: "Do you help choose materials and finishes?",
    answer:
      "We guide you in choosing quality, durable, visually appealing and environmentally friendly materials and finishes as part of our architectural design and planning service.",
  },
  {
    question: "Who will be working on my site?",
    answer:
      "A project manager and site engineers lead every site. Civil work is carried out by our masonry, centering, bar bending, plastering and concrete mixing crews under experienced head mesthris, and finishing is handled by our electrical, plumbing, carpentry, granite and tile, painting and fabrication teams.",
  },
  {
    question: "How will I know how my project is progressing?",
    answer:
      "We provide regular, real-time updates and access to project progress, and coordinate timelines, budgets and communication with you throughout, for transparency and timely completion.",
  },
  {
    question: "What happens after handover?",
    answer:
      "We offer post-construction services, including maintenance and warranty support, to ensure your continued satisfaction.",
  },
  {
    question: "Do you take on interior projects?",
    answer:
      "Yes. Our interiors portfolio includes modular kitchens, living rooms, bedrooms, wardrobes, false ceilings and pooja rooms. See the Interiors tab in our projects above.",
  },
  {
    question: "Where have you built?",
    answer:
      "We have completed 55+ projects, with 15+ more underway, across Bengaluru, Ramanagara, Channapatna, Bidadi and Makali. Our work was recognised with awards in 2021 and 2022.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-background px-6 pt-10 pb-24 md:px-14 lg:pt-14 lg:pb-32"
    >
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + contact */}
        <div className="from-left lg:sticky lg:top-24 lg:self-start">
          <p className="text-[14px] font-medium tracking-[0.06em] text-muted">
            FAQ
          </p>

          <h2
            id="faq-heading"
            className="mt-6 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.12] tracking-[-0.025em]"
          >
            Quick answers to questions you may have
          </h2>

          <div className="mt-12 text-[15px] leading-[1.8] text-foreground">
            <p>Can&apos;t find what you&apos;re looking for?</p>
            <p>Contact us here:</p>
            <a
              href={EMAIL_HREF}
              className="mt-1 inline-block font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-75"
            >
              {EMAIL}
            </a>
            <br />
            <a
              href={PHONE_HREF}
              className="mt-2 inline-block font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-75"
            >
              {PHONE}
            </a>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="from-right lg:pt-2">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group border-t border-line last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-[16px] leading-[1.5] font-semibold transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-[560px] pr-8 pb-7 text-[15px] leading-[1.85] text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
