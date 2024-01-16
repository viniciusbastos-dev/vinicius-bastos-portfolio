import styled from "styled-components";

interface SectionProps {
    isSecondary?: boolean;
    template?: string;
}

export const Section = styled.section<SectionProps>`
    background: linear-gradient(
    180deg,
    ${props => props.isSecondary ? '#1c2f41' : '#486ef5'} 0%,
    ${props => props.isSecondary ? '#486ef5' : '#1c2f41'} 90%
    );
    box-sizing: border-box;
    min-height: 100svh;

    ${props => props.template === "flex" ? `
    display: flex;
    justify-content: center;
    align-items: center;
    ` : `
    display: grid;
    justify-items: center;
    gap: 80px;
    padding: 60px;

    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        padding: 40px 0;
    }
    `}


`;