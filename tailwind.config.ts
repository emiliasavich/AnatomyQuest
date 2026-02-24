import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        "aq-primary": "#2d5016",
        "aq-sage": "#eef4eb",
        "aq-teal": "#0f766e",
        "aq-muted": "#6b7280",
        "aq-warm": "#faf8f5",
      },
    },
  },
  plugins: [],
};

export default config;