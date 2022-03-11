import React, { useState, useEffect } from "react"

import {
  FaFacebookMessenger,
  FaEnvelopeOpenText,
  FaLinkedinIn,
} from "react-icons/fa"
import "balloon-css"
import gsap from "gsap"

const SocialLinks = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== state.scrolled) {
        setState(isScrolled)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [state, setState])

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to("#social-links", {
      duration: 1,
      delay: 2.5,
      autoAlpha: 1,
      y: "-463px",
      ease: "power2.inOut",
    })
  }, [])

  return (
    <section
      id="social-links"
      className={`${state ? "hidden" : ""}` + " social-links"}
    >
      <div className="social-media">
        <ul className="social-list">
          <li aria-label="Facebook" data-balloon-pos="left">
            <a
              className="icon-transition"
              href="https://www.m.me/skowronski.jakub"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookMessenger />
            </a>
          </li>
          <li aria-label="E-mail" data-balloon-pos="left">
            <a
              className="icon-transition"
              href="mailto:kontakt@jakubskowronski.com"
              rel="noreferrer"
              aria-label="E-mail"
            >
              <FaEnvelopeOpenText />
            </a>
          </li>
          <li aria-label="Linkedin" data-balloon-pos="left">
            <a
              className="icon-transition"
              href="https://www.linkedin.com/in/jakubskowronki/"
              rel="noreferrer"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-line"></li>
        </ul>
      </div>
    </section>
  )
}

export default SocialLinks
