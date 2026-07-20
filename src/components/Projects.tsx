"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { projects, type Project } from "@/config/config";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const xTo = useRef<((v: number) => void) | null>(null);
  const yTo = useRef<((v: number) => void) | null>(null);

  useGSAP(() => {
    if (!preview.current) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    xTo.current = gsap.quickTo(preview.current, "x", {
      duration: 0.7,
      ease: "power3",
    });
    yTo.current = gsap.quickTo(preview.current, "y", {
      duration: 0.7,
      ease: "power3",
    });
  });

  const onMove = (e: React.MouseEvent) => {
    xTo.current?.(e.clientX);
    yTo.current?.(e.clientY);
  };

  return (
    <div onMouseMove={onMove}>
      <Reveal className="mb-14 flex items-center gap-4">
        <span className="font-mono text-sm text-neon">03</span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          / Projetos selecionados
        </span>
        <span className="h-px flex-1 bg-ink-3" />
      </Reveal>

      <ul className="border-t border-ink-3">
        {projects.map((p) => (
          <li key={p.index}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="abrir"
              onMouseEnter={() => setActive(p)}
              onMouseLeave={() => setActive(null)}
              className="group flex flex-col gap-2 border-b border-ink-3 py-8 transition-colors hover:bg-ink-2/40 sm:flex-row sm:items-center sm:gap-8 sm:px-4"
            >
              <span className="font-mono text-sm text-fog-dim">{p.index}</span>
              <div className="flex-1">
                <h3 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-none text-chalk transition-transform duration-500 group-hover:translate-x-2 sm:text-stroke sm:group-hover:text-stroke-chalk">
                  {p.title}
                </h3>
              </div>
              <span className="font-mono text-xs uppercase tracking-wide text-fog">
                {p.category}
              </span>
              <span className="hidden font-mono text-xs text-fog-dim sm:block">
                {p.year}
              </span>
              <ArrowUpRight className="size-6 shrink-0 text-fog transition-all duration-500 group-hover:rotate-45 group-hover:text-neon" />
            </a>
          </li>
        ))}
      </ul>

      {/* floating cursor preview (desktop) */}
      <div
        ref={preview}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.3s" }}
      >
        {active && (
          <div
            className="flex h-56 w-80 flex-col justify-between rounded-xl p-6"
            style={{
              background: `radial-gradient(120% 120% at 20% 0%, ${active.accent}33, #0d0d10 55%)`,
              border: `1px solid ${active.accent}55`,
            }}
          >
            <div
              className="font-display text-2xl font-semibold"
              style={{ color: active.accent }}
            >
              {active.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {active.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-black/20 px-2 py-1 font-mono text-[10px] text-chalk"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* mobile descriptions */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
        {projects.map((p) => (
          <div key={p.index} className="rounded-xl border border-ink-3 p-5">
            <div className="font-display text-lg text-chalk">{p.title}</div>
            <p className="mt-2 font-mono text-xs leading-relaxed text-fog">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
