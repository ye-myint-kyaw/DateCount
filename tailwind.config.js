/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "sp": "500px"
    },
    extend: {
      colors:{
        black:"#333",
        yellow2:"#FFE074"
      },
      fontFamily:{
        myanmar:  "Padauk"
      }
    },
  },
  plugins: [],
}

