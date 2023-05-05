/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ,],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["roboto", "sans-serif"],
    },
    colors: {
      "light-green": "#2FC4B2",
      "light-gray": "#E7E7E7",
    },
  },
  plugins: [require("daisyui")],
};
