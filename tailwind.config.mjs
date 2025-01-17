import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'EB Garamond Variable'", ...defaultTheme.fontFamily.serif],
        orpheus: ["'Orpheus Pro'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: {
          "dark-grey": "#313D41",
          orange: "#EFB071",
          blurple: "#E0E2ED",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
