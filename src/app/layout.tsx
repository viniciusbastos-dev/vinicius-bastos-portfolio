import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import MobileSidebar from "@/components/MobileSidebar";

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
    "Portfólio de Vinícius Bastos, desenvolvedor front-end com experiência em JavaScript, TypeScript, React, React Native, Next.js, Styled-Components e Tailwind. Exploração de projetos de interfaces modernas e responsivas.",
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
      <body>
        <SidebarProvider>
          <Header />
          {children}
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
