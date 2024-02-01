import React, { ReactNode } from "react";
import * as S from "./styles";

interface SectionProps {
    children: ReactNode;
    pageID?: string;
    secondary?: boolean;
    customPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
    pageID,
    secondary,
    customPadding,
    children,
}) => {
    return (
        <S.Container
            id={pageID}
            $isSecondary={secondary}
            $customPadding={customPadding}
        >
            {children}
        </S.Container>
    );
};

export default Section;
