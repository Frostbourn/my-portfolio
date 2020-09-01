import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          url
          image
        }
      }
    }
  `)
  return (
  <>
  <Helmet>
    <title>{data.site.siteMetadata.title + data.site.siteMetadata.titleTemplate}</title>
    <meta name="title" content={data.site.siteMetadata.title + data.site.siteMetadata.titleTemplate} />
    <meta name="description" content={data.site.siteMetadata.description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={data.site.siteMetadata.url} />
    <meta property="og:title" content={data.site.siteMetadata.title + data.site.siteMetadata.titleTemplate} />
    <meta property="og:description" content={data.site.siteMetadata.description} />
    <meta property="og:image" content={data.site.siteMetadata.image} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={data.site.siteMetadata.url} />
    <meta property="twitter:title" content={data.site.siteMetadata.title + data.site.siteMetadata.titleTemplate} />
    <meta property="twitter:description" content={data.site.siteMetadata.description} />
    <meta property="twitter:image" content={data.site.siteMetadata.image} />
  </Helmet>
  <Layout>
  </Layout>
  </>
)}

export default IndexPage
