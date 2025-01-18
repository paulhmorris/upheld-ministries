import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      // gray: colors.gray,
      transparent: colors.transparent,
      current: colors.current,
      brand: {
        "dark-grey": "#313D41",
        "dark-teal": "#476c77",
        orange: "#EFB071",
        blurple: "#E0E2ED",
      },
    },
    extend: {
      fontFamily: {
        serif: ["'EB Garamond Variable'", ...defaultTheme.fontFamily.serif],
        orpheus: ["'Orpheus Pro'", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
