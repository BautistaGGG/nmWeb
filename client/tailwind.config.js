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
        'rosaTarjetas': "#82027d6b"
      },
      colors:{
        'violeta': "#82027D",
        'gris': "#6B7280",
        'rosaTarjetas': "#82027d6b"
      },
      textColor:{
        'violeta': "#82027D",
        'gris': "#6B7280",
        'rosaTarjetas': "#82027d6b"
      },
      fontFamily:{
        'Inter': '"Inter", sans-serif'
      },
      // ESTILOS ACCORDION FLOWBITE
      "root": {
        "base": "divide-y divide-gray-200",
        "flush": {
          "off": "",
          "on": "border-b"
        }
      },
      "content": {
        "base": "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
      },
      "title": {
        "arrow": {
          "base": "h-6 w-6 shrink-0",
          "open": {
            "off": "",
            "on": "rotate-180"
          }
        },
        "base": "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
        "flush": {
          "off": "hover:bg-zinc-950 ",
          "on": "bg-transparent dark:bg-transparent"
        },
        "heading": "",
        "open": {
          "off": "",
          "on": "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
        }
      }
      // ESTILOS ACCORDION FLOWBITE
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

