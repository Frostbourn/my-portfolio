import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { Bounce, Fade } from "react-awesome-reveal"

const HeroLink = props => (
  <Link to={props.to} class={props.className}>
    {props.children}
  </Link>
)

const Hero = () => (
  <section className="hero">
    <Fade triggerOnce delay={1000}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="mbr-section-title pb-3 mbr-fonts-style display-1">
              <strong>Web Developer</strong>
            </h1>
            <p className="mbr-text pb-3 mbr-fonts-style display-5">
              Koduje proste strony i kocham to co robię.
            </p>
            <div className="mbr-section-btn">
              <HeroLink
                className="btn btn-md btn-bgr btn-success display-4"
                to="https://forms.gle/GJ3GfPGWaQhdpoMR9"
                target="_blank"
              >
                WYPEŁNIJ BRIEF
              </HeroLink>
              <a
                class="btn btn-md btn-bgr btn-warning display-4"
                href="#contact"
              >
                KONTAKT
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
    <Fade triggerOnce delay={1500}>
      <div className="scroll"></div>
    </Fade>

      <div className="waves content4">
        <figure className="mbr-figure">
          <div className="image-block">
            <img
              src="https://jakubskowronski.com/assets/images/bg-waves-img.svg"
              width="1400"
              alt="Hero waves"
              title="Hero waves"
            />
          </div>
        </figure>
      </div>
  </section>
)

export default Hero
