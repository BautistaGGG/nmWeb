/** @type {import('tailwindcss').Config} */
export default module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nicoPortada": "url('./src/app/assets/Nico_Marban_portada.jpg')",
      },
      background:{
        "blackWhite": "linear-gradient(to right, white 0%, white 50%, black 50%, black 100%)"
      },
      colors:{
        "violeta": "#82027D",
        "gris": "#6B7280"
      },
      textColor:{
        "violeta": "#82027D",
        "gris": "#6B7280"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

