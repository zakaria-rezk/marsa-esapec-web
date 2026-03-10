/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cbdcf1",
        success: "#05FA46",
        danger: "#ED552C",
        warning: "#F9BB26",

        "primary-hover": "#444f5f",
        "success-hover": "#04D53C",
        "danger-hover": "#D8461F",
        "warning-hover": "#E6A91E",

        background: "#F7F9FC",
        card: "#FFFFFF",
        border: "#E5E7EB",
      },
    },
  },
  plugins: [],
};