import styled from "styled-components";

export const Container = styled.nav`
    position: fixed;
    right: 30px;
    top: 50%;
`;

export const List = styled.ul`
    position: relative;
    display: flex;

    flex-direction: column;
    gap: 15px;
`;

export const Item = styled.li`
    cursor: pointer;
`;

export const Text = styled.span`
    font-size: 12px;
    color: white;
    opacity: 0;
    font-weight: 500;
    transition: opacity 0.3s;
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

export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    
    &:hover {
        ${Text} {
            opacity: 1;
        }
    }
`;
