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
    <Bounce direction="top" triggerOnce>
      <div className="waves">
        <figure className="mbr-figure">
          <div className="image-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8c43ff" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,186.7C320,160,400,96,480,96C560,96,640,160,720,186.7C800,213,880,203,960,186.7C1040,171,1120,149,1200,144C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          </div>
        </figure>
      </div>
    </Bounce>
  </section>
)

export default Hero
