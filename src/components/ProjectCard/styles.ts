import styled from "styled-components";

export const Container = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    gap: 10px;
    text-align: center;
`;

export const Image = styled.img`
    width: 400px;

    @media (max-width: 768px) {
        width: 320px;
    }
`;

export const Type = styled.p`
    font-size: 0.875rem;
`;

export const Title = styled.h2`
    max-width: 360px;
    font-size: 1.5rem;
    font-weight: 700;
`;
