'use client';

import { useEffect, useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { TbBrandReact, TbBrandNextjs, TbBrandTypescript, TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';

const projects = [
  {
    title: 'Portfolio Moderno',
    description:
      'Portfolio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Design moderno com animações e responsivo.',
    technologies: [
      { name: 'Next.js', icon: <TbBrandNextjs className="w-5 h-5" /> },
      { name: 'TypeScript', icon: <TbBrandTypescript className="w-5 h-5" /> },
      { name: 'Tailwind', icon: <TbBrandCss3 className="w-5 h-5" /> },
    ],
    github: 'https://github.com/viniciusbastos-dev/portfolio',
    demo: null,
    featured: true,
  },
  {
    title: 'Decodificador de Texto',
    description:
      'Primeiro challenge Oracle ONE - Aplicação para criptografar e descriptografar textos com interface intuitiva.',
    technologies: [
      { name: 'HTML', icon: <TbBrandHtml5 className="w-5 h-5" /> },
      { name: 'CSS', icon: <TbBrandCss3 className="w-5 h-5" /> },
      { name: 'JavaScript', icon: <TbBrandReact className="w-5 h-5" /> },
    ],
    github: 'https://github.com/viniciusbastos-dev/Challenge-Oracle-ONE-Criptografador',
    demo: null,
    featured: true,
  },
  {
    title: 'Plataforma para Fotógrafos',
    description:
      'Plataforma completa para fotógrafos gerenciarem portfólio e clientes. Em desenvolvimento com tecnologias modernas.',
    technologies: [
      { name: 'React', icon: <TbBrandReact className="w-5 h-5" /> },
      { name: 'TypeScript', icon: <TbBrandTypescript className="w-5 h-5" /> },
      { name: 'Node.js', icon: <TbBrandNextjs className="w-5 h-5" /> },
    ],
    github: null,
    demo: null,
    featured: true,
    inProgress: true,
  },
  {
    title: 'Barbearia Alura',
    description: 'Website responsivo para barbearia desenvolvido durante cursos de HTML e CSS da Alura.',
    technologies: [
      { name: 'HTML', icon: <TbBrandHtml5 className="w-5 h-5" /> },
      { name: 'CSS', icon: <TbBrandCss3 className="w-5 h-5" /> },
    ],
    github: 'https://github.com/viniciusbastos-dev/Projeto-Barbearia-Alura',
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div ref={containerRef} className="opacity-0 animate-fade-in-up animation-delay-300">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-SFMono text-lg text-green-700">02.</span>
          <h2 className="font-SFMono text-4xl font-bold text-lightest-slate">Projetos</h2>
          <div className="flex-1 h-px ml-8 bg-slate-700"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8" style={{ color: '#a8b2d1' }}>
            Projetos em Destaque
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className="group relative opacity-0 translate-y-[30px] transition-all duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 p-6">
                  {project.inProgress && (
                    <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
                      Em Desenvolvimento
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>

                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-300 border border-slate-700/50"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 text-sm"
                        >
                          <FiGithub className="w-4 h-4" />
                          Código
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 text-sm"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-slate-300">Outros Projetos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => {
                  projectRefs.current[featuredProjects.length + index] = el;
                }}
                className="group opacity-0 translate-y-[20px] transition-all duration-500"
                style={{
                  animationDelay: `${(featuredProjects.length + index) * 150}ms`,
                }}
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 p-5">
                  <h4 className="text-lg font-semibold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <div key={tech.name} className="text-slate-400" title={tech.name}>
                          {tech.icon}
                        </div>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
