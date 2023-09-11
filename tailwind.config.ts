import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        books: "url(../public/assets/img/backgrounds/books.jpg)",
      },
    },
    colors: {
      ...colors,
      gradient:
        "linear-gradient(to right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
      dark: "#101010",
      midnight: "#1A1A1A",
      coal: "#2C2C2C",
      light: "#FEFDFD",
      grey: "#A6A6A6",
      silver: "#5A5A5A",
    },
  },
  plugins: [],
};
export default config;
