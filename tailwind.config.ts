import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2f5e",
          dark: "#0d1f3c",
          light: "#1e3a8a",
        },
        gold: {
          DEFAULT: "#c9a227",
          dark: "#b8911f",
          light: "#f0c84a",
        },
        surface: "#f8f9fc",
        "text-main": "#1a1a2e",
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            direction: "rtl",
            textAlign: "right",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
