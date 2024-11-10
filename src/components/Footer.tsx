"use client";
import React from "react";
import * as SVG from "@/assets/SVG";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {}
const Footer: React.FC<Props> = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  };
  return (
    <motion.footer initial="hidden" animate="visible" variants={fadeIn}>
      <div className="hidden md:flex pointer-events-none fixed bottom-0 inset-x-0 items-end justify-between px-5 font-mono">
        <ul className="socials-list">
          <li className="social-link">
            <Link href="https://github.com/viniciusbastos-dev" target="_blank">
              <SVG.GithubIcon />
            </Link>
          </li>
          <li className="social-link">
            <Link
              href="https://www.linkedin.com/in/vinicius-bastos-silva/"
              target="_blank"
            >
              <SVG.LinkedinIcon />
            </Link>
          </li>
        </ul>

        <ul className="socials-list relative">
          <li className="social-link email text-xs md:text-sm">
            <Link href="mailto:viniciusbsilva57@gmail.com">
              viniciusbsilva57@gmail.com
            </Link>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
