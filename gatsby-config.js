const config = require('./src/config.js');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,    
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JorgeGiovannetti`,
        short_name: `JorgeGiovannetti`,
        start_url: `/`,
        background_color: config.colors.white,
        theme_color: config.colors.green,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    }
  ],
}
