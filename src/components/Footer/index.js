import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "../Emoji"
import { Fade } from "react-awesome-reveal"
import {
  FaFacebookMessenger,
  FaEnvelopeOpenText,
  FaLinkedinIn,
} from "react-icons/fa"

const Footer = () => (
  <footer>
    <Fade triggerOnce>
      <div className="hidden-height"></div>
      <Container>
        <Row className="media-container-row">
          <Col lg={4}>
            <nav>
              <ul className="navbar-nav">
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
          </Col>
          <Col lg={4} className="align-center">
            <div className="text-copyright">
              ©{new Date().getFullYear()} {` `} Made with{" "}
              <Emoji symbol="❤️" label="heart" /> by{" "}
              <span className="logo-footer">
                {" "}
                &nbsp;Jakub<span>Skowronski.</span>
              </span>
            </div>
          </Col>
          <Col lg={4} className="social-media">
            <ul className="social-list">
              <li>
                <a
                  className="icon-transition"
                  href="https://www.m.me/skowronski.jakub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mbr-iconfont">
                    <FaFacebookMessenger />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="icon-transition"
                  href="mailto:kontakt@jakubskowronski.com"
                  rel="noreferrer"
                  aria-label="E-mail"
                >
                  <span className="mbr-iconfont">
                    <FaEnvelopeOpenText />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="icon-transition"
                  href="https://www.linkedin.com/in/jakubskowronki/"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <span className="mbr-iconfont">
                    <FaLinkedinIn />
                  </span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Fade>
  </footer>
)
export default Footer
