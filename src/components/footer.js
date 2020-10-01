import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Emoji from "./Emoji"
import { Fade } from "react-awesome-reveal"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => (
  <footer>
    <Fade delay="3500" triggerOnce>
      <div className="hidden-height"></div>
      <Container>
        <Row>
          <Col lg={4}>
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
                  href="https://www.facebook.com/skowronski.jakub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mbr-iconfont">
                    <FaFacebookF />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="icon-transition"
                  href="https://github.com/Frostbourn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mbr-iconfont">
                    <FaGithub />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="icon-transition"
                  href="https://www.linkedin.com/in/jakubskowronki"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mbr-iconfont">
                    <FaLinkedin />
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
