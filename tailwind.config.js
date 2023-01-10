/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBrandColor: '#217BF4',
        textDark: '#0A093D', // ADD YOUR COLOR CODE HERE
        textLight: '#FAF7FF', // ADD YOUR COLOR CODE HERE
        textGray: ' #656464', // ADD YOUR COLOR CODE HERE
        iconPrimary: '#89C053',
        iconSecondary: '#5829FF',
        backgroundLite: '#F9F9F9',
        primaryDark: '#D150E5',
        primaryLight: '#F5E9F9',
        secondaryDark: '#804BEE',
        secondaryLight: '#A84EEA',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
