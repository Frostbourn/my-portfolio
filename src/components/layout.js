import React, { useEffect } from "react"

import gsap, { Bounce } from "gsap"

import Header from "./Header"
import Hero from "./Hero"
import SocialLinks from "./SocialLinks"
import About from "./About"
import Portfolio from "./Portfolio"
import SkillSet from "./Skills"
import ContactForm from "./Contact"
import Footer from "./Footer"

const Layout = () => {
  useEffect(() => {
    //TweenMax.to("header", 0, { css: { visibility: "visible" } })
    var tl = gsap.timeline()
    tl.to("header", {
      duration: 1,
      delay: 1,
      autoAlpha: 1,
      y: "50%",
      ease: Bounce.easeOut,
    })

    // tl.to("#id", { y: 50, duration: 1 })
    // tl.to("#id", { opacity: 0, duration: 1 })
  }, [])

  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && (
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
      )}
    </>
  )
}

export default Layout
