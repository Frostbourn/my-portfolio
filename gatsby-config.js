module.exports = {
  siteMetadata: {
    title: `Jakub Skowronski `,
    titleTemplate: `| Designer & Front-end Developer | Portfolio`,
    description: `I am a web developer freelancer, I specialize in designing websites. Effective Websites! Check my portfolio and references.`,
    author: `Jakub Skowronski`,
    url: `https://jakubskowronski.com`,
    image: `src/images/screenshot.png`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JS Soft`,
        short_name: `JSNS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
}
