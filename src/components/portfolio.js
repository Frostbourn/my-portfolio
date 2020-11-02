import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col, Badge } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "./Emoji"

const Portfolio = () => {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank")
    win.focus()
  }

  const data = useStaticQuery(graphql`
    query {
      portfolioOne: file(relativePath: { eq: "postplaner.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioTwo: file(relativePath: { eq: "mltrans.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioThree: file(relativePath: { eq: "lakini.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioFour: file(relativePath: { eq: "rs-car.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioFive: file(relativePath: { eq: "hfb-broker.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioSix: file(relativePath: { eq: "jsns-eu.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section id="portfolio" className="portfolio features8">
      <Fade delay="300" triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>
                LATEST WORK <Emoji symbol="🏆" label="contact" />
              </strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Here are some of my recent works.
            </h3>
          </Col>
          <div className="projects-block card-columns">
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-div"
                  onClick={() =>
                    openRepoinNewTab(
                      "https://github.com/Frostbourn/instagram-widget"
                    )
                  }
                  onKeyDown={() =>
                    openRepoinNewTab(
                      "https://github.com/Frostbourn/instagram-widget"
                    )
                  }
                  role="presentation"
                >
                  <span className="badge badge-success">Open Source</span>
                  <div className="repo-name-div">
                    <svg
                      aria-hidden="true"
                      className="repo-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 12 16"
                      width="14"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                      ></path>
                    </svg>
                    <p className="repo-name">instagram-widget</p>
                  </div>
                  <p className="repo-description">
                    Simple, lightweight & easy-to-use Instagram widget for
                    website. It gives you possibility to display the latest 12
                    photos from your Instagram feed.
                  </p>
                  <div className="repo-stats">
                    <div className="repo-left-stat">
                      <span>
                        <div
                          className="language-color"
                          style={{ backgroundColor: "#F1E05A" }}
                        ></div>
                        <p>JavaScript</p>
                      </span>
                      <span>
                        <svg
                          aria-hidden="true"
                          className="repo-star-svg"
                          height="20"
                          role="img"
                          viewBox="0 0 10 16"
                          width="12"
                          fill="rgb(106, 115, 125)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                          ></path>
                        </svg>
                        <p>3</p>
                      </span>
                      <span>
                        <svg
                          aria-hidden="true"
                          className="repo-star-svg"
                          height="20"
                          role="img"
                          viewBox="0 0 14 16"
                          width="14"
                          fill="rgb(106, 115, 125)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                          ></path>
                        </svg>
                        <p>3</p>
                      </span>
                    </div>
                    <div className="repo-right-stat">
                      <p>68 KB</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card text-white bg-dark mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div className="card-div" role="presentation">
                  <div className="card-review">
                    <blockquote>
                      <q>
                        Working with Jakub is a great great pleasure, apart from
                        being an excellent professional giving smart, fast en
                        nice looking solutions.
                      </q>
                    </blockquote>
                  </div>
                  <div className="card-review-author">
                    <p>
                      <strong>Marcin Leśniak</strong>
                      <br />
                      Owner of ML TRANS
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://postplaner.pl")}
                  onKeyDown={() => openRepoinNewTab("https://postplaner.pl")}
                  role="presentation"
                >
                  {" "}
                  <div className="card-img-top img-fluid-top img-fluid">
                    <Img fluid={data.portfolioOne.childImageSharp.fluid} />
                  </div>
                  <div className="card-div">
                    {/* <Badge variant="warning">Commercial</Badge> */}
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        POST PLANER
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Planner for scheduling posts on popular social media
                        sites.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-div"
                  onClick={() =>
                    openRepoinNewTab(
                      "https://extensions.joomla.org/extension/social-web/social-display/js-like-box-slider/"
                    )
                  }
                  onKeyDown={() =>
                    openRepoinNewTab(
                      "https://extensions.joomla.org/extension/social-web/social-display/js-like-box-slider/"
                    )
                  }
                  role="presentation"
                >
                  <span className="badge badge-success">Open Source</span>
                  <div className="repo-name-div">
                    <svg
                      aria-hidden="true"
                      className="repo-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 12 16"
                      width="14"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                      ></path>
                    </svg>
                    <p className="repo-name">js-facebook-likebox-slider</p>
                  </div>
                  <p className="repo-description">
                    Responsive Joomla! module to display Facebook and Twitter in
                    beautiful box which slides in from page edge in a handy way!
                  </p>
                  <div className="repo-stats">
                    <div className="repo-left-stat">
                      <span>
                        <div
                          className="language-color"
                          style={{ backgroundColor: "#F1E05A" }}
                        ></div>
                        <p>PHP</p>
                      </span>
                      <span>
                        <svg
                          aria-hidden="true"
                          className="repo-star-svg"
                          height="20"
                          role="img"
                          viewBox="0 0 14 16"
                          width="14"
                          fill="rgb(106, 115, 125)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                          ></path>
                        </svg>
                        <p>40</p>
                      </span>
                    </div>
                    <div className="repo-right-stat">
                      <p>165 KB</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://mltrans.eu")}
                  onKeyDown={() => openRepoinNewTab("https://mltrans.eu")}
                  role="presentation"
                >
                  <div className="card-img-top img-fluid-top img-fluid">
                    <Img fluid={data.portfolioTwo.childImageSharp.fluid} />
                  </div>
                  <div className="card-div">
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        ML TRANS
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Transport and logistic company website
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            {/* <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://lakini.pl")}
                  onKeyDown={() => openRepoinNewTab("https://lakini.pl")}
                  role="presentation"
                >
                  <div className="card-div">
                    <div className="card-img-top img-fluid">
                      <Img fluid={data.portfolioThree.childImageSharp.fluid} />
                    </div>
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        LAKINI
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        eCommerce shoes store
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div> */}
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() =>
                    openRepoinNewTab("https://jakubskowronski.com/rscar")
                  }
                  onKeyDown={() =>
                    openRepoinNewTab("https://jakubskowronski.com/rscar")
                  }
                  role="presentation"
                >
                  <div className="card-img-top img-fluid">
                    <Img fluid={data.portfolioFour.childImageSharp.fluid} />
                  </div>
                  <div className="card-div">
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        RS CAR
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Auto body repair and painting shop website
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() =>
                    openRepoinNewTab("https://jakubskowronski.com/hfb")
                  }
                  onKeyDown={() =>
                    openRepoinNewTab("https://jakubskowronski.com/hfb")
                  }
                  role="presentation"
                >
                  <div className="card-img-top img-fluid">
                    <Img fluid={data.portfolioFive.childImageSharp.fluid} />
                  </div>
                  <div className="card-div">
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        HFB BROKER
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Insurance broker company website
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://jsns.eu")}
                  onKeyDown={() => openRepoinNewTab("https://jsns.eu")}
                  role="presentation"
                >
                  <div className="card-img-top img-fluid">
                    <Img fluid={data.portfolioSix.childImageSharp.fluid} />
                  </div>
                  <div className="card-div">
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        JS Soft
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Wordpress & Joomla plugins development
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card text-white bg-primary mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div className="card-div" role="presentation">
                  <div className="card-review">
                    <blockquote>
                      <q>
                        Jakub has been very helpful and did a great job
                        designing the complete branding for my website. He's
                        very professional and made revisions to his designs
                        until I was completely satisfied. Highly recommended!
                      </q>
                    </blockquote>
                  </div>
                  <div className="card-review-author">
                    <p>
                      <strong>Klaudia Giza</strong>
                      <br />
                      Founder of lakini.pl
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card mb-3">
              <Fade bottom duration={1000} distance="20px" triggerOnce>
                <div
                  className="card-div"
                  onClick={() =>
                    openRepoinNewTab(
                      "https://wordpress.org/plugins/responsive-facebook-and-twitter-widget"
                    )
                  }
                  onKeyDown={() =>
                    openRepoinNewTab(
                      "https://wordpress.org/plugins/responsive-facebook-and-twitter-widget"
                    )
                  }
                  role="presentation"
                >
                  <span className="badge badge-success">Open Source</span>
                  <div className="repo-name-div">
                    <svg
                      aria-hidden="true"
                      className="repo-svg"
                      height="20"
                      role="img"
                      viewBox="0 0 12 16"
                      width="14"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                      ></path>
                    </svg>
                    <p className="repo-name">
                      wp-responsive-facebook-and-twitter-widget
                    </p>
                  </div>
                  <p className="repo-description">
                    Responsive Wordpress plugin to display Facebook and Twitter
                    in beautiful box which slides in from page edge in a handy
                    way!
                  </p>
                  <div className="repo-stats">
                    <div className="repo-left-stat">
                      <span>
                        <div
                          className="language-color"
                          style={{ backgroundColor: "#4f5d95" }}
                        ></div>
                        <p>PHP</p>
                      </span>
                      <span>
                        <svg
                          aria-hidden="true"
                          className="repo-star-svg"
                          height="20"
                          role="img"
                          viewBox="0 0 14 16"
                          width="14"
                          fill="rgb(106, 115, 125)"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                          ></path>
                        </svg>
                        <p>Active installations: 200+</p>
                      </span>
                    </div>
                    <div className="repo-right-stat">
                      <p>108 KB</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <Row className="align-center py-5">
            <p className="display-2">
              <strong>Want to see more? Leave me a message!</strong>
            </p>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}

export default Portfolio
