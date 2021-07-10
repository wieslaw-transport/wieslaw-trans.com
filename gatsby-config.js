/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Wiesław-Trans',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     postCssPlugins: [
    //       require('tailwindcss'),
    //       require('./tailwind.config'),
    //     ]
    //   }
    // }
    // 'gatsby-plugin-postcss',
  ],
  flags: {
    DEV_SSR: false,
  },
};
