import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "react-bootstrap"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 75px;
  background-color: #ffffff;

  a {
    text-shadow: none;
    text-decoration: none;
  }

  .logo {
    margin: 1rem 4rem;
    display: inline;
    color: #293347;
    font-size: 1.8rem;
    font-weight: 700;
    white-space: normal;

    span {
      color: var(--secondary);
    }
  }
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
  nav {
    width: 100%;
    background: #fff;

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
        border-radius: 100px;
        cursor: pointer;
        padding: 0.4rem 1.5rem;
        background: none;
        color: #5b00ec !important;
        font-weight: 600;
        letter-spacing: 2px;
        border: 1px solid;
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
      }
    }
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

const ListLink = props => (
  <li>
    <Link to={props.to} class={props.class}>
      {props.children}
    </Link>
  </li>
)

const Header = props => (
  <StyledHeader>
    <Navbar collapseOnSelect expand="md" fixed="top">
      <Navbar.Brand href="/">
        <h3 class="logo">
          Jakub<span>Skowroński.</span>
        </h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ListLink to="#">O mnie</ListLink>
        <ListLink to="#">Portfolio</ListLink>
        <ListLink to="#" class="btn-success-outline">
          Kontakt
        </ListLink>
      </Navbar.Collapse>
    </Navbar>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
