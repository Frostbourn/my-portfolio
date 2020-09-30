import React from "react"
import { Container, Row } from "react-bootstrap"
import Emoji from "./Emoji"
import { Fade } from "react-awesome-reveal"

const Footer = () => (
  <footer>
    <div className="hidden-height"></div>
    <Container>
      <Row>
        <nav>
          <ul class="navbar-nav">
            <li className="hover">
              <a href="#about">About</a>
            </li>
            <li className="hover">
              <a href="#portfolio">Work</a>
            </li>
            <li className="hover">
              <a href="#contact">&nbsp;Let's talk!</a>
            </li>
          </ul>
        </nav>
        <hr />
      </Row>
      <Fade delay="3500" triggerOnce>
        <div className="media-container-row">
          <div className="col-md-6 col-lg-6 mb-3 mt-3 align-center">
            <div className="mb-0 text-copyright mbr-fonts-style">
              Made with <Emoji symbol="❤️" label="heart" /> by Jakub Skowronski
            </div>
          </div>
          <div className="col-6 copyright mb-3 mt-3 align-center">
            ©{new Date().getFullYear()} {` `}
            <span className="logo-footer">
              &nbsp;Jakub<span>Skowronski.</span>
            </span>
          </div>
        </div>
      </Fade>
    </Container>
  </footer>
)
export default Footer
