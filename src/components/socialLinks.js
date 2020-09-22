import React from "react"

import { Slide } from "react-awesome-reveal"
import Emoji from "./Emoji"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import 'balloon-css';

const SocialLinks = () => {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank")
    win.focus()
  }

  return (
    <Slide direction="top" delay="3100" triggerOnce>
      <section id="social-links" className="social-links">
        <div className="social-media">
          <ul className="social-list">
            <li aria-label="Facebook" data-balloon-pos="left">
              <a
                className="icon-transition"
                href="https://www.facebook.com/skowronski.jakub"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li aria-label="Github" data-balloon-pos="left">
              <a
                className="icon-transition"
                href="https://github.com/Frostbourn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li aria-label="Linkedin" data-balloon-pos="left">
              <a
                className="icon-transition"
                href="https://www.linkedin.com/in/jakubskowronki"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
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
