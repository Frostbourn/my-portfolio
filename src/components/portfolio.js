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
        <Container></Container>
      </Fade>
    </section>
  )
}

export default Portfolio
