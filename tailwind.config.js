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
    },
  },
  plugins: [],
};
