import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";

const SFMono = localFont({
  src: [{ path: "../assets/fonts/SFMono-Regular.otf", weight: "400" }],
  variable: "--font-SFMono",
});

const SFDisplay = localFont({
  src: [
    { path: "../assets/fonts/SF-Pro-Display-Regular.otf", weight: "400" },
    { path: "../assets/fonts/SF-Pro-Display-Semibold.otf", weight: "600" },
  ],
  variable: "--font-SFDisplay",
});

export const metadata: Metadata = {
  title: "Vinícius Bastos - Portfólio",
  creator: "Vinícius Bastos",
  description:
    "Portfólio de Vinícius Bastos, desenvolvedor fullstack. React, Next.js, React Native, TypeScript, Node.js, NestJS, Golang, PostgreSQL e mais — do front ao back, com foco em performance e motion.",
  keywords: [
    "Vinícius Bastos",
    "desenvolvedor front-end",
    "front-end developer",
    "React",
    "Next.js",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Styled-Components",
    "Tailwind",
    "design responsivo",
    "interfaces modernas",
    "projetos web",
    "portfólio de desenvolvedor",
    "aplicativos móveis",
    "performance web",
    "e-commerce front-end",
    "desenvolvimento de SaaS",
    "web design intuitivo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${SFMono.variable} ${SFDisplay.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="lLZmQ6GssblPpL7Ydr4RhSpmFVGVrtxy9HpNkN6j99s"
        />
      </head>

      <body className="grain">
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <SidebarProvider>
            <Header />
            {children}
          </SidebarProvider>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
