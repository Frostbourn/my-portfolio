import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
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

  nav {
    margin: 0 2rem 0 auto;
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    padding-left: 0;
    flex-direction: row;

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
`

const ListLink = props => (
  <li>
    <Link to={props.to} class={props.class}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Link to="/">
        <h3 class="logo">
          Jakub<span>Skowroński.</span>
        </h3>
      </Link>
      <nav>
        <ListLink to="#">O mnie</ListLink>
        <ListLink to="#">Portfolio</ListLink>
        <ListLink to="#" class="btn-success-outline">
          Kontakt
        </ListLink>
      </nav>
      {children}
    </StyledHeader>
  )
}

export default Header
