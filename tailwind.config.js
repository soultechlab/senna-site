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
          // Núcleo da identidade Capital Administradora: grafite + prata metálica
          primary: "#0e0e10",
          graphite: "#1c1c1e",
          graphiteLight: "#2e3035",
          ink: "#4a5057",
          accent: "#4a5057",
          secondary: "#1c1c1e",
          secondaryLight: "#2e3035",
          secondaryDark: "#0e0e10",
          silver: "#c9ced4",
          silverLight: "#edeff1",
          silverDark: "#8b9299",
          muted: "#f5f6f7",
          offWhite: "#fafafa",
        }
      },
      backgroundImage: {
        metal: "linear-gradient(135deg,#edeff1 0%,#ffffff 18%,#b4bac1 48%,#edeff1 66%,#8b9299 100%)",
        graphite: "linear-gradient(135deg,#2e3035 0%,#0e0e10 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        medium: "0 8px 32px rgba(0,0,0,0.12)",
        metal: "0 8px 28px rgba(14,14,16,0.28)",
      }
    },
  },
  plugins: [],
}
