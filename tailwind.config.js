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
      "navbar-line": "#E1E1E1",
      navbar: "#F9F9F9",
    },
  },
  plugins: [require("daisyui")],
};
