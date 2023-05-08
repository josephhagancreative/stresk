/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f4f4f4",
        black: "#1e1e1e",
        "blue-dk": "#314978",
        "blue-md": "#809bce",
        "blue-lt": "#95b8d1",
        "green-md": "#b8e0d2",
        "green-lt": "#d6eadf",
        pink: "#eac4d5",
        purplebg: "#544376",
        blackbg: "#150125",
      },
      backgroundImage: {
        "rainbow-vortex": "url('/images/rainbow-vortex.svg')",
      },
    },
    fontFamily: {
      display: "Quicksand",
      title: "Nunito",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
