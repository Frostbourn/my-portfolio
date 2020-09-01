module.exports = {
  siteMetadata: {
    title: `Jakub Skowronski`,
    titleTemplate: ` - Web Developer Porfolio`,
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
    `gatsby-plugin-styled-components`,
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
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer a5908d390e2de859fa89a5eea163d952ea550ae7`,
        },
        queries: [
          `{ viewer {                 
            pinnedItems(first: 3, types: REPOSITORY){
             nodes {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
            }
           }
          }
        }
        }`,
        ],
      },
    },
  ],
}
