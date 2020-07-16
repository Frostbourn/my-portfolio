import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import { Nav, Navbar } from "react-bootstrap"
import { Bounce } from 'react-awesome-reveal';
import { FaEnvelope } from 'react-icons/fa';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  z-index: 99;

  a {
    text-shadow: none;
    text-decoration: none;
  }

  .logo {
    margin: 1rem 4rem;
    display: inline;
    color: #293347;
    font-size: 1.75rem;
    font-weight: 700;
    white-space: normal;

    span {
      color: var(--secondary);
    }
  }
  nav {
    width: 100%;
    background: #fff;
    -webkit-transition: all 0.6s ease-out;
    -moz-transition: all 0.6s ease-out;
    -o-transition: all 0.6s ease-out;
    -ms-transition: all 0.6s ease-out;
    transition: all 0.6s ease-out;

    .navbar-collapse.show:after {
      position: absolute;
      width: 100vw;
      height: 100vh;
      content: "";
      background-color: rgba(0, 0, 0, 0.3);
      left: 0;
      bottom: 0;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      z-index: 1000;
    }

    .navbar-toggler {
      border: none;
    }
    .navbar-collapse {
      justify-content: flex-end;
      transition: all 0.45s ease;

      li {
        padding: 1.25rem;
        display: flex;
        font-size: 1rem;

        a {
          font-weight: 400;
          color: var(--primary);
          transition: color 0.2s ease-in-out;
        }
        a:hover {
          color: #8c43ff;
        }
      }

      .btn-success-outline {
        display: flex;
        align-items: center;
        border-radius: 100px;
        cursor: pointer;
        padding: 0.4rem 1.5rem;
        background: none;
        color: #5b00ec !important;
        font-weight: 600;
        letter-spacing: 2px;
        border: 2px solid;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        :hover {
          color: #ffffff !important;
          background-color: #9553ff;
          border-color: #9553ff;
          box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2) !important;
          -webkit-box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2) !important;
        }
        svg {
          margin-right: 5px;
        }
      }
    }
  }
  .scrollBox {
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.08);;
  }
  @media (max-width: 835px) {
    nav {
      justify-content: center;

      .logo {
        margin: 0;
      }
      .navbar-collapse li {
        padding: 0.5rem;
        justify-content: center;
      }
    }
  }
`

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
