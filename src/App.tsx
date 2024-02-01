import { links, projects } from "./data.json";
import React from "react";
import {
    SiJavascript,
    SiMui,
    SiReact,
    SiStyledcomponents,
    SiTypescript,
} from "react-icons/si";
import GlobalStyle from "./themes/globalStyles";
import PageIndicator from "./components/PageIndicator";
import Section from "./components/Section";
import Banner from "./components/Banner";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";

const App: React.FC = () => {
    const skills = [
        {
            name: "React",
            color: "#61DAFB",
            component: <SiReact />,
        },
        {
            name: "Javascript",
            color: "#EFDA4E",
            component: <SiJavascript />,
        },
        {
            name: "Typescript",
            color: "#3178c6",
            component: <SiTypescript />,
        },
        {
            name: "Styled Components",
            color: "#DB7093",
            component: <SiStyledcomponents />,
        },
        {
            name: "MaterialUI",
            color: "#0081CB",
            component: <SiMui />,
        },
    ];

    return (
        <main>
            <GlobalStyle />
            <PageIndicator />
            <Section pageID="Home">
                <Banner links={links} />
            </Section>
            <Section pageID="Projects" customPadding secondary>
                {projects.map((project) => (
                    <ProjectCard {...project} />
                ))}
            </Section>
            <Section pageID="Skills" customPadding>
                {skills.map((skill) => (
                    <SkillCard data={skill} />
                ))}
            </Section>
        </main>
    );
};

export default App;
