type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "Do you build the entire project in-house?",
    answer:
      "Civil, structural and finishing works are carried out by our own crews. Specialist packages such as lifts, façade glazing and HVAC commissioning go to long-standing subcontractors we have worked with for over a decade — but they report to our site manager, not to you.",
  },
  {
    question: "What happens if the site conditions change?",
    answer:
      "Every contract carries a documented variation process. If ground conditions, drawings or approvals change, you get a written cost and schedule impact within five working days, and nothing proceeds until you sign it off.",
  },
  {
    question: "Are your crews licensed and insured?",
    answer:
      "Yes. All site engineers hold current certification, plant operators are separately licensed, and we carry contractor's all-risk plus third-party liability cover on every project. Certificates are shared at contract signing.",
  },
  {
    question: "How do you handle project delays?",
    answer:
      "Programmes are built with float against monsoon and approval windows. You receive a weekly progress report against the baseline, so slippage shows up in week one rather than at handover — and liquidated damages are written into our contracts, not just yours.",
  },
  {
    question: "Which regions do you work in?",
    answer:
      "We operate across nine states, with permanent site offices in Delhi NCR, Pune and Hyderabad. Projects outside these regions are taken on above a minimum contract value, since we mobilise our own crews rather than hiring locally.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "Residential towers, commercial fit-outs, warehousing and light industrial builds. We do not take on heavy infrastructure, roads or marine works.",
  },
  {
    question: "Can you work from our architect's drawings?",
    answer:
      "Yes, and most of our work arrives that way. We review the drawing set for constructability before pricing and flag anything that will cause trouble on site while it is still cheap to change.",
  },
  {
    question: "How is payment structured?",
    answer:
      "Against measured milestones, certified by your project manager or an independent quantity surveyor. We do not ask for large advances — mobilisation is typically capped at ten percent.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-background px-6 py-24 md:px-14 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + contact */}
        <div className="from-left lg:sticky lg:top-24 lg:self-start">
          <p className="text-[13px] text-muted">FAQ</p>

          <h2
            id="faq-heading"
            className="mt-6 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.12] tracking-[-0.025em]"
          >
            Quick answers to questions you may have
          </h2>

          <div className="mt-12 text-[13px] leading-[1.7] text-foreground">
            <p>Can&apos;t find what you&apos;re looking for?</p>
            <p>Contact us here:</p>
            <a
              href="mailto:hello@advika.build"
              className="mt-1 inline-block font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-75"
            >
              hello@advika.build
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-[14px] leading-[1.5] font-medium transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-[520px] pr-8 pb-7 text-[13px] leading-[1.8] text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
