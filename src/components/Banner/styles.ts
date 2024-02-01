import styled from "styled-components";

export const Greetings = styled.h1`
    font-size: 1.375rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 440px) {
        font-size: 0.7rem;
    }
`;

export const Title = styled.h2`
    text-shadow: -5px 6px 0px rgba(0, 0, 0, 0.25);
    font-size: 7rem;
    font-family: "Fira Sans", sans-serif;

    @media (max-width: 768px) {
        font-size: 4rem;
    }
    @media (max-width: 440px) {
        font-size: 3rem;
    }
`;

export const About = styled.p`
    align-self: flex-end;
    font-weight: 500;
    font-size: 14px;
    text-indent: 25px;
    line-height: 1.1;
    width: 450px;
    margin-top: 6px;

    @media (max-width: 768px) {
        font-size: 10px;
        width: 260px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    text-transform: uppercase;
    line-height: 0.9;
    width: max-content;
`;

export const LinkList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;

    @media (max-width: 768px) {
    }
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;
