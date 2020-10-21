import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "./Emoji"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutPhoto: file(relativePath: { eq: "about-photo-square.webp" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <>
      <section id="about" className="about">
        <div className="about-shapes"></div>
        <Container fluid>
          <Row className="container align-items-center content-row m-auto px-lg-5">
            <Col lg={6} md={6} sm={8} xs={8} className="photo-split">
              <Fade direction="left" triggerOnce>
                <Img
                  fluid={data.aboutPhoto.childImageSharp.fluid}
                  style={{
                    margin: "0 auto", // Used to center the image
                  }}
                />
              </Fade>
            </Col>
            <Col lg={5} md={5} sm={10} xs={10} className="wrap-block">
              <Fade direction="right" triggerOnce>
                <div className="mbr-section-title mbr-fonts-style mbr-light display-2">
                  <strong>
                    A bit about me <Emoji symbol="🤓" label="smile" />
                  </strong>
                </div>
                <div className="mbr-text mbr-fonts-style mbr-light display-7">
                  I am a Freelancer/Web Developer and passionate motorcyclist. I
                  create simple and modern designs from scratch using latest
                  technogies. HTML, CSS, JS, building small and medium web apps
                  with React/GatsbyJS, custom plugins, animations and
                  interactive layouts. <br />I have also full-stack developer
                  experience with open souce CMS like WordPress, Joomla!,
                  Prestashop and other.
                </div>
                <a
                  className="btn btn-md btn-bgr py-3 btn-white display-4"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </Fade>
            </Col>
          </Row>
        </Container>
        <svg
          className="bottom-wave-img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#8c43ff"
            fillOpacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,176C840,160,960,160,1080,170.7C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  )
}

export default About
