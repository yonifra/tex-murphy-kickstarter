/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#11141f",
          700: "#1a1f2e",
        },
        neon: {
          amber: "#ffb547",
          gold: "#f5c563",
          red: "#ff4d4d",
          cyan: "#5cf0ff",
          magenta: "#ff3df0",
        },
      },
      fontFamily: {
        display: ['"Cinzel"', "serif"],
        mono: ['"Share Tech Mono"', "ui-monospace", "monospace"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noir-grad":
          "radial-gradient(ellipse at top, rgba(255,181,71,0.10), transparent 60%), radial-gradient(ellipse at bottom, rgba(92,240,255,0.06), transparent 55%), linear-gradient(180deg, #05060a 0%, #0a0c14 100%)",
        "scanlines":
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255,181,71,0.45)",
        "glow-cyan": "0 0 40px -8px rgba(92,240,255,0.45)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.85" },
          "47%": { opacity: "0.4" },
          "49%": { opacity: "0.95" },
        },
        rain: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,181,71,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255,181,71,0.8)" },
        },
      },
      animation: {
        flicker: "flicker 4s infinite",
        rain: "rain 1.2s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
