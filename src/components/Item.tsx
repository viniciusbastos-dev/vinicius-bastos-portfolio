"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {}
const StackCard: React.FC<Props> = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["end end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <div ref={ref} className="md:sticky top-[100px] ">
      <motion.div
        style={{
          scale: isMobile ? 1 : scale,
          padding: "64px",
          borderRadius: "32px",
          height: "600px",
          background: "#202024",
        }}
      >
        <h1 className="text-5xl font-bold text-white">Agenda</h1>
        <p>
          Permita que seus alunos façam seus próprios agendamentos e remarcações
        </p>

        <ol className="text-[#ECECEC] text-lg">
          <li>Configurações de dias e horários</li>
          <li>Seu aluno com autonomia</li>
          <li>Bloquear horários para agenda particular</li>
          <li>Você diz quantos alunos terá por horário</li>
          <li>
            Escolha até quantas horas antes os seus alunos podem remarcar e
            desmarcar seus horários
          </li>
        </ol>
      </motion.div>
    </div>
  );
};

export default StackCard;
