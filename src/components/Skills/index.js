import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import Emoji from "../Emoji"

// Category configuration - emoji and display order
const categoryConfig = {
  "AI & Automation": { emoji: "🤖", order: 1 },
  "DevOps": { emoji: "🚀", order: 2 },
  "Development": { emoji: "💻", order: 3 },
  "CMS & E-commerce": { emoji: "🛒", order: 4 },
}

const SkillSet = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSkills {
        nodes {
          createdAt
          title
          imageUrl
          image {
            file {
              url
            }
          }
          order
          category
        }
      }
    }
  `)

  // Group skills by category
  const skillsByCategory = data.allContentfulSkills.nodes.reduce((acc, skill) => {
    const category = skill.category || "Other"
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {})

  // Sort skills within each category
  Object.keys(skillsByCategory).forEach(category => {
    skillsByCategory[category].sort((a, b) => (a.order || 0) - (b.order || 0))
  })

  // Sort categories by their configured order
  const sortedCategories = Object.keys(skillsByCategory).sort((a, b) => {
    const orderA = categoryConfig[a]?.order || 99
    const orderB = categoryConfig[b]?.order || 99
    return orderA - orderB
  })

  return (
    <section id="skills" className="skills">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>Skills & Tools</strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              For those who know what they're looking for..
            </h3>
          </Col>

          {sortedCategories.map((category, catIndex) => (
            <div key={category} className={`skills-category ${category.toLowerCase().replace(/[^a-z]/g, '-')}-skills`}>
              <h4 className="category-title align-center">
                <Emoji symbol={categoryConfig[category]?.emoji || "🔧"} label={category} /> {category}
              </h4>
              <Col md={12} className="skill-list">
                <ul>
                  {skillsByCategory[category].map(({ title, imageUrl, image }, index) => {
                    let iconSrc = imageUrl || image?.file?.url
                    // Ensure HTTPS for Contentful images
                    if (iconSrc && iconSrc.startsWith('//')) {
                      iconSrc = 'https:' + iconSrc
                    }
                    return (
                      <Fade key={index} direction="up" triggerOnce delay={index * 30}>
                        <li className="p-4 m-2">
                          <div>
                            {iconSrc ? (
                              <img src={iconSrc} width="40" height="40" alt={title} loading="lazy" />
                            ) : (
                              <span className="skill-icon">⚡</span>
                            )}
                            <span>{title}</span>
                          </div>
                        </li>
                      </Fade>
                    )
                  })}
                </ul>
              </Col>
            </div>
          ))}
        </Container>
      </Fade>
    </section>
  )
}

export default SkillSet
