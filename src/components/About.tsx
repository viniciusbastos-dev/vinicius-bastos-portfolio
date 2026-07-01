"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const STATEMENT =
  "Sou desenvolvedor fullstack focado em transformar ideias complexas em produtos rápidos, acessíveis e memoráveis. Da arquitetura de back-end às micro-interações do front, entrego software que as pessoas sentem prazer em usar.";

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "30+", label: "Projetos entregues" },
  { value: "∞", label: "Café consumido" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".about-word");
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <Reveal className="mb-14 flex items-center gap-4">
        <span className="font-mono text-sm text-neon">01</span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          / Sobre mim
        </span>
        <span className="h-px flex-1 bg-ink-3" />
      </Reveal>

      <p className="about-statement max-w-5xl font-display text-[clamp(1.6rem,4.5vw,3.4rem)] font-semibold leading-[1.15] text-chalk">
        {STATEMENT.split(" ").map((w, i) => (
          <span key={i} className="about-word inline-block">
            {w}&nbsp;
          </span>
        ))}
      </p>

      <Reveal stagger className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-ink-3 pt-5">
            <div className="font-display text-c6xl font-semibold leading-none text-neon">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wide text-fog">
              {s.label}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
