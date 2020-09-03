import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { Bounce, Fade } from "react-awesome-reveal"
import Image from "../images/svgs/hero-image-fourth.svg";

const Hero = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== state.scrolled) {
        setState(isScrolled)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [state, setState])

  return (
    <section className="hero">
      <Fade delay="500" triggerOnce>
        <div className="animation_background">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
        </div>
      </Fade>
      <Fade delay="1000" triggerOnce>
        <Container fluid>
          <Row className="align-items-center content-row row">
            <Col md={6} className="hero-text">
              <h1 className="mbr-section-title pb-3 mbr-fonts-style display-1">
                <strong>Web Developer</strong>
              </h1>
              <p className="mbr-text pb-3 pl-2 mbr-fonts-style display-5">
                I code simple websites and I love it! 🚀
              </p>
              <div className="mbr-section-btn">
                <a
                  className="btn btn-md btn-bgr btn-success display-4"
                  href="https://forms.gle/GJ3GfPGWaQhdpoMR9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
                <Link
                  className="btn btn-md btn-bgr btn-warning display-4"
                  to="#contact"
                >
                  Contact me
                </Link>
              </div>
            </Col>
            <Col md={6} className="hero-svg">
              <Image />
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade delay="1500" triggerOnce>
        <div className={`${state ? "hidden" : ""}` + " scroll"}></div>
      </Fade>
      <Bounce direction="top" triggerOnce>
        <div className="waves">
          <figure className="mbr-figure">
            <div className="image-block">
              <svg
                className="wave-img"
                style={{ position: "absolute" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#8c43ff"
                  fillOpacity="1"
                  d="M0,192L40,197.3C80,203,160,213,240,186.7C320,160,400,96,480,96C560,96,640,160,720,186.7C800,213,880,203,960,186.7C1040,171,1120,149,1200,144C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
              <svg
                className="wave-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#8c43ff"
                  fillOpacity="0.7"
                  d="M0,32L24,53.3C48,75,96,117,144,149.3C192,181,240,203,288,197.3C336,192,384,160,432,170.7C480,181,528,235,576,240C624,245,672,203,720,160C768,117,816,75,864,74.7C912,75,960,117,1008,138.7C1056,160,1104,160,1152,138.7C1200,117,1248,75,1296,80C1344,85,1392,139,1416,165.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                ></path>
              </svg>{" "}
            </div>
          </figure>
        </div>
      </Bounce>
    </section>
  )
}
export default Hero
