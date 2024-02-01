import styled from "styled-components";

interface SectionProps {
    isSecondary?: boolean;
    customPadding?: boolean;
}

export const Container = styled.section<SectionProps>`
    background: linear-gradient(
        180deg,
        ${(props) => (props.isSecondary ? "#1c2f41" : "#486ef5")} 0%,
        ${(props) => (props.isSecondary ? "#486ef5" : "#1c2f41")} 90%
    );

    ${(props) => (props.customPadding ? "padding: 60px;" : "")}

    box-sizing: border-box;
    min-height: 100svh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
`;
