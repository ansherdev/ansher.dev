const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'ar-xiketic': '#0D0C1D',
        'ar-oxford-blue': '#161B33',
        'ar-purple-navy': '#474973',
        'ar-hookers-green': '#52796F',
        'ar-dark-slate-gary': '#354F52',
        'ar-command-green': '#8EBF99',
        'ar-command-green-shadow': '#84A98C',
      },
      keyframes: {
        'hand-shake': {
          '0%, 75%, 100%': { transform: 'rotateZ(0deg)' },
          '25%': { transform: 'rotateZ(-25deg)' },
          '50%': { transform: 'rotateZ(10deg)' },
        },
        'shadow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 3rem #ffffff40',
          },
          '50%': {
            boxShadow: '0 0 3rem #ffffff20',
          },
        },
        fly: {
          '0, 100%': {
            transform: 'translate(0rem, 0rem)',
          },

          '50%': {
            transform: 'translate(0, 1.5rem)',
          },
        },
      },
      animation: {
        'hand-shake': 'hand-shake 3s ease-in-out infinite',
        'shadow-pulse': 'shadow-pulse 2s ease infinite',
        fly: 'fly 3s ease infinite',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        'jet-brains': ['var(--font-jet-brains)', ...fontFamily.sans],
      },
      dropShadow: {
        terminal: '0 0 2rem #ffffff20',
      },
    },
  },
  plugins: [],
};
