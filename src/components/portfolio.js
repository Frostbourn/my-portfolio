import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"

const Portfolio = () => {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank")
    win.focus()
  }

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
      githubViewer {
        pinnedItems {
          nodes {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  `)
  return (
    <section id="portfolio" className="portfolio features8">
      <Fade delay="300" triggerOnce>
        <Container>
          <Row className="blog-block justify-content-around">
            <Col md={12}>
              <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
                <strong>LATEST WORK</strong>
              </h2>
              <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
                You can find here some of my latest project. Want to see more?
                Leave me a message!
              </h3>
            </Col>
            <Col md={12}>
              <h2 className="mbr-section-title mbr-fonts-style align-left display-2 py-3">
                <strong>Open Source Projects</strong>
              </h2>
            </Col>
            {data.githubViewer.pinnedItems.nodes.map((repository, i) => (
              <div className="card py-3 col-sm-12 col-md-12 col-lg-12">
                <Fade bottom duration={1000} distance="20px">
                  <div className="card-wrapper">
                    <div
                      className="repo-card-div"
                      key={repository.id}
                      onClick={() => openRepoinNewTab(repository.url)}
                    >
                      <div className="repo-name-div">
                        <svg
                          aria-hidden="true"
                          className="octicon"
                          height="20"
                          role="img"
                          viewBox="0 0 12 16"
                          width="14"
                          className="repo-svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                          ></path>
                        </svg>
                        <p className="repo-name">{repository.name}</p>
                      </div>
                      <p className="repo-description">
                        {repository.description}
                      </p>
                      <div className="repo-stats">
                        <div className="repo-left-stat">
                          <span>
                            <div
                              className="language-color"
                              style={{
                                backgroundColor:
                                  repository.primaryLanguage.color,
                              }}
                            ></div>
                            <p>{repository.primaryLanguage.name}</p>
                          </span>
                          <span>
                            <svg
                              aria-hidden="true"
                              className="octicon"
                              height="20"
                              role="img"
                              viewBox="0 0 10 16"
                              width="12"
                              fill="rgb(106, 115, 125)"
                              className="repo-star-svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                              ></path>
                            </svg>
                            <p>{repository.forkCount}</p>
                          </span>
                          <span>
                            <svg
                              aria-hidden="true"
                              className="octicon"
                              height="20"
                              role="img"
                              viewBox="0 0 14 16"
                              width="14"
                              fill="rgb(106, 115, 125)"
                              className="repo-star-svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                              ></path>
                            </svg>
                            <p>{repository.stargazers.totalCount}</p>
                          </span>
                        </div>
                        <div className="repo-right-stat">
                          <p>{repository.diskUsage} KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}

            <Col md={12}>
              <h2 className="mbr-section-title mbr-fonts-style align-left display-2 py-3">
                <strong>Commercial Projects</strong>
              </h2>
            </Col>
            <div className="card py-3 col-sm-12 col-md-6 col-lg-4">
              <Fade bottom duration={1000} distance="20px">
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://postplaner.pl")}
                >
                  <div className="repo-card-div">
                    <div className="card-img">
                      <Img fluid={data.portfolioOne.childImageSharp.fluid} />
                    </div>
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        POST PLANER
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Social media post planner
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card py-3 col-sm-12 col-md-6 col-lg-4">
              <Fade bottom duration={1000} distance="20px">
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://mltrans.eu")}
                >
                  <div className="repo-card-div">
                    <div className="card-img">
                      <Img fluid={data.portfolioTwo.childImageSharp.fluid} />
                    </div>
                    <div className="card-box">
                      <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                        ML TRANS
                      </h4>
                      <div className="card-underline align-center">
                        <div className="line"></div>
                      </div>
                      <p className="align-center repo-description">
                        Strona firmy transportowej
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card py-3 col-sm-12 col-md-6 col-lg-4">
              <Fade bottom duration={1000} distance="20px">
                <div
                  className="card-wrapper"
                  onClick={() => openRepoinNewTab("https://lakini.pl")}
                >
                  <div className="repo-card-div">
                    <div className="card-img">
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
                        Sklep z obuwiem
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="card py-3 col-sm-12 col-md-6 col-lg-4">
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
                    rel="noreferrer"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>

            <div className="card py-3 col-sm-12 col-md-6 col-lg-4">
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
                    target="_blank"
                    rel="noreferrer"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
            <div className="card py-3 col-sm-12 col-md-6 col-lg-4">
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
                    rel="noreferrer"
                  >
                    ODWIEDŹ STRONĘ
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}

export default Portfolio
