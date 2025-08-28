export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://viniciusbastos.dev/#person",
        "name": "Vinícius Bastos",
        "jobTitle": "Desenvolvedor Front-end",
        "description": "Desenvolvedor front-end especializado em React, Next.js, TypeScript. Criando interfaces modernas e responsivas.",
        "url": "https://viniciusbastos.dev",
        "sameAs": [
          "https://github.com/viniciusbastos",
          "https://linkedin.com/in/viniciusbastos"
        ],
        "knowsAbout": [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "React Native",
          "Tailwind CSS",
          "Styled Components",
          "Frontend Development",
          "Web Development",
          "Mobile Development"
        ],
        "alumniOf": {
          "@type": "Organization",
          "name": "Universidade"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://viniciusbastos.dev/#website",
        "url": "https://viniciusbastos.dev",
        "name": "Vinícius Bastos Portfolio",
        "description": "Portfólio profissional de Vinícius Bastos, desenvolvedor front-end",
        "publisher": {
          "@id": "https://viniciusbastos.dev/#person"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "WebPage",
        "@id": "https://viniciusbastos.dev/#webpage",
        "url": "https://viniciusbastos.dev",
        "name": "Vinícius Bastos - Desenvolvedor Front-end",
        "isPartOf": {
          "@id": "https://viniciusbastos.dev/#website"
        },
        "about": {
          "@id": "https://viniciusbastos.dev/#person"
        },
        "description": "Portfólio de Vinícius Bastos, desenvolvedor front-end com experiência em JavaScript, TypeScript, React, React Native, Next.js",
        "inLanguage": "pt-BR"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}