import React from "react"

import { Slide } from "react-awesome-reveal"
import Emoji from "./Emoji"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"

const SocialLinks = () => {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank")
    win.focus()
  }

  return (
    <Slide direction="top" triggerOnce>
      <section id="social-links" className="social-links">
        <div className="social-media">
          <ul className="social-list">
            <li>
              <a
                className="icon-transition"
                href="https://www.facebook.com/skowronski.jakub"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                className="icon-transition"
                href="https://github.com/Frostbourn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                className="icon-transition"
                href="https://www.linkedin.com/in/jakubskowronki"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <div className="social-line"></div>
          </ul>
        </div>
      </section>
    </Slide>
  )
}

export default SocialLinks
