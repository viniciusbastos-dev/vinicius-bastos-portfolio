import Hero from "@/components/Hero";
import FlyingLight from "@/components/Light";
import SectionContainer from "@/components/SectionContainer";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main className="px-[10%]">
      <SectionContainer
        id="hero"
        className="min-h-screen flex flex-col justify-center mx-auto sm:ml-[10%]"
      >
        <Hero />
      </SectionContainer>
      <SectionContainer id="sobre-mim" className="min-h-screen">
        <h1>Sobre Mim</h1>
      </SectionContainer>

      <SectionContainer id="projetos" className="min-h-screen">
        <h1>Projetos</h1>
      </SectionContainer>

      <SectionContainer id="contato" className="min-h-screen">
        <h1>Contato</h1>
      </SectionContainer>

      <FlyingLight />
    </main>
  );
}
