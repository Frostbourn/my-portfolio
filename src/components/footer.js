import React from "react"
import { Container } from "react-bootstrap"
import Emoji from "./Emoji"

const Footer = () => (
  <footer>
    <Container>
      <div className="media-container-row">
        <div className="col-md-6 col-lg-6 mb-3 mt-3 align-center">
          
            <div className="mb-0 text-copyright mbr-fonts-style">
            Made with <Emoji symbol="❤️" label="heart"/> by Jakub Skowronski
          </div>
        </div>
        <div className="col-6 copyright mb-3 mt-3 align-center">
        © {new Date().getFullYear()} {` `}<span className="logo-footer">Jakub<span>Skowronski.</span></span>
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
