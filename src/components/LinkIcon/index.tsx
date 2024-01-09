import React from "react";
import style from "./LinkIcon.module.css";
import { LinkType } from "../Banner";

const LinkIcon: React.FC<LinkType> = ({ image, alt, link }) => {
    return (
        <a href={link} target="_blank">
            <img className={style.icon} src={image} alt={alt} />
        </a>
    );
};

export default LinkIcon;
