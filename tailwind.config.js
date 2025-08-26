/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0b0b0c",
          accent: "#d4af37",
          muted: "#f8fafc",
          goldLight: "#f3e8b8",
        }
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        medium: "0 8px 32px rgba(0,0,0,0.12)",
      }
    },
  },
  plugins: [],
}
