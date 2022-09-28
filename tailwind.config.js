// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
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
