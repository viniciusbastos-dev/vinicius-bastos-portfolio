import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 50px;
    top: 50%;
`;

export const List = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`;

export const Item = styled.li`
    cursor: pointer;
`;

export const Circle = styled.span`
    display: block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background-color: #fff;
    transition: 0.3s;
    .active & {
       transform: scale(2);
    }

    &:not(a.active):hover {
        transform: scale(2);
    }
`;
