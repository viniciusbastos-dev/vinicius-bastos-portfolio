import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';

const SFMono = localFont({
  src: [{ path: '../assets/fonts/SFMono-Regular.otf', weight: '400' }],
  variable: '--font-SFMono',
});

const SFDisplay = localFont({
  src: [
    { path: '../assets/fonts/SF-Pro-Display-Regular.otf', weight: '400' },
    { path: '../assets/fonts/SF-Pro-Display-Semibold.otf', weight: '600' },
  ],
  variable: '--font-SFDisplay',
});

export const metadata: Metadata = {
  title: 'Vinícius Bastos - Portfólio',
  creator: 'Vinícius Bastos',
  description:
    'Portfólio de Vinícius Bastos, desenvolvedor front-end com experiência em JavaScript, TypeScript, React, React Native, Next.js, Styled-Components e Tailwind. Exploração de projetos de interfaces modernas e responsivas.',
  keywords: [
    'Vinícius Bastos',
    'desenvolvedor front-end',
    'front-end developer',
    'React',
    'Next.js',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Styled-Components',
    'Tailwind',
    'design responsivo',
    'interfaces modernas',
    'projetos web',
    'portfólio de desenvolvedor',
    'aplicativos móveis',
    'performance web',
    'e-commerce front-end',
    'desenvolvimento de SaaS',
    'web design intuitivo',
  ],
  authors: [{ name: 'Vinícius Bastos' }],
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://viniciusbastos.dev',
    title: 'Vinícius Bastos - Desenvolvedor Front-end',
    description:
      'Desenvolvedor front-end especializado em React, Next.js, TypeScript. Criando interfaces modernas e responsivas.',
    siteName: 'Vinícius Bastos Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinícius Bastos - Desenvolvedor Front-end',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinícius Bastos - Desenvolvedor Front-end',
    description:
      'Desenvolvedor front-end especializado em React, Next.js, TypeScript. Criando interfaces modernas e responsivas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'lLZmQ6GssblPpL7Ydr4RhSpmFVGVrtxy9HpNkN6j99s',
  },
  alternates: {
    canonical: 'https://www.viniciusbastos.dev',
  },
  other: {
    'theme-color': '#64ffda',
    'color-scheme': 'dark',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${SFMono.variable} ${SFDisplay.variable} antialiased`}>
      <body className="bg-navy text-lightest-slate">
        <StructuredData />
        <SidebarProvider>
          <Header />
          {children}
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
