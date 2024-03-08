/** @type {import('tailwindcss').Config} */

export default module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 
          "radial-gradient(var(--tw-gradient-stops))",
        'gradient-conic':
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'nicoPortada': 
          "url('./src/assets/Nico_Marban_portada.jpg')",
        'planesUno': 
          "url('./src/assets/Nico_tarjeta_1.jpg')",
        'planesDos': 
          "url('./src/assets/Nico_tarjeta_2.jpg')",
        'planesTres': 
          "url('./src/assets/Nico_tarjeta_3.jpg')",
      },
      background:{
        'blackWhite': "linear-gradient(to right, white 0%, white 50%, black 50%, black 100%)",
        'rosaTarjetas': "#82027d6b",
        'footer': ""
      },
      colors:{
        'violeta': "#82027D",
        'gris': "#6B7280",
        'rosaPropio': "#82027d6b"
      },
      textColor:{
        'violeta': "#82027D",
        'gris': "#6B7280",
        'rosaPropio': "#82027D"
      },
      fontFamily:{
        'Inter': '"Inter", sans-serif'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

