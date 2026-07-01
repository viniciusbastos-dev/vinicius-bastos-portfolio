"use client";

import { socials } from "@/config/config";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center text-center">
      <Reveal className="mb-8 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
          04 / Vamos conversar
        </span>
      </Reveal>

      <Reveal>
        <p className="font-mono text-sm text-fog">Tem um projeto em mente?</p>
      </Reveal>

      <Reveal className="mt-6">
        <Magnetic strength={0.25}>
          <a
            href={`mailto:${socials.email}`}
            data-cursor="enviar"
            className="group inline-block font-display text-[clamp(2.2rem,9vw,8rem)] font-semibold leading-none text-chalk transition-colors hover:text-neon"
          >
            Bora criar
            <span className="inline-flex align-middle">
              <ArrowUpRight className="size-[0.7em] transition-transform duration-500 group-hover:rotate-45 group-hover:text-neon" />
            </span>
          </a>
        </Magnetic>
      </Reveal>

      <Reveal className="mt-8">
        <a
          href={`mailto:${socials.email}`}
          className="font-mono text-sm text-fog underline-offset-4 hover:text-neon hover:underline"
        >
          {socials.email}
        </a>
      </Reveal>

      <Reveal stagger className="mt-14 flex items-center gap-4">
        {[
          { label: "GitHub", href: socials.github },
          { label: "LinkedIn", href: socials.linkedin },
          { label: "Email", href: `mailto:${socials.email}` },
        ].map((s) => (
          <Magnetic key={s.label} strength={0.3}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="rounded-full border border-ink-4 px-6 py-3 font-mono text-xs uppercase tracking-wide text-chalk transition-colors hover:border-neon hover:text-neon"
            >
              {s.label}
            </a>
          </Magnetic>
        ))}
      </Reveal>
    </div>
  );
}
