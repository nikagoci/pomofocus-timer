/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ba4949',
        'secondary': 'rgb(56, 133, 138)',
        'tertiary': 'rgb(57, 112, 151)',
        'white': '#fff',
        'transparent-white': 'rgba(0, 0, 0, 0.1)',
        'transparent-black': 'rgba(255, 255, 255, 0.1)',
        'dark': 'rgb(102, 102, 102)',
        'light_dark': 'rgb(187, 187, 187)'
      }
    },
  },
  plugins: [],
}
