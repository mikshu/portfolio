/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        light: "#f8fafc",
        dark: "#0f172a",
        primary: "#2563eb",
        primaryDark: "#60a5fa",
        lightColor: "#0f172a",
        darkColor: "#f1f5f9",
        muted: "#475569",
        accent: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        "gradient-accent": "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
