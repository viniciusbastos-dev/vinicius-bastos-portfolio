'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { marqueeSkills } from '@/config/config';
import Magnetic from './Magnetic';
import { ArrowDown } from 'lucide-react';

const HeroCanvas = dynamic(() => import('./webgl/HeroCanvas'), { ssr: false });

const NAME = 'Vinícius Bastos';

function useWaitForPreloader() {
  // Returns a promise-like delay: resolves when preloader signals done.
  return () =>
    new Promise<void>((resolve) => {
      if (document.documentElement.dataset.loaded === 'true') return resolve();
      const done = () => resolve();
      window.addEventListener('preloader:done', done, { once: true });
      // safety fallback
      setTimeout(done, 3200);
    });
}

const Hero: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const waitForPreloader = useWaitForPreloader();

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>('.hero-char');
      gsap.set(chars, { yPercent: 120 });
      gsap.set('.hero-fade', { opacity: 0, y: 24 });

      (async () => {
        await waitForPreloader();
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
        tl.to(chars, {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.035,
        }).to('.hero-fade', { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, '-=0.6');
      })();
    },
    { scope: root },
  );

  return (
    <>
      {/* WebGL background — full-bleed behind the whole hero section */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 opacity-70">
        <HeroCanvas />
      </div>

      <div ref={root} className="relative w-full">
        <p className="hero-fade mb-6 font-mono text-xs uppercase tracking-[0.3em] text-neon">
          Fullstack Developer — Brasil
        </p>

        <h1 className="font-display font-semibold leading-[0.92] tracking-tight text-chalk">
          <span className="block overflow-hidden">
            {NAME.split('').map((c, i) => (
              <span key={i} className="hero-char inline-block text-[clamp(3rem,12vw,11rem)]">
                {c === ' ' ? ' ' : c}
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-3 overflow-hidden">
          <h2 className="hero-fade text-c6xl font-display font-semibold leading-none text-stroke">
            Interfaces &amp; Sistemas
          </h2>
        </div>

        <p className="hero-fade mt-8 max-w-[560px] font-mono text-sm leading-relaxed text-fog sm:text-base">
          Construo produtos digitais de ponta a ponta — do shader no front à fila de mensagens no back. Foco em
          performance, motion e código que escala.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Link
              href="/#projetos"
              data-cursor="ver"
              className="group relative inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-mono text-sm font-medium text-ink transition-transform"
            >
              Ver projetos
              <ArrowDown className="size-4 -rotate-90 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/#contato"
              className="inline-flex items-center rounded-full border border-ink-4 px-8 py-4 font-mono text-sm text-chalk transition-colors hover:border-neon hover:text-neon"
            >
              Contato
            </Link>
          </Magnetic>
        </div>

        {/* marquee strip */}
        <div className="hero-fade mask-fade-x mt-20 flex select-none overflow-hidden border-y border-ink-3 py-4">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 [--marquee-duration:26s]">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span key={i} className="flex items-center gap-8 font-mono text-sm uppercase tracking-wide text-fog">
                {s}
                <span className="text-neon">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="hero-fade mt-14 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-fog-dim">
          <ArrowDown className="size-4 animate-bounce text-neon" />
          Scroll para explorar
        </div>
      </div>
    </>
  );
};

export default Hero;
