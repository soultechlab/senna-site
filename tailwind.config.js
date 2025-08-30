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
          secondary: "#0f172a",
          secondaryLight: "#334155",
          secondaryDark: "#020617",
          muted: "#f8fafc",
          offWhite: "#fafafa",
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
