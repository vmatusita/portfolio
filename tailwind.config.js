/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'formasMobile': "url('/assets/fundo-formas.png')",
        'formasWeb': "url('/assets/fundo-formas-web.png')",
        'fundoCirculo': "url('/assets/fundo-circulo.png')",
        'fundoX': "url('/assets/fundo-x.png')",
        'fundoHtml': "url('/assets/fundo-html.png')",
        'fundoContato': "url('/assets/fundo-contato.png')",
      },
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

