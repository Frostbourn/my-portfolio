import React from "react"

import Header from "./Header"
import Hero from "./Hero"
import SocialLinks from "./SocialLinks"
import About from "./About"
import Experience from "./Experience"
import Portfolio from "./Portfolio"
import SkillSet from "./Skills"
import Certifications from "./Certifications"
import ContactForm from "./Contact"
import Footer from "./Footer"

const Layout = () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && (
        <>
          <Header />
          <Hero />
          <SocialLinks />
          <About />
          <Experience />
          <Portfolio />
          <SkillSet />
          <Certifications />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
