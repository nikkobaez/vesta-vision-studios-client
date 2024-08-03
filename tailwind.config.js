/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        primary: "#131415",
        secondary: "#222228",
        tertiary: "#313139",
      },
      backgroundColor: {
        primary: "#131415",
        secondary: "#222228",
        tertiary: "#313139",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 3.5s linear infinite'
      },
      colors: {
        "light-gray": "#9E9E9E"
      }
    },
  },
  plugins: [],
}

