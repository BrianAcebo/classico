/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '.public/index'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff'
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}