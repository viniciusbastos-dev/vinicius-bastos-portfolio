import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff20;
    border-radius: 16px;
    text-align: center;
    color: #dcdcdc;
    transition: 400ms ease-in-out;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    &:hover {
        transform: scale(1.2);
        ${(props) => `color: ${props.color};`}
    }
`;

export const Icon = styled.div`
    font-size: 4rem;
`;

export const Name = styled.h3`
    color: white;
`;
