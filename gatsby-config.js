module.exports = {
  siteMetadata: {
    title: `Chris Devs for Fun`,
    description: `A fun site developed for fun.`,
    author: `@crash7114`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-wordpress-experimental`,
    //   options: {
    //     url: `https://chrisrwpdev.us/graphql`,
    //     schema: {
    //       //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
    //       typePrefix: `Wp`,
    //     },
    //     type: {
    //       Post: {
    //         limit:
    //           process.env.NODE_ENV === `development`
    //             ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
    //               5
    //             : // and we don't actually need more than 5000 in production for this particular site
    //               50,
    //       },
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/media`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/media/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
