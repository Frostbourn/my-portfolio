import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"

const AboutLink = props => (
  <li>
    <Link to={props.to} class={props.class}>
      {props.children}
    </Link>
  </li>
)

const About = () => (
  <section id="about" className="about">
    <Container fluid>
      <Row className="align-items-center content-row">
          <Col lg={6} className="wrap-block">
            <h1 className="mbr-section-title mbr-fonts-style mbr-light display-2">
              <strong>KIM JESTEM?</strong>
            </h1>

            <h3 className="mbr-text mbr-fonts-style mbr-light display-7">
              Jestem Freelancerem/Web Developerem i motocyklistą z pasji.
              Zajmuję się tworzeniem nowoczesnych stron internetowych od A do
              Z&nbsp;z wykorzystaniem HTML, CSS, JavaScript, PHP i wielu
              frameworków. Projekty które wdrażam są wysokiej jakości. Duża
              uwagę przywiązuje do szczegółów projektu. Swoją kariere zawodową
              rozpocząłem na stanowisku Joomla! Developera w serwisie{" "}
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
          </Col>
          <Col lg={6} className="photo-split">
            <img
              src="https://jakubskowronski.com/assets/images/header-photo-1400x882.jpg"
              alt=""
              title=""
            />
          </Col>
      </Row>
    </Container>
  </section>
)

export default About
