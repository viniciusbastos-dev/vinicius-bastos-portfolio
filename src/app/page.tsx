import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FlyingLight from '@/components/Light';
import SectionContainer from '@/components/SectionContainer';

export default function Home() {
  return (
    <main className="px-[10%] flex-1 space-y-10">
      <SectionContainer id="hero" className="min-h-screen flex flex-col justify-center mx-auto sm:ml-[10%]">
        <Hero />
      </SectionContainer>
      <SectionContainer id="sobre-mim" className="">
        <About />
      </SectionContainer>

      <SectionContainer id="projetos" className="">
        <Projects />
      </SectionContainer>

      <SectionContainer id="contato" className="mt-20">
        <Contact />
      </SectionContainer>

      <FlyingLight />
    </main>
  );
}
