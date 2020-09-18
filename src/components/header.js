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
  <nav className={
            `${state ? "scrollBox" : ""}` + "shadowBox px-md-4 px-xs-1 navbar navbar-expand-md navbar-light fixed-top navbar navbar-expand-md navbar-light fixed-top"
          }>
      <a className="navbar-brand" href="/#top"><h3 className="logo">
              Jakub<span>Skowroński.</span>
            </h3></a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
          <span className="sr-only">Toggle navigation</span>
        </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
          </li> */}
          <li className="hover nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="hover nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="btn-success-outline nav-link" href="#contact">Contact</a>
          </li>
          <DarkLightSwitch />
    </div>
  </nav>
</header>
       <header data-scroll-header>
        <Navbar
          collapseOnSelect
          className={
            `${state ? "scrollBox" : ""}` + "shadowBox px-md-4 px-xs-1 navbar navbar-expand-md navbar-light fixed-top"
          }
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
            <Nav.Item as={`li`} className="hover">
              <Nav.Link href="/#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as={`li`} className="hover">
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
