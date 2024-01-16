import React from "react";
import Section from "./components/Section";
import Banner from "./components/Banner";
import ProjectCard from "./components/ProjectCard";

const App: React.FC = () => {
    const links = [
        {
            image: "/github-icon.svg",
            alt: "Link to Github",
            link: "https://github.com/viniciusbastos-dev",
        },
        {
            image: "/linkedin-icon.svg",
            alt: "Link to Linkedin",
            link: "https://linkedin.com/in/vinicius-bastos-silva",
        },
        {
            image: "/cv-icon.svg",
            alt: "Link to Download CV",
            link: "https://drive.google.com/file/d/1CrHZuc1tf5bYORXDl-xe8N3jtC9UK93R/view",
        },
    ];

    const projects = [
        {
            image: "/apeperia.png",
            type: "Curso Alura",
            description: "Site responsivo em mobile-first",
            link: "https://viniciusbastos-dev.github.io/Projeto-Apeperia/",
        },
        {
            image: "/organo.png",
            type: "Curso Alura",
            description: "Projeto React para estudo de estados",
            link: "https://vinicius-bastos-organo.vercel.app",
        },
        {
            image: "/moni-bank.png",
            type: "Curso Alura",
            description: "Estudo de validação de formulários",
            link: "https://viniciusbastos-dev.github.io/MoniBank/",
        },
        {
            image: "/moviectionary.png",
            type: "Estudo de caso",
            description: "Site consumindo API do TMDB",
            link: "https://moviectionary-viniciusbastos.fly.dev",
            development: true,
        },
    ];

    return (
        <>
            <Section template="flex">
                <Banner links={links} />
            </Section>
            <Section template="grid" secondary>
                {projects.map((project) => (
                    <ProjectCard {...project} />
                ))}
            </Section>
        </>
    );
};

export default App;
