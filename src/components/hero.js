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
          <Container fluid>
            <Row className="align-items-center content-row row hero-margin">
              <Col lg={12} className="hero-text">
                <Fade delay="500" direction="top" triggerOnce>
                  <p className="hero-text--main mbr-text mbr-fonts-style display-5">
                    Hi there <br /> I'm Jakub{" "}
                    {/* <Emoji
                      class="hero-emoji-animation"
                      symbol="👋"
                      label="hello"
                    />
                    <br /> */}
                  </p>
                </Fade>
                <Fade delay="700" direction="top" triggerOnce>
                  <h1 className="mbr-section-title mbr-fonts-style display-1">
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
                </Fade>

                {/* <Fade delay="900" direction="top" triggerOnce>
                  <p className="mbr-text pb-3 pl-2 mbr-fonts-style display-5">
                    I code simple websites and I love it!{" "}
                    <Emoji symbol="🚀" label="rocket" />
                  </p>
                </Fade> */}
                <div className="mbr-section-btn">
                  <Bounce delay="1500" triggerOnce>
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
          {/* <Col className="hero-container">
            <Fade delay="1000" triggerOnce>
              <div className="hero-shape"></div>
            </Fade>
          </Col> */}
          <Fade delay="1800" triggerOnce>
            <div className={`${state ? "hidden" : ""}` + " scroll"}></div>
          </Fade>
          <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#4528DC"
                fill-opacity="1"
                d="M0,128L26.7,106.7C53.3,85,107,43,160,48C213.3,53,267,107,320,138.7C373.3,171,427,181,480,170.7C533.3,160,587,128,640,117.3C693.3,107,747,117,800,138.7C853.3,160,907,192,960,197.3C1013.3,203,1067,181,1120,170.7C1173.3,160,1227,160,1280,149.3C1333.3,139,1387,117,1413,106.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#4528DC"
                fill-opacity="0.7"
                d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,197.3C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>{" "}
          </div>
        </section>
      </Fade>
    </>
  )
}
export default Hero
