"use client";

import { skillGroups, marqueeSkills } from "@/config/config";
import Reveal from "./Reveal";
import BorderGlow from "./ui/BorderGlow";

export default function Skills() {
  return (
    <div>
      <Reveal className="mb-14 flex items-center gap-4">
        <span className="font-mono text-sm text-neon">02</span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          / Stack &amp; ferramentas
        </span>
        <span className="h-px flex-1 bg-ink-3" />
      </Reveal>

      <Reveal className="mb-16 max-w-3xl">
        <h2 className="font-display text-c6xl font-semibold leading-[1.05] text-chalk">
          Tudo que preciso para levar um produto do{" "}
          <span className="text-neon">zero à produção</span>.
        </h2>
      </Reveal>

      <Reveal
        stagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <BorderGlow
            key={group.label}
            className="h-full"
            borderRadius={16}
            backgroundColor="#0D0D10"
            glowColor="72 100 50"
            colors={["#CCFF00", "#7C6FF0", "#F4F4F2"]}
            glowRadius={30}
          >
            <div className="p-7">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold text-chalk">
                  {group.label}
                </h3>
                <span className="font-mono text-xs text-fog-dim">
                  {group.items.length}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    data-cursor=""
                    className="rounded-full border border-ink-4 px-3 py-1.5 font-mono text-xs text-fog transition-all duration-300 hover:border-neon hover:text-neon"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BorderGlow>
        ))}
      </Reveal>

      {/* kinetic marquee band */}
      <div className="mask-fade-x mt-16 flex select-none flex-col gap-2 overflow-hidden">
        <div className="flex">
          <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6 [--marquee-duration:32s]">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span
                key={i}
                className="text-stroke font-display text-5xl font-semibold uppercase transition-colors hover:text-chalk sm:text-7xl"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
