/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-netlify`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `projects`,
          path: `${__dirname}/src/projects/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
    ],
    siteMetadata: {
      title: "Benjamin Cranwell",
      description: "UX developer portfolio",
      copyright: "This webside is copyright 2021",
      contact: "benzoscifo@yahoo.com",
    },
  }
  