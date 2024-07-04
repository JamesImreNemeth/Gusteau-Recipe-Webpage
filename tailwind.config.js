/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#7fba47',
        secondary: {
          light: '#E2E2D5',
          dark: '#888883',
        }
      },
      fontFamily: {
        body: ['Raleway']
      }
    },
  },
  plugins: [],
}

