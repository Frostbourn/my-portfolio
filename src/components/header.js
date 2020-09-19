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
              Jakub<span>Skowroński.</span>
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
            <li className="hover nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="hover nav-item">
              <a className="nav-link" href="#portfolio">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-success-outline nav-link" href="#contact">
                <FaEnvelope />
                &nbsp;Let's talk!
              </a>
            </li>
            <DarkLightSwitch />
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
