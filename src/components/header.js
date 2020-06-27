import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin: 1rem 0;
  padding: 0 1rem;

  nav {
    margin: 0;
    list-style: none;
    float: right;
  }
  a {
    text-shadow: none;
    text-decoration: none;
  }
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Link to="/" style={{ textShadow: `none` }}>
        <h3 class="logo" style={{ display: `inline`, color: `navyblue` }}>
          Jakub<span style={{ color: `purple` }}>Skowronski</span>
        </h3>
      </Link>
      <nav>
        <ListLink to="#">O mnie</ListLink>
        <ListLink to="#">Portfolio</ListLink>
        <ListLink to="#">Kontakt</ListLink>
      </nav>
      {children}
    </StyledHeader>
  )
}

export default Header
