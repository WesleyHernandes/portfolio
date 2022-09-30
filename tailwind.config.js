// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        highlight: "#FEE440",
        dark: "#272833",
        medium: "#353543",
        light: "#E7F6F3"
      },
      animation: {
        'pulse-loader': 'pulsing 1s linear infinite',
      },
      keyframes: {
        pulsing: {
          '0%': { 'transform': 'scale(0, 0)', 'opacity' : '1' },
          '100%': { 'transform': 'scale(1, 1)', 'opacity' : '0' }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
}
