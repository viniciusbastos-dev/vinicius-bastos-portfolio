"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Links } from "../config/config";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks";
import { cn } from "@/lib/utils";

interface Props {}

const Header: React.FC<Props> = () => {
  const scrollDir = useScrollDirection();
  const [isOnTop, setIsOnTop] = useState(true);

  const handleScroll = () => {
    setIsOnTop(window.scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeDown = (index: number) => ({
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: index * 0.3 },
    },
  });

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 px-16 h-[100px] flex justify-end items-center font-mono transition-all duration-300 backdrop-blur-md",
        scrollDir === "up" &&
          !isOnTop &&
          "h-[70px] translate-y-0 bg-navy_700/85 shadow-xlg",
        scrollDir === "down" && !isOnTop && "h-[70px] -translate-y-[70px] "
      )}
    >
      <nav className="navigation-container md:flex items-center gap-5 hidden">
        <ul className="flex gap-5 items-center">
          {Links.map((link, index) => (
            <React.Fragment key={link.href}>
              <motion.li
                initial="hidden"
                animate="visible"
                variants={fadeDown(index)}
              >
                <NavLink href={link.href}>
                  <span className="text-green_700 text-sm">
                    {index < 10 ? `0${index + 1}. ` : `${index + 1}. `}
                  </span>
                  {link.text}
                </NavLink>
              </motion.li>
              {index === Links.length - 1 && (
                <motion.li
                  initial="hidden"
                  animate="visible"
                  variants={fadeDown(index + 1)}
                >
                  <Button text="Currículo" small />
                </motion.li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
