"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {}
const Hero: React.FC<Props> = () => {
  const components = [
    {
      type: "h1",
      text: "Olá, me chamo",
      className: "text-xs md:text-sm text-green_700 mb-5 sm:mb-6 font-mono",
    },
    {
      type: "h2",
      text: "Vinícius Bastos",
      className:
        "text-slate_300 text-c8xl  font-display font-semibold leading-[1.1]",
    },
    {
      type: "h3",
      text: "Desenvolvedor Front-end",
      className: "text-c8xl font-display font-semibold leading-[0.9]",
    },
    {
      type: "p",
      text: "Especializado em criar experiências digitais eficientes e acessíveis, com foco em soluções inovadoras e centradas no usuário.",
      className: "mt-5 font-mono text-sm sm:text-base max-w-[550px]",
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
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {React.createElement(
              component.type,
              { className: component.className },
              component.text
            )}
          </motion.div>
        );
      })}
    </>
  );
};

export default Hero;
