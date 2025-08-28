'use client';

import { useEffect, useRef } from 'react';
import { SiBun, SiFastify, SiStyledcomponents } from 'react-icons/si';
import {
  TbBrandGolang,
  TbBrandHtml5,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReactNative,
  TbBrandTailwind,
  TbBrandTypescript,
} from 'react-icons/tb';

const technologies = {
  frontend: [
    { name: 'React / Next.js', icon: <TbBrandNextjs /> },
    { name: 'React Native', icon: <TbBrandReactNative /> },
    { name: 'TypeScript', icon: <TbBrandTypescript /> },
    { name: 'Tailwind CSS', icon: <TbBrandTailwind /> },
    { name: 'Styled Components', icon: <SiStyledcomponents /> },
    { name: 'HTML / CSS', icon: <TbBrandHtml5 /> },
  ],
  backend: [
    { name: 'Node.js', icon: <TbBrandNodejs /> },
    { name: 'Fastify', icon: <SiFastify /> },
    { name: 'Elysia', icon: <SiBun /> },
    { name: 'Golang', icon: <TbBrandGolang /> },
    { name: 'MongoDB', icon: <TbBrandMongodb /> },
  ],
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (techRef.current) observer.observe(techRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div ref={containerRef} className="opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-5xl font-bold mb-16 text-center text-slate-700">Sobre Mim</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={textRef} className="space-y-8 opacity-0 translate-x-[-50px] transition-all duration-700">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
              <div className="space-y-6 pl-8">
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  Sou um <span className="text-green-400 font-semibold">desenvolvedor Frontend</span> especializado em
                  React, Next.js, TypeScript e desenvolvimento mobile com React Native. Apaixonado por criar
                  <span className="text-blue-400"> interfaces elegantes</span> e experiências de usuário excepcionais.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  Tenho conhecimentos em backend com{' '}
                  <span className="text-purple-400 font-semibold">Fastify e Elysia</span>, além de estar expandindo
                  habilidades em Golang. Meu foco principal é o frontend, sempre buscando
                  <span className="text-green-400"> soluções inovadoras</span> e código de qualidade.
                </p>
              </div>
            </div>
          </div>

          <div ref={techRef} className="opacity-0 translate-x-[50px] transition-all duration-700">
            <h3 className="text-3xl font-bold mb-8 text-center text-slate-300">Tecnologias</h3>
            <div className="grid gap-6">
              <div className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="font-bold mb-4 text-blue-400 text-lg flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Frontend
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.frontend.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm text-slate-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4 className="font-bold mb-4 text-green-400 text-lg flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Backend
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.backend.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm text-slate-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
