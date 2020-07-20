import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import { Fade, Slide } from "react-awesome-reveal"

const PortfolioLink = props => (
  <li>
    <Link to={props.to} className={props.class}>
      {props.children}
    </Link>
  </li>
)

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolioOne: file(relativePath: { eq: "postplaner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioTwo: file(relativePath: { eq: "mltrans.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioThree: file(relativePath: { eq: "lakini.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioFour: file(relativePath: { eq: "rs-car.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioFive: file(relativePath: { eq: "hfb-broker.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioSix: file(relativePath: { eq: "jsns-eu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Fade triggerOnce>
      <section id="portfolio" className="portfolio features8">
      <div className="animation__background">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
    </div>
        <Container>
          <Row className="blog-block justify-content-around">
            <Col md={12}>
              <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
                <strong>OSTATNIE PRACE</strong>
              </h2>
              <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
                Tutaj znajdziesz kilka ostatnich projektów. Chcesz zobaczyć
                więcej? Napisz do mnie.
              </h3>
            </Col>
            <div className="card py-3 col-12 col-md-6 col-lg-4">
              <div className="card-wrapper">
                <div className="card-img">
                  <Img fluid={data.portfolioOne.childImageSharp.fluid} />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                    POST PLANER
                  </h4>
                  <div className="card-underline align-center">
                    <div className="line"></div>
                  </div>
                  <p className="mbr-text mbr-fonts-style align-center display-7">
                    Planer postów
                  </p>
                </div>
                <div className="mbr-section-btn align-center">
                  <a
                    href="https://postplaner.pl"
                    className="btn btn-success display-4"
                    target="_blank"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
            <div className="card py-3 col-12 col-md-6 col-lg-4">
              <div className="card-wrapper">
                <div className="card-img">
                  <Img fluid={data.portfolioTwo.childImageSharp.fluid} />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                    ML TRANS
                  </h4>
                  <div className="card-underline align-center">
                    <div className="line"></div>
                  </div>
                  <p className="mbr-text mbr-fonts-style align-center display-7">
                    Strona firmy transportowej
                  </p>
                </div>
                <div className="mbr-section-btn align-center">
                  <a
                    href="https://mltrans.eu"
                    className="btn btn-success display-4"
                    target="_blank"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
            <div className="card py-3 col-12 col-md-6 col-lg-4">
              <div className="card-wrapper">
                <div className="card-img">
                  <Img fluid={data.portfolioThree.childImageSharp.fluid} />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                    LAKINI
                  </h4>
                  <div className="card-underline align-center">
                    <div className="line"></div>
                  </div>
                  <p className="mbr-text mbr-fonts-style align-center display-7">
                    Sklep z obuwiem
                  </p>
                </div>
                <div className="mbr-section-btn align-center">
                  <a
                    href="https://lakini.pl"
                    className="btn btn-success display-4"
                    target="_blank"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
            <div className="card py-3 col-12 col-md-6 col-lg-4">
              <div className="card-wrapper">
                <div className="card-img">
                  <Img fluid={data.portfolioFour.childImageSharp.fluid} />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                    RS CAR
                  </h4>
                  <div className="card-underline align-center">
                    <div className="line"></div>
                  </div>
                  <p className="mbr-text mbr-fonts-style align-center display-7">
                    Wizytówka lakierni samochodowej
                  </p>
                </div>
                <div className="mbr-section-btn align-center">
                  <a
                    href="https://jakubskowronski.com/rscar"
                    className="btn btn-success display-4"
                    target="_blank"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>

            <div className="card py-3 col-12 col-md-6 col-lg-4">
              <div className="card-wrapper">
                <div className="card-img">
                  <Img fluid={data.portfolioFive.childImageSharp.fluid} />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                    HFB BROKER
                  </h4>
                  <div className="card-underline align-center">
                    <div className="line"></div>
                  </div>
                  <p className="mbr-text mbr-fonts-style align-center display-7">
                    Strona brokera ubezpieczeń
                  </p>
                </div>
                <div className="mbr-section-btn align-center">
                  <a
                    href="https://jakubskowronski.com/hfb"
                    className="btn btn-success display-4"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
            <div className="card py-3 col-12 col-md-6 col-lg-4">
              <div className="card-wrapper">
                <div className="card-img">
                  <Img fluid={data.portfolioSix.childImageSharp.fluid} />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mbr-bold align-center display-5">
                    JS Soft
                  </h4>
                  <div className="card-underline align-center">
                    <div className="line"></div>
                  </div>
                  <p className="mbr-text mbr-fonts-style align-center display-7">
                    Rozszerzenia do CMS Joomla!
                  </p>
                </div>
                <div className="mbr-section-btn align-center">
                  <a
                    href="https://jsns.eu"
                    className="btn btn-success display-4"
                    target="_blank"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </Fade>
  )
}

export default Portfolio
