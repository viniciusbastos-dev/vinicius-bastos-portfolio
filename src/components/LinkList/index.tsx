import React, { ReactNode } from "react";
import style from "./LinkList.module.css";

interface LinkListProps {
    children: ReactNode;
}

const IconList: React.FC<LinkListProps> = ({ children }) => {
    return <ul className={style.linkList}>{children}</ul>;
};

export default IconList;
