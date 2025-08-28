import Image from 'next/image';
import React from 'react';
import appdaacademia from '@/assets/image/app-da-academia.jpeg';
import { GithubIcon } from '@/assets/SVG';
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr';

interface Props {}
const ProjectCard: React.FC<Props> = () => {
  return (
    <li className="project-item">
      <div className="project-content relative z-10 space-y-3">
        <h2 className="text-2xl font-semibold text-slate-300">App da Academia</h2>

        <div className="p-8 rounded-lg bg-navy-500">
          <p>
            Uma aplicação web para visualizar informações de filmes e séries, como trailers, temporadas, elenco, gênero,
            data de lançamento, e informações detalhadas sobre cada título.
          </p>
        </div>

        <ul className="project-end flex gap-3 font-firaCode text-sm">
          <li>React</li>
          <li>NextJS</li>
          <li>Tailwind</li>
          <li>Vercel</li>
        </ul>

        <ul className="project-end flex items-center gap-2">
          <li>
            <GithubIcon />
          </li>
          <li>
            <ArrowSquareOut fontSize={24} />
          </li>
        </ul>
      </div>

      <div className="project-image">
        <Image src={appdaacademia} alt="App da Academia" width={500} height={330} className="rounded-lg" />
      </div>
    </li>
  );
};

export default ProjectCard;
