import styled from "styled-components";

interface IconProps {
    src: string;
}

export const ListItem = styled.li`
    transition: 400ms ease;

    &:hover {
        transform: translateY(-20px);
    }
`;

export const Icon = styled.i<IconProps>`
    background: url(${(props) => props.src}) center/cover;
    display: block;
    width: 60px;
    height: 60px;

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`;
