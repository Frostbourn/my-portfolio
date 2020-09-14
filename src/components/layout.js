/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../styles/layout.min.css"

import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Portfolio from "./portfolio"
import ContactForm from "./contact"
import Footer from "./footer"
import kursor from "kursor"

const Layout = () => {

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

  new kursor({
    type: 2,
    color: '#C6A1FF',
    removeDefaultCursor: true
  })

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Layout
