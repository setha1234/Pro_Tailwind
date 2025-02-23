/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundColor:{
        navbar : "#8879B0",
        btn : "#377D71"
      },
      textColor:{
        colorBlue: "#7C96AB",
        colorWhite: "#FFF5E4"


      }
    },
  },
  plugins: [],
}

