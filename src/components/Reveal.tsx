"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** stagger direct children instead of animating the wrapper */
  stagger?: boolean;
  y?: number;
  delay?: number;
};

/**
 * Scroll-triggered fade/rise reveal. When `stagger` is set, its direct
 * children animate in sequence; otherwise the element itself reveals.
 */
export default function Reveal({
  children,
  className,
  stagger = false,
  y = 40,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? (Array.from(el.children) as HTMLElement[]) : [el];

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
