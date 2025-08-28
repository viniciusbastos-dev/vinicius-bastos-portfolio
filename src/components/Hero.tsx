import React from 'react';
import * as motion from 'motion/react-client';

export default function Hero() {
  const components = [
    {
      type: 'h1',
      text: 'Olá, me chamo',
      className: 'text-xs md:text-sm text-green-700 mb-5 sm:mb-6 font-SFMono',
    },
    {
      type: 'h2',
      text: 'Vinícius Bastos',
      className:
        'text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-300 font-SFDisplay font-semibold leading-[1.1]',
    },
    {
      type: 'h3',
      text: 'Desenvolvedor Front-end',
      className: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-SFDisplay font-semibold leading-[0.9]',
    },
    {
      type: 'p',
      text: 'Especializado em criar experiências digitais eficientes e acessíveis, com foco em soluções inovadoras e centradas no usuário.',
      className: 'mt-5 font-SFMono text-sm sm:text-base max-w-[550px]',
    },
  ];

  return (
    <>
      {components.map((component, index) => {
        const fadeIn = {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 + index * 0.3 },
          },
        };
        return (
          <motion.div key={component.text} initial="hidden" animate="visible" variants={fadeIn}>
            {React.createElement(component.type, { className: component.className }, component.text)}
          </motion.div>
        );
      })}
    </>
  );
}
