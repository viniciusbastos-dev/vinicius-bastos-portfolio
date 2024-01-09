import React, { ReactNode } from "react";
import * as S from "./Section";

interface SectionProps {
    children: ReactNode;
    title?: string
    template?: "flex" | "grid";
    secondary?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, template, secondary }) => {
    return (
        <S.Section isSecondary={secondary} template={template}>
            {children}
        </S.Section>
    );
};

export default Section;
