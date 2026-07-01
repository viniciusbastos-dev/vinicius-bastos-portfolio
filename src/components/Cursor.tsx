"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Custom neon cursor: a small dot + a lagging ring.
 * Grows and shows a label when hovering elements with [data-cursor].
 * Disabled on touch / coarse pointers.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // 1. Detect pointer-fine devices, then render the cursor nodes.
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  // 2. Wire tweens + listeners only once the nodes are mounted.
  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;

    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const yRing = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });

    const move = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor], [role='button']"
      );
      if (el) {
        setHovering(true);
        setLabel(el.dataset.cursor || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon transition-[width,height,opacity] duration-300"
        style={{
          width: hovering ? 0 : 6,
          height: hovering ? 0 : 6,
        }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neon/60 text-[10px] font-mono uppercase tracking-wide text-neon transition-[width,height,background-color] duration-300"
        style={{
          width: hovering ? (label ? 84 : 46) : 34,
          height: hovering ? (label ? 84 : 46) : 34,
          backgroundColor: hovering ? "rgba(204,255,0,0.08)" : "transparent",
        }}
      >
        {label}
      </div>
    </>
  );
}
