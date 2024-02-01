import React from "react";
import * as S from "./styles";

interface ProjectCardProps {
    image: string;
    description: string;
    type: string;
    link: string;
    development?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    description,
    type,
    link,
    development,
}) => {
    return (
        <S.Container>
            <a href={link} target="_blank">
                <S.Image src={image} alt={description} />
            </a>
            <S.Type>{type}</S.Type>
            <S.Title>{description}</S.Title>
            {development && <p>(Em Desenvolvimento)</p>}
        </S.Container>
    );
};

export default ProjectCard;
