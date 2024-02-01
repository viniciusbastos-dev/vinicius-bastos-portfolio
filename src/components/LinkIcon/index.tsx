import React from "react";
import * as S from "./styles";
import { LinkType } from "../Hero";

interface LinkIconProps {
    data: LinkType
}

const LinkIcon: React.FC<LinkIconProps> = ({ data }) => {
    return (
        <S.ListItem>
            <a href={data.link} target="_blank">
                <S.Icon src={data.image}></S.Icon>
            </a>
        </S.ListItem>
    );
};

export default LinkIcon;
