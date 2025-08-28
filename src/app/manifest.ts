import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vinícius Bastos - Portfolio',
    short_name: 'VB Portfolio',
    description: 'Portfólio de Vinícius Bastos, desenvolvedor front-end especializado em React, Next.js, TypeScript',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a192f',
    theme_color: '#64ffda',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
    categories: ['portfolio', 'developer', 'technology'],
  }
}