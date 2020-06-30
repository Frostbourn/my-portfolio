import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Container, Row, Col } from "react-bootstrap"

const HeroLink = props => (
  <li>
    <Link to={props.to} class={props.class}>
      {props.children}
    </Link>
  </li>
)

const Hero = ({ siteTitle }) => (
  <section className="hero">
    {/* <HeroLink to="#">Wylij brief</HeroLink> */}
    {/* <img src="https://jakubskowronski.com/assets/images/bg-waves-img.svg" /> */}
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 class="mbr-section-title pb-3 mbr-fonts-style display-1">
            <strong>Web Developer</strong>
          </h1>
          <p class="mbr-text pb-3 mbr-fonts-style display-5">
            Koduje proste strony i kocham to co robię.
          </p>
          <div class="mbr-section-btn">
            <a
              class="btn btn-md btn-bgr btn-success display-4"
              href="https://forms.gle/GJ3GfPGWaQhdpoMR9"
              target="_blank"
            >
              WYPEŁNIJ BRIEF
            </a>
            <a
              class="btn btn-md btn-bgr btn-warning display-4"
              href="index.html#form2-12"
              target="_blank"
            >
              KONTAKT
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    
  <div className="waves content4">
    <figure class="mbr-figure">
            <div class="image-block">
                <img src="https://jakubskowronski.com/assets/images/bg-waves-img.svg" width="1400" alt="" title="" />
            </div>
        </figure>
  </div>
  </section>
)

export default Hero
