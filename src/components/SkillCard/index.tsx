import React, { ReactNode } from "react";
import * as S from "./styles";

interface SkillCardProps {
    data: { color: string; component: ReactNode; name: string };
}

const SkillCard: React.FC<SkillCardProps> = ({ data }) => {
    return (
        <S.Container color={data.color}>
            <S.Icon>{data.component}</S.Icon>
            <S.Name>{data.name}</S.Name>
        </S.Container>
    );
};

export default SkillCard;
