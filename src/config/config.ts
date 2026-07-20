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
      "Astro",
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
    items: [
      "Node.js",
      "NestJS",
      "Fastify",
      "ElysiaJS",
      "Eden Treaty",
      "Golang",
      "BullMQ",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Data Flow & Forms",
    items: [
      "TanStack Query",
      "Zustand",
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
      "Cloudflare Workers",
      "Cloudflare R2",
      "Vercel",
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

export const projects: Project[] = [
  {
    index: "01",
    title: "LoveSpark",
    category: "SaaS de Presentes Digitais",
    year: "2025",
    description:
      "SaaS de pagamento único onde a pessoa monta uma página personalizada de memórias (fotos, vídeos, áudios e textos) para presentear alguém querido. Faturou +R$70 mil em 6 meses. Ponta a ponta: backend, filas, storage, SEO/GEO e campanhas de Meta Ads.",
    stack: [
      "Next.js",
      "React",
      "ElysiaJS",
      "fal.ai",
      "MongoDB",
      "Redis",
      "Cloudflare R2",
      "Zustand",
      "BullMQ",
      "Docker",
    ],
    accent: "#FF4D8D",
    href: "https://lovespark.com.br",
  },
];
