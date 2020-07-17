import React from "react"
import { Container, Button, Row, Col, Alert } from "react-bootstrap"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => (
  <footer>
    <Container>
      <div class="media-container-row">
        {/* <div class="col-md-4 col-lg-4 logo-footer mb-3 mt-3 align-center">
          <div class="navbar-brand">
            <h3 className="logo">
              Jakub<span>Skowroński.</span>
            </h3>
          </div>
        </div> */}
        <div class="col-md-4 col-lg-5 copyright mb-3 mt-3">
          <p class="mb-0 text-copyright mbr-fonts-style display-6">
            © {new Date().getFullYear()} {` `}<span className="logo-footer">
              Jakub<span>Skowroński.</span>
            </span> All rights
            reserved
          </p>
        </div>
        {/* <div className="mb-4 pt-5 mbr-fonts-style subtext display-7">
          <div className="social-media col-md-12 col-sm-12">
            <ul className="social-list">
              <li>
                <a
                  className="icon-transition"
                  href="https://www.facebook.com/skowronski.jakub"
                  target="_blank"
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
                >
                  <span className="mbr-iconfont">
                    <FaLinkedin />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </Container>
  </footer>
)
export default Footer
