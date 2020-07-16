/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import "../styles/index.css"

import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Portfolio from "./portfolio"
import ContactForm from "./contact"

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
      header: "[data-scroll-header]",
      topOnEmptyHash: true,
      speed: 500,
      speedAsDuration: true,
    })
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero />
      <About />
      <Portfolio />
      <ContactForm />
      <main>{children}</main>
      <footer>
        <Container>
          <div class="media-container-row">
            <div class="col-md-4 col-lg-4 logo-footer mb-3 mt-3 align-center">
              <div class="navbar-brand">
                <h3 className="logo">
                  Jakub<span>Skowroński.</span>
                </h3>
              </div>
            </div>
          </div>
        </Container>
        © {new Date().getFullYear()},{` `}
        jakubskowronski.com. All rights reserved
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
