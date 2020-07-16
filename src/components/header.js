import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { Nav, Navbar } from "react-bootstrap"
import { Bounce } from 'react-awesome-reveal';
import { FaEnvelope } from 'react-icons/fa';

const Header = props => {
  // determined if page has scrolled and if the view is on mobile
  const [state, setState] = useState(false)

  // change state on scroll
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== state.scrolled) {
        setState(isScrolled)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", onScroll)
    }
  }, [state, setState])

  return (
    <StyledHeader data-scroll-header>
      <Bounce direction="bottom" triggerOnce>
      <Navbar
        collapseOnSelect
        className={`${state ? "scrollBox" : ""}` + " shadowBox"}
        expand="md"
        fixed="top"
      >
        <Navbar.Brand href="#">
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
              Kontakt
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
      </Bounce>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
