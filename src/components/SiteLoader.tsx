"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Never let the loader outlive the page — if `load` is slow or never fires,
// this is the hard ceiling after which the site is shown regardless.
const SAFETY_MS = 4000;
// Short: just long enough to avoid a flicker, not long enough to feel like a wait.
const MIN_VISIBLE_MS = 250;
const FADE_MS = 450;

// Runs while the document is still parsing, long before React hydrates, so the
// count is moving from the first frame even on a slow connection. It eases to
// 92% on its own, then runs to 100% on the real `load` event.
const COUNTER_SCRIPT = `(function(){
  var n=document.getElementById("loader-count"),b=document.getElementById("loader-fill");
  if(!n||!b)return;
  var start=(performance&&performance.now?performance.now():Date.now()),done=false,value=0;
  function frame(now){
    now=now||(performance&&performance.now?performance.now():Date.now());
    if(done){value=Math.min(100,Math.ceil(value+(100-value)*0.35+1));}
    else{var s=(now-start)/1000;value=Math.max(value,Math.round(92*(1-Math.exp(-s*1.5))));}
    n.textContent=value;b.style.width=value+"%";
    if(value<100)requestAnimationFrame(frame);
  }
  if(document.readyState==="complete"){done=true;}
  else{window.addEventListener("load",function(){done=true;},{once:true});}
  setTimeout(function(){done=true;},${SAFETY_MS});
  requestAnimationFrame(frame);
})();`;

export default function SiteLoader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let safety: number;
    let minimum: number;

    const finish = () => {
      // Hold briefly so a fast load does not flash the loader on and off.
      minimum = window.setTimeout(() => setLeaving(true), MIN_VISIBLE_MS);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      safety = window.setTimeout(() => setLeaving(true), SAFETY_MS);
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(safety);
      window.clearTimeout(minimum);
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setRemoved(true), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  // Hold the page still underneath while the curtain is up.
  useEffect(() => {
    if (removed) return;
    const { style } = document.documentElement;
    const previous = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previous;
    };
  }, [removed]);

  if (removed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading AdviconIN"
      data-site-loader
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-[450ms] ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Blueprint grid, same motif as the site */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
      />
      {/* Warm glow behind the mark */}
      <div
        aria-hidden
        className="absolute h-[520px] w-[520px] rounded-full bg-accent/12 blur-3xl"
      />

      <div className="relative flex flex-col items-center">
        {/* The gold logo reads straight onto the navy, no card around it */}
        <Image
          src="/logo-full.png"
          alt="AdviconIN — Passion at building your dream"
          width={900}
          height={808}
          preload
          unoptimized
          className="loader-mark h-auto w-[min(210px,54vw)]"
        />

        {/* Percentage — the inline script below owns these two nodes */}
        <p
          aria-hidden
          className="mt-9 text-[clamp(1.9rem,5vw,2.6rem)] leading-none font-bold text-white tabular-nums"
        >
          <span id="loader-count" suppressHydrationWarning>
            0
          </span>
          <span className="ml-1 align-top text-[0.42em] font-semibold text-accent">
            %
          </span>
        </p>

        {/* Progress rail, filled to match */}
        <span
          aria-hidden
          className="mt-5 block h-[2px] w-[min(220px,60vw)] overflow-hidden bg-white/15"
        >
          <span
            id="loader-fill"
            suppressHydrationWarning
            className="block h-full w-0 bg-accent transition-[width] duration-200 ease-out"
          />
        </span>

        <script dangerouslySetInnerHTML={{ __html: COUNTER_SCRIPT }} />
      </div>

      {/* Without scripts nothing can dismiss the curtain, so never show it */}
      <noscript>
        <style>{`[data-site-loader]{display:none!important}`}</style>
      </noscript>
    </div>
  );
}
