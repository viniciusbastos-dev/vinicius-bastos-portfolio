import React from "react";

interface IconLinkProps {
    href: string;
    src: string;
    alt: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, src, alt }) => {
    return (
        <a href={href} target="_blank">
            <img src={src} alt={alt} />
        </a>
    );
};

export default IconLink;
