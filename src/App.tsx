import { links, projects } from "./data.json";
import React from "react";
import GlobalStyle from "./themes/globalStyles";
import PageIndicator from "./components/PageIndicator";
import Section from "./components/Section";
import Banner from "./components/Banner";
import ProjectCard from "./components/ProjectCard";

const App: React.FC = () => {
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
        </main>
    );
};

export default App;
