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
      },
      keyframes: {
        'hand-shake': {
          '0%, 75%, 100%': { transform: 'rotateZ(0deg)' },
          '25%': { transform: 'rotateZ(-25deg)' },
          '50%': { transform: 'rotateZ(10deg)' },
        },
      },
      animation: {
        'hand-shake': 'hand-shake 3s ease-in-out infinite',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        'jet-brains': ['var(--font-jet-brains)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
