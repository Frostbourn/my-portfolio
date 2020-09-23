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
      </div>
    </Container>
  </footer>
)
export default Footer
