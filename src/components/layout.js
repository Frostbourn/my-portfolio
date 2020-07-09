/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/index.css"

import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Portfolio from "./portfolio"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      header: '[data-scroll-header]', 
	    topOnEmptyHash: true,
      speed: 500,
      speedAsDuration: true
    });
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Hero />
      <About />
      <Portfolio />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
