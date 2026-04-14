import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#06070b",
        foreground: "#f6f6f8",
        accent: {
          1: "#8b5cf6",
          2: "#06b6d4",
          3: "#f5f5f7"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(139, 92, 246, 0.28)"
      },
      backgroundImage: {
        "noise-grid": "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.16), transparent 35%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.2), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
