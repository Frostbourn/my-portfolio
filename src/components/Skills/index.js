import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"

const SkillSet = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSkills {
        nodes {
          createdAt
          title
          imageUrl
          order
        }
      }
    }
  `)

  const sortNodes = data.allContentfulSkills.nodes
    .sort((a, b) => new Date(b.order) - new Date(a.order))
    .slice(0)
    .reverse()

  return (
    <section id="skills" className="skills">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>Skills & Tools</strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              For those who know what they’re looking for..
            </h3>
          </Col>
          <Col md={12} className="skill-list">
            <ul>
              {sortNodes.map(({ title, imageUrl }) => (
                <li className="p-4 m-2">
                  <div>
                    <img src={imageUrl} width="40" alt={title} />
                    <span>{title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Container>
      </Fade>
    </section>
  )
}
export default SkillSet
