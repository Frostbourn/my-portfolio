import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "./emoji"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutPhoto: file(relativePath: { eq: "about-photo-square.png" }) {
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
            <Col lg={6} md={6} sm={10} xs={10} className="photo-split">
              <Fade direction="left" triggerOnce>
                <Img
                  fluid={data.aboutPhoto.childImageSharp.fluid}
                  style={{
                    margin: "0 auto",
                  }}
                />
              </Fade>
            </Col>
            <Col lg={6} md={6} sm={10} xs={10} className="wrap-block">
              <Fade direction="right" triggerOnce>
                <div className="mbr-section-title mbr-fonts-style mbr-light display-2">
                  <strong>
                    A bit about me <Emoji symbol="👋" label="smile" />
                  </strong>
                </div>
                <div className="mbr-text mbr-fonts-style mbr-light display-7">
                  I am a freelance Web Developer with many years of experience
                  creating simple and modern designs from scratch using
                  top-notch technology. I put in my best effort to create a
                  better platform for clients, websites that are user-oriented,
                  accessible, and with fast loading speed. Whatever your
                  business requirement is, I’m dedicated to using my years of
                  experience to pick the right tools and processes in order to
                  create a design that suits your specific requirement. I
                  recognize that creating a modern website entails combining
                  design, server technology, and the platform that visitors and
                  users interact with. I am also available to join your team,
                  and I'm willing to work efficiently and thoroughly with your
                  in-house team.
                </div>
                <a
                  className="btn btn-md btn-bgr py-3 btn-white display-4"
                  href="CV_Jakub_Skowronski.pdf"
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
