/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Portfolio from "./portfolio"
import SocialLinks from "./socialLinks"
import ContactForm from "./contact"
import Footer from "./footer"

const Layout = () => {

  return (
    <>
      <Header />
      <Hero />
      <SocialLinks />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Layout
