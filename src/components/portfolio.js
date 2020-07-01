import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

const PortfolioLink = props => (
  <li>
    <Link to={props.to} class={props.class}>
      {props.children}
    </Link>
  </li>
)

const Portfolio = () => (
  <section className="portfolio features8">
    <Container fluid>
      <Row className="blog-block">
        <Col md={12}>
          <h2 class="mbr-section-title mbr-fonts-style align-center display-2">
            <strong>OSTATNIE PRACE</strong>
          </h2>
          <h3 class="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Tutajznajdziesz kilka ostatnich projektów. Chcesz zobaczyć więcej? Napisz do mnie.
          </h3>
        </Col>
        <Col lg={6} className="photo-split">
            <img src="https://jakubskowronski.com/assets/images/header-photo-1400x882.jpg" alt="" title="" />
        </Col>
      </Row>
    </Container>
  </section>
)

export default Portfolio
