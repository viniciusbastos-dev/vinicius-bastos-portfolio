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
    <div className="max-w-7xl mx-auto px-4">
      <div ref={containerRef} className="opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-5xl font-bold mb-16 text-center text-slate-700">Sobre Mim</h2>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Content */}
          <div ref={textRef} className="lg:col-span-2 space-y-8 opacity-0 translate-x-[-50px] transition-all duration-700">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
              <div className="space-y-6 pl-8">
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  Sou um <span className="text-green-400 font-semibold">desenvolvedor Frontend</span> com mais de 1 ano de experiência 
                  em React, Next.js, TypeScript e desenvolvimento mobile. Atualmente trabalho como desenvolvedor front-end alocado na 
                  <span className="text-blue-400"> FHEMIG</span>, onde entreguei 7 módulos de dashboard em 3 meses.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  Tenho experiência <span className="text-purple-400 font-semibold">fullstack</span> com Fastify, MongoDB e APIs de pagamento. 
                  Já atuei como <span className="text-green-400">líder técnico</span> no lançamento de gateways de pagamento e mentorei 
                  3 desenvolvedores juniores, sempre focando em qualidade e boas práticas.
                </p>
              </div>
            </div>


            {/* Experience Timeline */}
            <div className="mt-12 pl-8">
              <h3 className="text-2xl font-semibold mb-6 text-slate-300">Experiência Profissional</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-slate-600"></div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Desenvolvedor Front-end</h4>
                    <p className="text-green-400 text-sm font-medium">Otther Company / FHEMIG • Abr/2025 – Atual</p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Entreguei 7 módulos de dashboard em 3 meses usando React e Chakra UI. 
                      Desenvolvi 2 módulos críticos em 1 semana com zero retornos do QA.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-slate-900"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-slate-600"></div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Desenvolvedor Fullstack</h4>
                    <p className="text-blue-400 text-sm font-medium">AbacatePay • Nov/2024 – Atual</p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Líder técnico no gateway de pagamentos v2. Implementei APIs com Fastify/MongoDB, 
                      otimizando latência de 200ms para 120ms. Mentorei 3 devs juniores.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-purple-400 rounded-full border-2 border-slate-900"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-slate-600"></div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Desenvolvedor Front-end</h4>
                    <p className="text-purple-400 text-sm font-medium">Moon Language Academy • Jul/2024 – Out/2024</p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Plataforma de aprendizado com Next.js, Tailwind CSS e validações avançadas. 
                      Integração com APIs REST e WebSocket para progresso em tempo real.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-yellow-400 rounded-full border-2 border-slate-900"></div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Desenvolvedor Front-end</h4>
                    <p className="text-yellow-400 text-sm font-medium">Lukrey Tecnologia • Fev/2024 – Jul/2024</p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      Painel admin web + app React Native. Implementei autenticação com cookies 
                      e React Query. CI/CD no Azure DevOps com deployments diários.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
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