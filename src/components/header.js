import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import DarkLightSwitch from "./themeToggler"

import { Nav, Navbar } from "react-bootstrap"
import { gsap, TimelineLite, Power3 } from 'gsap'
import { FaEnvelope } from "react-icons/fa"

const Header = props => {
  const [state, setState] = useState(false)
  
  gsap.set(['.navbar-brand'], {autoAlpha: 0})

  useEffect(() => {

    const tl = new TimelineLite({delay: 0.5})
    tl.fromTo('.navbar-brand', {y: -60, autoAlpha: 0, ease: Power3.easeOut, delay: 0.2}, {y: 0, autoAlpha: 1})
      

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
      <header data-scroll-header>
        <Navbar
          collapseOnSelect
          className={`${state ? "scrollBox" : ""}` + " shadowBox"}
          expand="md"
          fixed="top"
        >
          <Navbar.Brand href="/">
            <h3 className="logo">
              Jakub<span>Skowroński.</span>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Item as={`li`}>
              <Nav.Link href="/#about">O mnie</Nav.Link>
            </Nav.Item>
            <Nav.Item as={`li`}>
              <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as={`li`}>
              <Nav.Link href="#contact" className="btn-success-outline">
                <FaEnvelope />
                &nbsp;<strong>Kontakt</strong>
              </Nav.Link>
            </Nav.Item>
            <DarkLightSwitch />
          </Navbar.Collapse>
        </Navbar>
      </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
