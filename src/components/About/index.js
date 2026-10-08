import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "../Emoji"

const description = `I'm a **software engineer**. I build web applications and the systems around them: custom CMS platforms, paywalls, integrations, and workflow automations.

For the past few years that has meant production work on nationwide publishing sites and product stores, and AI workflows with n8n and LLMs. I use React and Next.js when the interface has to stay fast, and automation when a team is still doing the same work by hand.

I join in-house teams and stay with a product from the first version through to something people can rely on.`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        nodes {
          image {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const image = data.allContentfulAboutMe.nodes[0].image.gatsbyImageData

  return (
    <>
      <section id="about" className="about">
        <div className="about-shapes"></div>
        <Container fluid>
          <Row className="container align-items-center content-row m-auto px-lg-5">
            <Col lg={6} md={6} sm={10} xs={10} className="photo-split">
              <Fade direction="left" triggerOnce>
                <GatsbyImage
                  image={getImage(image)}
                  alt="Profile Photo"
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
                  <ReactMarkdown>{description}</ReactMarkdown>
                </div>
                <a
                  className="btn btn-md btn-bgr py-3 btn-white display-4"
                  href="#services"
                >
                  What I do
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
