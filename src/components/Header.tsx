"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Links } from "../config/config";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks";
import { cn } from "@/lib/utils";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileSidebar from "./MobileSidebar";

interface Props {}

const Header: React.FC<Props> = () => {
  const scrollDir = useScrollDirection();
  const [isOnTop, setIsOnTop] = useState(true);
  const { isMobile } = useSidebar();
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
    <>
      {!isMobile ? (
        <header
          className={cn(
            "hidden md:flex fixed top-0 inset-x-0 z-50 px-16 h-[100px] justify-between items-center font-mono transition-all duration-300 backdrop-blur-md",
            scrollDir === "up" &&
              !isOnTop &&
              "h-[70px] translate-y-0 bg-ink/80 border-b border-ink-3 shadow-xlg",
            scrollDir === "down" && !isOnTop && "h-[70px] -translate-y-[70px] "
          )}
        >
          <motion.a
            href="/#hero"
            initial="hidden"
            animate="visible"
            variants={fadeDown(0)}
            className="group flex items-center gap-2 text-chalk"
          >
            <span className="grid size-8 place-items-center rounded-md border border-neon/50 font-display text-sm font-semibold text-neon transition-colors group-hover:bg-neon group-hover:text-ink">
              VB
            </span>
            <span className="text-sm text-fog transition-colors group-hover:text-chalk">
              vinicius.dev
            </span>
          </motion.a>
          <nav className="navigation-container md:flex items-center gap-6 hidden">
            <ul className="flex gap-6 items-center">
              {Links.map((link, index) => (
                <React.Fragment key={link.href}>
                  <motion.li
                    initial="hidden"
                    animate="visible"
                    variants={fadeDown(index)}
                  >
                    <NavLink href={link.href}>
                      <span className="text-neon text-sm">
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
                      <Button small>Currículo</Button>
                    </motion.li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </header>
      ) : (
        <MobileSidebar />
      )}

      <SidebarTrigger className="absolute top-10 right-10 md:hidden" />
    </>
  );
};

export default Header;
