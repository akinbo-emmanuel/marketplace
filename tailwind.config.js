/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary100': '#C0EF55',
      'white100': '#fff',
      'black100': '#07070C',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      'md': '810px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
}