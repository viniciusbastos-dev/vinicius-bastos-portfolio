"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const finish = () => {
        document.documentElement.dataset.loaded = "true";
        window.dispatchEvent(new Event("preloader:done"));
        setHidden(true);
      };

      if (reduce) {
        setCount(100);
        finish();
        return;
      }

      document.body.style.overflow = "hidden";
      const counter = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          finish();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.round(counter.v)),
      })
        .to(".pre-label", { yPercent: -110, duration: 0.6, ease: "power3.in" }, "-=0.3")
        .to(
          ".pre-count",
          { yPercent: 110, duration: 0.6, ease: "power3.in" },
          "<"
        )
        .to(
          root.current,
          { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "-=0.15"
        );
    },
    { scope: root }
  );

  if (hidden) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink"
    >
      <div className="overflow-hidden">
        <p className="pre-label font-mono text-xs uppercase tracking-[0.4em] text-neon">
          Vinícius Bastos — Fullstack
        </p>
      </div>
      <div className="mt-6 overflow-hidden">
        <span className="pre-count block font-display text-mega font-semibold leading-none text-chalk">
          {count}
        </span>
      </div>
      <div className="absolute bottom-10 left-0 h-[2px] w-full bg-ink-3">
        <div
          className="h-full bg-neon"
          style={{ width: `${count}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </div>
  );
}
