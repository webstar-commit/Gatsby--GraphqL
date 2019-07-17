require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Les Capsules`,
    description: `Bienvenue sur les site des Capsules.`,
    author: `Bruno Alla`,
    siteUrl: `https://lescapsules.com`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-134920468-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `les capsules`,
        // short_name: `les capsules`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0024D9`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
