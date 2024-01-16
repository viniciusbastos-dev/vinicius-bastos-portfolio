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
            link: "https://github.com/viniciusbastos-dev",
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
