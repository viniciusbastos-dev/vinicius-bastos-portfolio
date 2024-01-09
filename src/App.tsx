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
            image: "/project.png",
            type: "Curso Alura",
            description: "Site utilizando mobile-first",
        },
        {
            image: "/project.png",
            type: "Curso Alura",
            description: "Site utilizando mobile-first",
        },
        {
            image: "/project.png",
            type: "Curso Alura",
            description: "Site utilizando mobile-first",
        },
        {
            image: "/project.png",
            type: "Curso Alura",
            description: "Site utilizando mobile-first",
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
