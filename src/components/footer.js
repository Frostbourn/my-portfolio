import React from "react"
import { Container, Row, Col, Alert } from "react-bootstrap"

const Footer = () => (
<footer>
        <Container>
          <div class="media-container-row">
            <div class="col-md-4 col-lg-4 logo-footer mb-3 mt-3 align-center">
              <div class="navbar-brand">
                <h3 className="logo">
                  Jakub<span>Skowroński.</span>
                </h3>
              </div>
            </div>
            <div class="col-md-4 col-lg-5 copyright mb-3 mt-3">
              <p class="mb-0 text-copyright mbr-fonts-style display-6">
                © {new Date().getFullYear()} {` `}jakubskowronski.com. All
                rights reserved
              </p>
            </div>
            <div class="social-list pl-0 mb-0 col-md-4 col-lg-3 align-center social-btns mb-3 mt-3">
                    <a href="https://www.facebook.com/skowronski.jakub" target="_blank">
                        <span class="px-3 mbr-iconfont mbr-iconfont-social socicon-facebook socicon"></span>
                    </a>
                    <a href="https://github.com/Frostbourn?tab=repositories" target="_blank">
                        <span class="px-3 mbr-iconfont mbr-iconfont-social socicon-github socicon"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/jakubskowronki" target="_blank">
                        <span class="px-3 mbr-iconfont mbr-iconfont-social socicon-linkedin socicon"></span>
                    </a>
                    <a href="https://www.youtube.com/c/mobirise" target="_blank">

                    </a>
                    <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">

                    </a>
                    <a href="https://www.behance.net/Mobirise" target="_blank">

                    </a>
                </div>
          </div>
        </Container>
      </footer>
)
export default Footer