"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { COMPLETED, INTERIORS, type Project } from "@/lib/projects";

const TABS = [
  { label: "Completed homes", badge: "Completed", projects: COMPLETED },
  { label: "Interiors", badge: "Interiors", projects: INTERIORS },
];

export default function ProjectsSection() {
  const [tab, setTab] = useState(0);
  const [viewing, setViewing] = useState<Project | null>(null);
  const track = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const { projects, badge } = TABS[tab];

  // The track is a scroll-snap container, so paging is just a scroll: the
  // browser handles touch swipes, and the arrows and dots drive the same thing.
  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measure = () => {
      const width = el.clientWidth || 1;
      setPages(Math.max(1, Math.round(el.scrollWidth / width)));
      setPage(Math.round(el.scrollLeft / width));
    };

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [tab]);

  const goto = (target: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-background px-6 py-16 text-foreground md:px-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
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
              Our portfolio
            </p>

            <h2
              id="projects-heading"
              className="mt-5 text-[clamp(1.6rem,3.4vw,2.35rem)] leading-[1.2] font-extrabold tracking-[-0.02em] uppercase"
            >
              Our projects
            </h2>

            <span aria-hidden className="mt-6 block h-[3px] w-14 bg-accent" />

            <p className="mt-6 max-w-[460px] text-[13px] leading-[1.8] text-muted">
              Over 55 projects delivered across Bengaluru and Ramanagara, with
              15 more underway. Open any project to see every photo.
            </p>
          </div>

          {/* Filter and arrows */}
          <div className="from-right flex flex-col items-start gap-5 sm:items-end">
            <div className="flex flex-wrap gap-2">
              {TABS.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => {
                    setTab(i);
                    track.current?.scrollTo({ left: 0 });
                  }}
                  aria-pressed={i === tab}
                  className={`cursor-pointer px-5 py-3 text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                    i === tab
                      ? "bg-accent text-on-accent"
                      : "border border-line text-foreground hover:border-foreground"
                  }`}
                >
                  {t.label}
                  <span className="ml-2 tabular-nums opacity-70">
                    {t.projects.length}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <PageButton
                direction="prev"
                disabled={page === 0}
                onClick={() => goto(page - 1)}
              />
              <span className="text-[12px] text-muted tabular-nums">
                <span className="font-semibold text-foreground">
                  {String(page + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(pages).padStart(2, "0")}
              </span>
              <PageButton
                direction="next"
                disabled={page >= pages - 1}
                onClick={() => goto(page + 1)}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        {/* Gutters come from padding inside each card, not a flex gap, so one
            page of scrolling is always a whole number of cards. */}
        <ul
          ref={track}
          aria-label={`${TABS[tab].label} projects`}
          className="mt-12 -mx-2 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <li
              key={project.id}
              className="shrink-0 basis-full snap-start px-2 sm:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard
                project={project}
                badge={badge}
                onOpen={() => setViewing(project)}
              />
            </li>
          ))}
        </ul>

        {/* Dots, while there are few enough to stay tappable */}
        {pages > 1 && pages <= 8 && (
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goto(i)}
                aria-label={`Go to slide ${i + 1} of ${pages}`}
                aria-current={i === page}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-7 bg-accent"
                    : "w-2 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {viewing && (
        <Lightbox project={viewing} onClose={() => setViewing(null)} />
      )}
    </section>
  );
}

function PageButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous projects" : "Next projects"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-on-accent disabled:cursor-default disabled:opacity-35 disabled:hover:border-line disabled:hover:bg-transparent disabled:hover:text-foreground"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

function ProjectCard({
  project,
  badge,
  onOpen,
}: {
  project: Project;
  badge: string;
  onOpen: () => void;
}) {
  const [cover] = project.photos;
  const count = project.photos.length;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.subtitle.toLowerCase()}, ${project.title}: ${count} ${count === 1 ? "photo" : "photos"}`}
      className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-surface text-left"
    >
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#06101f]/85 via-[#06101f]/15 to-transparent"
      />

      <span className="absolute top-0 left-0 bg-accent px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-on-accent uppercase">
        {badge}
      </span>

      <span className="absolute right-5 bottom-4 left-5 flex items-end justify-between gap-4 text-white">
        <span className="min-w-0">
          <span className="flex items-center gap-1.5 text-[15px] leading-[1.3] font-semibold">
            {badge === "Completed" && <PinIcon />}
            <span className="truncate">{project.title}</span>
          </span>
          <span className="mt-1 block text-[11px] text-white/65">
            {project.subtitle} · {count} {count === 1 ? "photo" : "photos"}
          </span>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/35 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </span>
    </button>
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const { photos } = project;
  const photo = photos[index];

  const go = useCallback(
    (step: number) => {
      setIndex((i) => (i + step + photos.length) % photos.length);
    },
    [photos.length],
  );

  // Native modal dialog: focus trap, Esc to close and a top-layer backdrop.
  // Cleanup must not call close(): that fires onClose, which would shut the
  // viewer straight away when Strict Mode re-runs this effect. Unmounting
  // removes the dialog from the top layer anyway.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";

    return () => {
      style.overflow = previous;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${project.subtitle}, ${project.title}`}
      onClose={onClose}
      onKeyDown={(event) => {
        if (photos.length < 2) return;
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-ink p-0 text-white backdrop:bg-ink"
    >
      <div className="flex h-full flex-col px-4 py-4 md:px-10 md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-accent uppercase">
              {project.subtitle}
            </p>
            <h3 className="mt-1 truncate text-[16px] font-semibold md:text-[18px]">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[12px] text-white/60 tabular-nums">
              {index + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close gallery"
              autoFocus
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/30 transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Photo */}
        <div className="relative mt-4 min-h-0 flex-1">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-contain"
          />

          {photos.length > 1 && (
            <>
              <StepButton direction="prev" onClick={() => go(-1)} />
              <StepButton direction="next" onClick={() => go(1)} />
            </>
          )}
        </div>

        <p className="mt-3 text-center text-[12px] leading-[1.6] text-white/60">
          {photo.alt}
        </p>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <ul className="mt-4 flex justify-center gap-2">
            {photos.map((p, i) => (
              <li key={p.src}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1}`}
                  aria-current={i === index}
                  className={`relative block h-14 w-20 cursor-pointer overflow-hidden transition-opacity md:h-16 md:w-24 ${
                    i === index
                      ? "ring-2 ring-accent"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p.src}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );
}

function StepButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous photo" : "Next photo"}
      className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-[#06101f]/70 text-white transition-colors hover:bg-accent hover:text-on-accent ${
        direction === "prev" ? "left-0" : "right-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-3.5 w-3.5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
