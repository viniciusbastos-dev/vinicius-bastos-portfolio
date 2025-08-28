import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}
const NavLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      className={`text-sm text-slate-300 hover:text-green-700 duration-500`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
