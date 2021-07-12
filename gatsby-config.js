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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wiesław Trans',
        short_name: 'Wiesław Trans Usługi Transportowe',
        start_url: '/',
        background_color: '#2563eb',
        theme_color: '#2563eb',
        display: 'standalone',
        icon: 'src/images/bus.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
  ],
  flags: {
    DEV_SSR: false,
  },
};
