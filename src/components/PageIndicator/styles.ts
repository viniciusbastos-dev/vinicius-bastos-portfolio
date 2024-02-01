import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 50px;
    top: 50%;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
`;

export const Circle = styled.span`
    display: block;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background-color: #fff;
    transition-duration: 200ms;

    &:hover {
        transform: scale(2);
    }
`;
