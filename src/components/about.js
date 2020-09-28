import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "./Emoji"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutPhoto: file(relativePath: { eq: "about-photo-square.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
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
        <Container fluid>
          <Row className="align-items-center content-row">
            {/* <Parallax x={[-5, 5]} styleInner={{"display" : "flex", "align-items" : "center", "justify-content" : "center"}}> */}
            <Col lg={7} className="wrap-block pl-4">
              <Fade direction="left" triggerOnce>
                <h1 className="mbr-section-title mbr-fonts-style mbr-light display-2">
                  <strong>
                    Who am I? <Emoji symbol="🤓" label="smile" />
                  </strong>
                </h1>

                <h3 className="mbr-text mbr-fonts-style mbr-light display-7">
                  Jestem Freelancerem/Web Developerem i motocyklistą z pasji.
                  Zajmuję się tworzeniem nowoczesnych stron internetowych od A
                  do Z&nbsp;z wykorzystaniem HTML, CSS, JavaScript, PHP i wielu
                  frameworków. Projekty które wdrażam są wysokiej jakości. Duża
                  uwagę przywiązuje do szczegółów projektu. Swoją kariere
                  zawodową rozpocząłem na stanowisku Joomla! Developera w
                  serwisie{" "}
                  <a
                    href="https://www.facebook.com/androidappspl"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    androidapps.pl
                  </a>
                  . W 2013 roku otworzyłem własną stronę -{" "}
                  <a
                    href="https://jsns.eu"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    jsns.eu
                  </a>
                  , opartą o Joomla!, gdzie oferuję moje usługi oraz wtyczki do
                  tegoż CMS'u.
                </h3>
              </Fade>
            </Col>
            <Col lg={5} className="photo-split">
              <Fade direction="right" triggerOnce>
                <Img
                  fluid={data.aboutPhoto.childImageSharp.fluid}
                  style={{
                    margin: "0 auto", // Used to center the image
                  }}
                />
              </Fade>
            </Col>
            {/* </Parallax> */}
          </Row>
        </Container>
      </section>
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
    </>
  )
}

export default About
