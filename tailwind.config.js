/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],  
      },
      height: {
        "8vh": "8vh"
      },
      colors: {
        'customBackground': '#1E1E1E',
      }
    },
  },
  plugins: [],
}

