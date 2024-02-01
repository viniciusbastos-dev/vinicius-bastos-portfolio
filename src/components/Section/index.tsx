import React, { ReactNode } from "react";
import * as S from "./styles";

interface SectionProps {
    children: ReactNode;
    pageID: string;
    secondary?: boolean;
    customPadding?: boolean;
}

const Section: React.FC<SectionProps> = (props, { ...rest }) => {
    return (
        <S.Container
            id={props.pageID}
            isSecondary={props.secondary}
            customPadding={props.customPadding}
            {...rest}
        >
            {props.children}
        </S.Container>
    );
};

export default Section;
