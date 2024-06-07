import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(184, 142, 47)",
        "primary-hover": "rgb(179, 137, 42)",
        "primary-active": "rgb(174, 132, 37)",
        secondary: "rgb(255, 243, 227)",
        "secondary-hover": "rgb(250, 238, 222)",
        "secondary-active": "rgb(245, 233, 217)",
        white: "rgb(255, 255, 255)",
        "white-hover": "rgb(240, 240, 240)",
        "white-active": "rgb(225, 225, 225)",
        whiteSmoke: "rgb(245, 245, 245)",
        "whiteSmoke-hover": "rgb(240, 240, 240)",
        "whiteSmoke-active": "rgb(235, 235, 235)",
        black: "rgb(0, 0, 0)",
        lightGray: "rgb(159, 159, 159)",
        gray: "rgb(102, 102, 102)",
        darkGray: "rgb(51, 51, 51)",
        border: "rgb(212, 212, 212)",
        line: "rgb(217, 217, 217)",
        transparent: "rgba(255, 255, 255, 0)",
        discount: "rgb(181, 236, 172)",
      },
      textColor: {
        primary: "var(--clr-darkGray)",
        secondary: "var(--clr-gray)",
        lightGray: "var(--clr-lightGray)",
        black: "var(--clr-black)",
        accent: "var(--clr-primary)",
        white: "var(--clr-white)",
      },
      backgroundColor: {
        primary: "var(--clr-secondary)",
        "primary-hover": "var(--clr-secondary-hover)",
        "primary-active": "var(--clr-secondary-active)",
        secondary: "var(--clr-line)",
        white: "var(--clr-white)",
        "white-hover": "var(--clr-white-hover)",
        "white-active": "var(--clr-white-active)",
        whiteSmoke: "var(--clr-whiteSmoke)",
        "whiteSmoke-hover": "var(--clr-whiteSmoke-hover)",
        "whiteSmoke-active": "var(--clr-whiteSmoke-active)",
        accent: "var(--clr-primary)",
        "accent-hover": "var(--clr-primary-hover)",
        "accent-active": "var(--clr-primary-active)",
        product: "rgba(0, 0, 0, 0.5)",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "52px",
      },
      lineHeight: {
        xs: "auto",
        sm: "auto",
        md: "auto",
        lg: "auto",
        xl: "120%",
        "2xl": "auto",
        "3xl": "120%",
        "4xl": "auto",
        "5xl": "65px",
      },
      padding: {
        xs: "6px",
        sm: "14px",
        md: "17px",
        lg: "25px",
        "top-main-desktop": "89px",
        "top-main-mobile": "80px",
        "y-banner": "34px",
      },
      transitionProperty: {
        default: "all",
      },
      transitionTimingFunction: {
        default: "linear",
      },
      transitionDuration: {
        default: ".1s",
      },
      borderRadius: {
        sm: "2px",
        df: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },
      zIndex: {
        nav: "2",
        header: "3",
      },
      borderWidth: {
        primary: "1px",
        line: "1px",
      },
      borderColor: {
        primary: "var(--clr-border)",
        line: "var(--clr-line)",
      },
    },
  },
  plugins: [],
};

export default config;
