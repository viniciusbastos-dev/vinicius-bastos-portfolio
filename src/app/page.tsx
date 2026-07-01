import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FlyingLight from "@/components/Light";
import SectionContainer from "@/components/SectionContainer";

const pad = "px-6 sm:px-[8%]";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero: canvas full-bleed, conteúdo com padding próprio */}
      <SectionContainer
        id="hero"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28"
      >
        <div className={`w-full ${pad}`}>
          <Hero />
        </div>
      </SectionContainer>

      <SectionContainer
        id="sobre-mim"
        className={`flex min-h-screen flex-col justify-center py-32 ${pad}`}
      >
        <About />
      </SectionContainer>

      <SectionContainer id="skills" className={`py-32 ${pad}`}>
        <Skills />
      </SectionContainer>

      <SectionContainer id="projetos" className={`py-32 ${pad}`}>
        <Projects />
      </SectionContainer>

      <SectionContainer
        id="contato"
        className={`flex min-h-screen flex-col justify-center py-32 ${pad}`}
      >
        <Contact />
      </SectionContainer>

      <FlyingLight />
    </main>
  );
}
