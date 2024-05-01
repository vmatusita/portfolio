/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
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

