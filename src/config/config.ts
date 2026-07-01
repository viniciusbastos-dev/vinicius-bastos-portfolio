import { Folder, Mail, User, Sparkles } from "lucide-react";

export const Links = [
  { href: "/#sobre-mim", text: "Sobre", icon: User },
  { href: "/#skills", text: "Skills", icon: Sparkles },
  { href: "/#projetos", text: "Projetos", icon: Folder },
  { href: "/#contato", text: "Contato", icon: Mail },
];

export const socials = {
  github: "https://github.com/viniciusbastos-dev",
  linkedin: "https://www.linkedin.com/in/vinicius-bastos-silva/",
  email: "viniciusbsilva57@gmail.com",
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
      "Chakra UI",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Fastify", "ElysiaJS", "Golang", "BullMQ"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Data Flow & Forms",
    items: [
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "Yup",
      "axios-mock-adapter",
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      "Docker",
      "GitHub Actions",
      "Azure DevOps",
      "AWS S3",
      "Cloudflare",
    ],
  },
  {
    label: "Processo & Colaboração",
    items: [
      "Scrum",
      "Kanban",
      "Code Review",
      "Mentoria Técnica",
      "Linear",
      "Slack",
    ],
  },
];

/** Flat marquee list for the hero / running strip */
export const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Golang",
  "NestJS",
  "React Native",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Tailwind",
  "ElysiaJS",
  "AWS",
];

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  accent: string; // hex used for the card glow / preview gradient
  href?: string;
};

/** Placeholders realistas — troque pelos projetos reais quando quiser. */
export const projects: Project[] = [
  {
    index: "01",
    title: "Nebula Commerce",
    category: "E-commerce Platform",
    year: "2025",
    description:
      "Plataforma de e-commerce headless com checkout otimizado, busca instantânea e painel administrativo em tempo real. Foco em performance e Core Web Vitals.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "TanStack Query"],
    accent: "#CCFF00",
    href: "#",
  },
  {
    index: "02",
    title: "Pulse Analytics",
    category: "SaaS Dashboard",
    year: "2024",
    description:
      "Dashboard de analytics em tempo real com filas de processamento, visualizações interativas e ingestão de eventos em alta escala.",
    stack: ["React", "Fastify", "BullMQ", "MongoDB", "Docker"],
    accent: "#7C6FF0",
    href: "#",
  },
  {
    index: "03",
    title: "Drift Finance",
    category: "Mobile App",
    year: "2024",
    description:
      "App financeiro mobile-first com onboarding animado, biometria e sincronização offline. Design system compartilhado entre web e mobile.",
    stack: ["React Native", "TypeScript", "Zod", "Elysia", "AWS S3"],
    accent: "#64FFDA",
    href: "#",
  },
  {
    index: "04",
    title: "Forge API",
    category: "Backend Platform",
    year: "2023",
    description:
      "Gateway de APIs de alta performance em Go com rate limiting, cache distribuído e pipeline de CI/CD completo em GitHub Actions.",
    stack: ["Golang", "Redis", "Docker", "GitHub Actions", "Cloudflare"],
    accent: "#FF7847",
    href: "#",
  },
];
