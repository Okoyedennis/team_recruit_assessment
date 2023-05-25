/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "rgb(1,95,255)",
        primary: "rgb(40,49,83)",
        input: "rgb(250,250,252)",
        placeholder: "rgb(204,209,225)",
        inputMark: "rgb(1,162,238)",
        gray: "rgb(162,171,186)",
        darkGray: "rgb(230,234,237)",
        lightPrimary: "rgb(170,179,194)",
      },
      boxShadow: {
        custom1:
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;",
      },
    },
  },
  plugins: [],
};

