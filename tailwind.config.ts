import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        "aq-primary": "#2d5016",
        "aq-sage": "#eef4eb",
        "aq-teal": "#0f766e",
        "aq-muted": "#6b7280",
        "aq-warm": "#faf8f5",
        "aq-blue": "#2E5C8A",
        "aq-red": "#FF6B6B",
        "aq-turquoise": "#4ECDC4",
      },
    },
  },
  plugins: [],
};

export default config;
