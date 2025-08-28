"use client";
import React from "react";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import MobileSidebar from "./MobileSidebar";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { LINKS } from "@/config/routes";
import { cn } from "@/lib/utils";

export default function Header() {
  const scrollDir = useScrollDirection();
  const [isOnTop, setIsOnTop] = React.useState(true);
  const { isMobile } = useSidebar();
  const handleScroll = React.useCallback(() => {
    setIsOnTop(window.scrollY < 50);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
            "z-50 hidden md:flex fixed top-0 inset-x-0 px-16 h-[100px] justify-end items-center font-SFMono transition-all duration-300 backdrop-blur-md",
            scrollDir === "up" &&
              !isOnTop &&
              "h-[70px] translate-y-0 bg-navy-700/85 shadow-lg rounded-b-lg",
            scrollDir === "down" && !isOnTop && "h-[70px] -translate-y-[70px] ",
          )}
        >
          <nav className="navigation-container md:flex items-center gap-5 hidden">
            <ul className="flex gap-5 items-center">
              {LINKS.map((link, index) => (
                <React.Fragment key={link.href}>
                  <motion.li
                    initial="hidden"
                    animate="visible"
                    variants={fadeDown(index)}
                  >
                    <NavLink href={link.href}>
                      <span className="text-green-700 text-sm">
                        {index < 10 ? `0${index + 1}. ` : `${index + 1}. `}
                      </span>
                      {link.text}
                    </NavLink>
                  </motion.li>
                  {index === LINKS.length - 1 && (
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      variants={fadeDown(index + 1)}
                    >
                      <Button variant="custom" size="small">
                        Currículo
                      </Button>
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
}
