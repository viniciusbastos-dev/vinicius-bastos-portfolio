import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: "var(--font-SFMono)",
        display: "var(--font-SFDisplay)",
      },
      fontSize: {
        c8xl: "clamp(40px, 8vw, 80px)",
        c6xl: "clamp(30px, 6vw, 60px)",
      },
      colors: {
        navy_700: "#0A192F",
        navy_500: "#112240",
        navy_300: "#233554",

        slate_700: "#8892B0",
        slate_500: "#A8B2D1",
        slate_300: "#CCD6F6",

        green_700: "#64FFDA",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        xsm: "4px 4px 0px 0px",
        xlg: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
