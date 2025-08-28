"use client";

import { useEffect, useRef } from "react";
import { SiBun, SiFastify, SiStyledcomponents } from "react-icons/si";
import {
  TbBrandGolang,
  TbBrandHtml5,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReactNative,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

const technologies = {
  frontend: [
    { name: "React / Next.js", icon: <TbBrandNextjs /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "Tailwind CSS", icon: <TbBrandTailwind /> },
    { name: "Styled Components", icon: <SiStyledcomponents /> },
    { name: "HTML / CSS", icon: <TbBrandHtml5 /> },
  ],
  backend: [
    { name: "Node.js", icon: <TbBrandNodejs /> },
    { name: "Fastify", icon: <SiFastify /> },
    { name: "Elysia", icon: <SiBun /> },
    { name: "Golang", icon: <TbBrandGolang /> },
    { name: "MongoDB", icon: <TbBrandMongodb /> },
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
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (textRef.current) observer.observe(textRef.current);
    if (techRef.current) observer.observe(techRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div
        ref={containerRef}
        className="opacity-0 animate-fade-in-up animation-delay-300"
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="font-SFMono text-lg text-green-700">01.</span>
          <h2 className="font-SFMono text-4xl font-bold text-lightest-slate">
            Sobre Mim
          </h2>
          <div className="flex-1 h-px ml-8 bg-slate-700"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Content */}
          <div
            ref={textRef}
            className="lg:col-span-2 space-y-8 opacity-0 translate-x-[-50px] transition-all duration-700"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-green-700 rounded-full"></div>
              <div className="space-y-6 pl-8">
                <p className="text-xl leading-relaxed text-slate-light">
                  Sou um{" "}
                  <span className="font-semibold text-green-700">
                    desenvolvedor Frontend
                  </span>{" "}
                  com mais de 1 ano de experiência em React, Next.js, TypeScript
                  e desenvolvimento mobile. Atualmente trabalho alocado na
                  <span className="text-green-700"> FHEMIG</span>, onde
                  entreguei 7 módulos de dashboard em 3 meses.
                </p>
                <p className="text-xl leading-relaxed text-slate-light">
                  Também atuo na{" "}
                  <span className="font-semibold text-green-700">
                    AbacatePay
                  </span>{" "}
                  como
                  <span className="text-green-700"> referência técnica</span>,
                  com experiência fullstack em Fastify, MongoDB e APIs de
                  pagamento. Mentorei 3 desenvolvedores juniores, sempre focando
                  em qualidade e boas práticas.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-12 pl-8">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: "#a8b2d1" }}
              >
                Experiência Profissional
              </h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div
                    className="absolute left-0 top-2 w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: "#64ffda",
                      borderColor: "#0a192f",
                    }}
                  ></div>
                  <div
                    className="absolute left-1.5 top-5 w-0.5 h-full"
                    style={{ backgroundColor: "#233554" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ccd6f6" }}>
                      Desenvolvedor Front-end
                    </h4>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#64ffda" }}
                    >
                      Otther Company / FHEMIG • Abr/2025 – Atual
                    </p>
                    <p
                      className="text-sm mt-2 leading-relaxed"
                      style={{ color: "#8892b0" }}
                    >
                      Entreguei 7 módulos de dashboard em 3 meses usando React e
                      Chakra UI. Desenvolvi 2 módulos críticos em 1 semana com
                      zero retornos do QA.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div
                    className="absolute left-0 top-2 w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: "#64ffda",
                      borderColor: "#0a192f",
                    }}
                  ></div>
                  <div
                    className="absolute left-1.5 top-5 w-0.5 h-full"
                    style={{ backgroundColor: "#233554" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ccd6f6" }}>
                      Desenvolvedor Fullstack
                    </h4>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#64ffda" }}
                    >
                      AbacatePay • Nov/2024 – Atual
                    </p>
                    <p
                      className="text-sm mt-2 leading-relaxed"
                      style={{ color: "#8892b0" }}
                    >
                      Referência técnica no gateway de pagamentos v2.
                      Implementei APIs com Fastify/MongoDB, otimizando latência
                      de 200ms para 120ms. Mentorei 3 devs juniores.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div
                    className="absolute left-0 top-2 w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: "#64ffda",
                      borderColor: "#0a192f",
                    }}
                  ></div>
                  <div
                    className="absolute left-1.5 top-5 w-0.5 h-full"
                    style={{ backgroundColor: "#233554" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ccd6f6" }}>
                      Desenvolvedor Front-end
                    </h4>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#64ffda" }}
                    >
                      Moon Language Academy • Jul/2024 – Out/2024
                    </p>
                    <p
                      className="text-sm mt-2 leading-relaxed"
                      style={{ color: "#8892b0" }}
                    >
                      Plataforma de aprendizado com Next.js, Tailwind CSS e
                      validações avançadas. Integração com APIs REST e WebSocket
                      para progresso em tempo real.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div
                    className="absolute left-0 top-2 w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: "#64ffda",
                      borderColor: "#0a192f",
                    }}
                  ></div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "#ccd6f6" }}>
                      Desenvolvedor Front-end
                    </h4>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#64ffda" }}
                    >
                      Lukrey Tecnologia • Fev/2024 – Jul/2024
                    </p>
                    <p
                      className="text-sm mt-2 leading-relaxed"
                      style={{ color: "#8892b0" }}
                    >
                      Painel admin web + app React Native. Implementei
                      autenticação com cookies e React Query. CI/CD no Azure
                      DevOps com deployments diários.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div
            ref={techRef}
            className="opacity-0 translate-x-[50px] transition-all duration-700"
          >
            <h3
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: "#a8b2d1" }}
            >
              Tecnologias
            </h3>
            <div className="grid gap-6">
              <div
                className="group relative overflow-hidden backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 hover:border-green-700 hover:shadow-lg hover:shadow-green-700/20"
                style={{
                  backgroundColor: "#112240",
                  borderColor: "#233554",
                }}
              >
                <div className="absolute inset-0 bg-green-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4
                  className="font-bold mb-4 text-lg flex items-center gap-2 relative z-10"
                  style={{ color: "#64ffda" }}
                >
                  <span className="text-2xl">🎨</span>
                  Frontend
                </h4>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {technologies.frontend.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-navy-300"
                      style={{
                        backgroundColor: "#0a192f",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <span className="text-lg" style={{ color: "#64ffda" }}>
                        {tech.icon}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#a8b2d1" }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="group relative overflow-hidden backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 hover:border-green-700 hover:shadow-lg hover:shadow-green-700/20"
                style={{
                  backgroundColor: "#112240",
                  borderColor: "#233554",
                }}
              >
                <div className="absolute inset-0 bg-green-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h4
                  className="font-bold mb-4 text-lg flex items-center gap-2 relative z-10"
                  style={{ color: "#64ffda" }}
                >
                  <span className="text-2xl">⚙️</span>
                  Backend
                </h4>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {technologies.backend.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-navy-300"
                      style={{
                        backgroundColor: "#0a192f",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <span className="text-lg" style={{ color: "#64ffda" }}>
                        {tech.icon}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#a8b2d1" }}
                      >
                        {tech.name}
                      </span>
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
