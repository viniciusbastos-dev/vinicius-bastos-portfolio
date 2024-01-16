import React from "react";
import style from "./Banner.module.css";
import IconList from "../LinkList";
import LinkIcon from "../LinkIcon";

export interface LinkType {
    image: string;
    alt: string;
    link: string;
}

interface BannerProps {
    links: LinkType[];
}

const Banner: React.FC<BannerProps> = ({ links }) => {
    return (
        <div className={style.banner}>
            <div>
                <h1 className={style.greetings}>Olá, me chamo Vinícius</h1>
                <div className={style.wrapper}>
                    <h2 className={style.jobTitle}>React</h2>
                    <IconList>
                        {links.map((link) => (
                            <li>
                                <LinkIcon {...link} />
                            </li>
                        ))}
                    </IconList>
                </div>
                <h2 className={style.jobTitle}>Developer</h2>
            </div>
            <p className={style.about}>
                Tenho 22 anos, apaixonado pela programação e em busca do
                primeiro emprego na aréa.
            </p>
        </div>
    );
};

export default Banner;
