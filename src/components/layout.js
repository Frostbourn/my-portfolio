/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./Header"
import Hero from "./Hero"
import SocialLinks from "./SocialLinks"
import About from "./About"
import Portfolio from "./Portfolio"
import SkillSet from "./Skills"
import ContactForm from "./Contact"
import Footer from "./Footer"

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
