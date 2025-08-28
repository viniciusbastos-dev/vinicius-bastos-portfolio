"use client";

import React, { useEffect, useState } from "react";

type Props = Record<string, never>;
const FlyingLight: React.FC<Props> = () => {
  const [position, setPosition] = useState({ x: 150, y: 150 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition duration-500`}
      style={{
        background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(24, 58, 117, 0.35), transparent 80%)`,
      }}
    />
  );
};

export default FlyingLight;
