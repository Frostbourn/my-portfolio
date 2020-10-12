import React, { useState, useEffect } from "react"

import { Container, Row, Col } from "react-bootstrap"
import { Bounce, Fade, Spin } from "react-awesome-reveal"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../images/svgs/hero-image-coding.svg"
import Emoji from "./Emoji"
import Typical from "react-typical"

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

  const data = useStaticQuery(graphql`
    query {
      aboutPhoto: file(relativePath: { eq: "about-photo-square.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <>
      <Fade triggerOnce>
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
          <Fade delay="500" triggerOnce>
            <Container fluid>
              <Row className="align-items-center content-row row hero-margin">
                <Col lg={12} className="hero-text">
                  <p className="mbr-text mbr-fonts-style display-6">
                    Hi there, I'm Jakub{" "}
                    <Emoji
                      class="hero-emoji-animation"
                      symbol="👋"
                      label="hello"
                    />
                    <br />
                  </p>
                  <h1 className="mbr-section-title pb-3 mbr-fonts-style display-1">
                    <strong>
                      <Typical
                        className="hero-cursor"
                        steps={[
                          "Frontend Developer",
                          1500,
                          "Programmer",
                          1500,
                          "Wordpress Developer",
                          1500,
                          "Joomla! Developer",
                          1500,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                      />
                    </strong>
                  </h1>
                  <p className="mbr-text pb-3 pl-2 mbr-fonts-style display-5">
                    I code simple websites and I love it!{" "}
                  </p>
                  <div className="mbr-section-btn">
                    <Bounce delay="800" triggerOnce>
                      <Bounce cascade delay="1800" damping="1" triggerOnce>
                        <a
                          className="btn btn-md btn-bgr btn-success display-4"
                          href="#about"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Hire me
                        </a>
                        {/* <a
                          className="btn btn-md btn-bgr btn-warning display-4"
                          href="#contact"
                        >
                          Contact me
                        </a> */}
                      </Bounce>
                    </Bounce>
                  </div>
                </Col>
                {/* <Col lg={6} className="hero-svg">
                  <Fade delay="1000" triggerOnce>
                    <Image />
                  </Fade>
                </Col> */}

                {/* <Col lg={5} md={8} sm={8} xs={8} className="photo-split">
                  <Fade direction="right" triggerOnce>
                    <Img
                      fluid={data.aboutPhoto.childImageSharp.fluid}
                      style={{
                        margin: "0 auto", // Used to center the image
                      }}
                    />
                  </Fade>
                </Col> */}
              </Row>
            </Container>
          </Fade>
          {/* <Col className="hero-container">
            <Fade delay="1000" triggerOnce>
              <div className="hero-shape"></div>
            </Fade>
          </Col> */}
          <Bounce delay="1500" triggerOnce>
            <div className={`${state ? "hidden" : ""}` + " scroll"}></div>
          </Bounce>
          <div className="waves">
            <svg
              className="wave-img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#4528DC"
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
                fill="#4528DC"
                fillOpacity="0.7"
                d="M0,32L24,53.3C48,75,96,117,144,149.3C192,181,240,203,288,197.3C336,192,384,160,432,170.7C480,181,528,235,576,240C624,245,672,203,720,160C768,117,816,75,864,74.7C912,75,960,117,1008,138.7C1056,160,1104,160,1152,138.7C1200,117,1248,75,1296,80C1344,85,1392,139,1416,165.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
              ></path>
            </svg>{" "}
          </div>
        </section>
      </Fade>
    </>
  )
}
export default Hero
