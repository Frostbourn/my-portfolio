import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"

const blurb = (description, subtitle) => {
  if (subtitle) return subtitle
  const raw = description?.internal?.content || ""
  const line = raw.replace(/[#*_>`]/g, "").replace(/\s+/g, " ").trim()
  return line.length > 180 ? `${line.slice(0, 177)}…` : line
}

const Portfolio = () => {
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
            }
          }
          url
          isOpenSource
          order
          isReview
          theme
          author
          position
        }
      }
    }
  `)

  const sortNodes = data.allContentfulPortfolio.nodes
    .sort((a, b) => new Date(b.order) - new Date(a.order))
    .reverse()
  const projects = sortNodes.filter((node) => !node.isReview)
  const reviews = sortNodes.filter((node) => node.isReview)

  return (
    <section id="portfolio" className="portfolio work-refresh">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>Work</strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              A few recent projects.
            </h3>
          </Col>

          <div className="work-grid">
            {projects.map((project, index) => {
              const image = getImage(project.coverImage?.gatsbyImageData)
              const Tag = project.url ? "a" : "div"
              return (
                <Fade key={project.title} className="reveal-fill" direction="up" triggerOnce delay={index * 80}>
                  <Tag
                    className="work-card glass-card"
                    href={project.url || undefined}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noreferrer" : undefined}
                  >
                    {image && (
                      <div className="work-card-media">
                        <GatsbyImage image={image} alt={project.coverImage.title || project.title} />
                      </div>
                    )}
                    <div className="work-card-body">
                      {project.isOpenSource && <span className="work-badge">Open source</span>}
                      <h3>{project.title}</h3>
                      <p>{blurb(project.description, project.subtitle)}</p>
                    </div>
                  </Tag>
                </Fade>
              )
            })}
          </div>

          {reviews.length > 0 && (
            <>
              <h2 className="mbr-section-title mbr-fonts-style align-center display-2 work-reviews-title">
                <strong>What clients say</strong>
              </h2>
              <div className="review-grid">
                {reviews.map((review, index) => (
                  <Fade key={review.author || review.title} className="reveal-fill" direction="up" triggerOnce delay={index * 80}>
                    <blockquote
                      className={`review-card glass-card ${review.theme || ""}`}
                    >
                      <p>{review.description?.internal?.content}</p>
                      <footer>
                        <strong>{review.author}</strong>
                        {review.position && <span>{review.position}</span>}
                      </footer>
                    </blockquote>
                  </Fade>
                ))}
              </div>
            </>
          )}
        </Container>
      </Fade>
    </section>
  )
}

export default Portfolio
