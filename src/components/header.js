import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import DarkLightSwitch from "./themeToggler"

import { Nav, Navbar } from "react-bootstrap"
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
        <Navbar
          collapseOnSelect
          className={`${state ? "scrollBox" : ""}` + " shadowBox"}
          expand="md"
          fixed="top"
        >
          <Navbar.Brand href="/#top">
            <h3 className="logo">
              Jakub<span>Skowroński.</span>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Item as={`li`}>
              <Nav.Link href="/#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as={`li`}>
              <Nav.Link href="/#portfolio">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item as={`li`}>
              <Nav.Link href="#contact" className="btn-success-outline">
                <FaEnvelope />
                &nbsp;<strong>Let's talk!</strong>
              </Nav.Link>
            </Nav.Item>
            <DarkLightSwitch />
          </Navbar.Collapse>
        </Navbar>
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
