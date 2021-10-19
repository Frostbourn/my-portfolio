import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "../Emoji"
import ReactMarkdown from "react-markdown"

const Portfolio = () => {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank")
    win.focus()
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        nodes {
          coverImage {
            gatsbyImageData
            title
          }
          title
          subtitle
          description {
            internal {
              content
              description
              ignoreType
              mediaType
            }
          }
          url
          isOpenSource
          lang
          favorites
          size
          isReview
          theme
          author
          position
          createdAt
        }
      }
    }
  `)

  const sortNodes = data.allContentfulPortfolio.nodes
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0)
    .reverse()

  return (
    <section id="portfolio" className="portfolio features8">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>
                MY RECENT WORK <Emoji symbol="🏆" label="contact" />
              </strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Here are a few design projects I've worked on recently.
            </h3>
          </Col>

          <div className="projects-block card-columns">
            {sortNodes.map(
              ({
                author,
                coverImage,
                description,
                favorites,
                isOpenSource,
                isReview,
                lang,
                position,
                size,
                subtitle,
                theme,
                title,
                url,
              }) => (
                <Fade bottom distance="40px" triggerOnce>
                  <div className={`card mb-3 ${theme}`}>
                    {coverImage && (
                      <div className="card-img-top img-fluid">
                        <GatsbyImage
                          image={getImage(coverImage?.gatsbyImageData)}
                          alt={coverImage?.title}
                        />
                      </div>
                    )}
                    <div
                      className={`card-${
                        isOpenSource
                          ? "div"
                          : "wrapper" || isReview
                          ? "div"
                          : "wrapper"
                      }`}
                      onClick={() => url && openRepoinNewTab(url)}
                      onKeyDown={() => url && openRepoinNewTab(url)}
                      role="presentation"
                    >
                      {isOpenSource ? (
                        <>
                          <span className="badge badge-success">
                            Open Source
                          </span>
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
                            <p className="repo-name">{title}</p>
                          </div>
                          <p className="repo-description">
                            <ReactMarkdown>
                              {description.internal.content}
                            </ReactMarkdown>
                          </p>
                          <div className="repo-stats">
                            <div className="repo-left-stat">
                              <span>
                                <div
                                  className="language-color"
                                  style={{ backgroundColor: "#F1E05A" }}
                                ></div>
                                <p>{lang}</p>
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
                                <p>{favorites}+</p>
                              </span>
                            </div>
                            <div className="repo-right-stat">
                              <p>{size}KB</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        coverImage && (
                          <div className="card-div">
                            <div className="card-box">
                              <h4 className="mbr-fonts-style mbr-bold align-center display-5 repo-name">
                                {title}
                              </h4>
                              <div className="card-underline align-center">
                                <div className="line"></div>
                              </div>
                              <p className="repo-subtitle align-center">
                                {subtitle}
                              </p>
                              <p className="repo-description align-center">
                                <ReactMarkdown>
                                  {description.internal.content}
                                </ReactMarkdown>
                              </p>
                            </div>
                          </div>
                        )
                      )}
                      {isReview ? (
                        <>
                          <div
                            className="card-review"
                            style={
                              theme === "bg-warning" ? { color: "#000" } : {}
                            }
                          >
                            <blockquote>
                              <q>{description.internal.content}</q>
                            </blockquote>
                          </div>
                          <div
                            className="card-review-author"
                            style={
                              theme === "bg-warning" ? { color: "#000" } : {}
                            }
                          >
                            <p>
                              <strong>{author}</strong>
                              <br />
                              {position}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </Fade>
              )
            )}
          </div>

          <Row className="align-center py-5">
            <p className="display-5">
              <strong>Want to see more? Leave me a message!</strong>
            </p>
          </Row>
        </Container>
      </Fade>
    </section>
  )
}

export default Portfolio
