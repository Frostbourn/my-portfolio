/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Hero from "./hero"
import SocialLinks from "./socialLinks"
import About from "./about"
import Portfolio from "./portfolio"
import SkillSet from "./skills"
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
      <SkillSet />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Layout
