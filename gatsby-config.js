/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Wiesław-Trans',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  flags: {
    DEV_SSR: false,
  },
};
