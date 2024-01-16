import React from "react";
import style from "./ProjectCard.module.css";

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
        <div className={style.card}>
            <a href={link} target="_blank">
                <img className={style.image} src={image} alt={description} />
            </a>
            <p className={style.cardType}>{type}</p>
            <h2 className={style.cardTitle}>{description}</h2>
            {development && <p>(Em Desenvolvimento)</p>}
        </div>
    );
};

export default ProjectCard;
