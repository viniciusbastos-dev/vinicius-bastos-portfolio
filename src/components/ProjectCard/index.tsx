import React from "react";
import style from "./ProjectCard.module.css";

interface ProjectCardProps {
    image: string;
    description: string;
    type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    description,
    type,
}) => {
    return (
        <div className={style.card}>
            <img className={style.image} src={image} alt={description} />
            <p className={style.cardType}>{type}</p>
            <h2 className={style.cardTitle}>{description}</h2>
        </div>
    );
};

export default ProjectCard;
