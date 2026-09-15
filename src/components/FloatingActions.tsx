const WHATSAPP_NUMBER = "919000000000";
const WHATSAPP_MESSAGE = "Hi AdviconIN, I would like to discuss a project.";

export default function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 md:right-7 md:bottom-7">
      <FloatingAction
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          WHATSAPP_MESSAGE,
        )}`}
        label="Chat on WhatsApp"
        className="bg-[#25d366]"
        pulse
        external
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-6 w-6"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-2.8.8.8-2.8-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3l-1.8-.9c-.3-.1-.5-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4z" />
        </svg>
      </FloatingAction>

      <FloatingAction
        href="#top"
        label="Back to top"
        className="bg-accent"
        arrowLift
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </FloatingAction>
    </div>
  );
}

function FloatingAction({
  href,
  label,
  className,
  children,
  pulse = false,
  arrowLift = false,
  external = false,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
  pulse?: boolean;
  arrowLift?: boolean;
  external?: boolean;
}) {
  return (
    <div className="group relative flex items-center">
      {/* Label slides out on hover, hidden from assistive tech (the link is labelled) */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-full mr-3 translate-x-2 rounded-sm bg-foreground px-3 py-2 text-[11px] font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      >
        {label}
      </span>

      {pulse && (
        <span
          aria-hidden
          className={`absolute inset-0 animate-ping rounded-full opacity-40 ${className}`}
        />
      )}

      <a
        href={href}
        aria-label={label}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : null)}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_28px_rgba(20,17,15,0.28)] transition-transform duration-200 hover:scale-110 focus-visible:scale-110 ${className}`}
      >
        <span
          className={
            arrowLift
              ? "transition-transform duration-200 group-hover:-translate-y-0.5"
              : undefined
          }
        >
          {children}
        </span>
      </a>
    </div>
  );
}
