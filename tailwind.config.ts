import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E0F",
        paper: "#F7F4EE",
        bone: "#EDE8DE",
        ember: "#E8B14C",
        ash: "#6B6862",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.04em" },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};
export default config;