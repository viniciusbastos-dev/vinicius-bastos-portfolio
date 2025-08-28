import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import FlyingLight from '@/components/Light';
import SectionContainer from '@/components/SectionContainer';

export default function Home() {
  return (
    <main className="px-[10%] flex-1">
      <SectionContainer id="hero" className="min-h-screen flex flex-col justify-center mx-auto sm:ml-[10%]">
        <Hero />
      </SectionContainer>
      <SectionContainer id="sobre-mim" className="min-h-screen flex items-center mb-10">
        <About />
      </SectionContainer>

      <SectionContainer id="projetos" className="min-h-screen flex items-center mb-10">
        <Projects />
      </SectionContainer>

      <SectionContainer id="contato" className="min-h-screen mb-10">
        <h1>Contato</h1>
      </SectionContainer>

      <FlyingLight />
    </main>
  );
}
