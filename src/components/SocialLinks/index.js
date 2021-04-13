import React, { useState, useEffect } from "react"

import { Fade } from "react-awesome-reveal"
import {
  FaFacebookMessenger,
  FaGithub,
  FaEnvelopeOpenText,
} from "react-icons/fa"
import "balloon-css"

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

  return (
    <Fade delay="250" triggerOnce>
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
            <li aria-label="Github" data-balloon-pos="left">
              <a
                className="icon-transition"
                href="https://github.com/Frostbourn"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FaGithub />
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
            <li className="social-line"></li>
          </ul>
        </div>
      </section>
    </Fade>
  )
}

export default SocialLinks
