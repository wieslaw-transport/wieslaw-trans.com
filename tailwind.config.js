module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: 'Montserrat',
      },
      letterSpacing: {
        3.5: '0.875rem', // Analogically to margin and padding
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
