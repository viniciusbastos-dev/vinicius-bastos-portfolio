import React from "react";
import * as S from "./styles";
import LinkIcon from "../LinkIcon";

export interface LinkType {
    image: string;
    link: string;
}

interface BannerProps {
    links: LinkType[];
}

const Banner: React.FC<BannerProps> = ({ links }) => {
    return (
        <S.Container>
            <div>
                <S.Greetings>Olá, me chamo Vinícius</S.Greetings>
                <S.Row>
                    <S.Title>React</S.Title>
                    <S.LinkList>
                        {links.map((link) => (
                            <LinkIcon data={link} />
                        ))}
                    </S.LinkList>
                </S.Row>
                <S.Title>Developer</S.Title>
            </div>
            <S.About>
                Tenho 22 anos, sou apaixonado pela programação desde a
                adolescência. Há um ano atuo como freelancer, dedicando-me a me
                aprofundar nas tecnologias que domino e, claro, sempre buscando
                aprender coisas novas.
            </S.About>
        </S.Container>
    );
};

export default Banner;
