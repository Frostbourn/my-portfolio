require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Jakub Skowroński`,
    titleTemplate: ` | Freelance Front-end Developer | Portfolio`,
    description: `I specialize in building meaningful digital products and interactive experiences. Check out my portfolio and references.`,
    author: `Jakub Skowroński`,
    url: `https://jakubskowronski.com`,
    image: `screenshot.png`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          quality: 100,
          placeholder: "blurred",
        },
      },
    },
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Poppins",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-27344336-5",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "738990566963643",
      },
    },
  ],
}
