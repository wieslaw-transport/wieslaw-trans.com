module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: 'Montserrat',
      },
      letterSpacing: {
        extreme: '1em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
