import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ParallaxProvider } from "react-scroll-parallax"

const IndexPage = data => (
  <ParallaxProvider>
    <Layout>
      <SEO title="Jakub Skowroński" keywords="frontend developer" />
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
