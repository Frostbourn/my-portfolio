import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import DarkLightSwitch from "./themeToggler"

import { Bounce } from "react-awesome-reveal"
import { FaEnvelope } from "react-icons/fa"

const Header = props => {
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
    <Bounce direction="bottom" triggerOnce>
      <header data-scroll-header>
        <nav
          className={
            `${state ? "scrollBox " : ""}` +
            "shadowBox px-md-4 px-xs-1 navbar navbar-expand-md navbar-light fixed-top navbar navbar-expand-md navbar-light fixed-top"
          }
        >
          <a class="navbar-brand" href="/#top">
            <h3 className="logo">
              Jakub<span>Skowronski.</span>
            </h3>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
            <span className="sr-only">Toggle navigation</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul class="nav navbar-nav">
              <li className="hover nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.showt"
                >
                  About
                </a>
              </li>
              <li className="hover nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn-success-outline nav-link"
                  href="#contact"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <FaEnvelope />
                  &nbsp;Let's talk!
                </a>
              </li>
              <DarkLightSwitch />
            </ul>
          </div>
        </nav>
      </header>
    </Bounce>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
