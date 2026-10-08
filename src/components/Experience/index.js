import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { FaCode, FaRobot, FaPlug, FaProjectDiagram, FaDownload } from "react-icons/fa"

const offers = [
  {
    icon: FaCode,
    title: "Software engineering",
    text: "I design, build, and maintain websites and web applications — React, Next.js, and TypeScript — from product sites and stores to custom CMS platforms.",
  },
  {
    icon: FaRobot,
    title: "AI systems & apps",
    text: "I build AI systems and applications — internal tools and product features on top of LLMs.",
  },
  {
    icon: FaPlug,
    title: "Integrations",
    text: "I connect sites, payments, and content systems so teams stop moving data by hand.",
  },
  {
    icon: FaProjectDiagram,
    title: "Workflow automation",
    text: "I automate operational workflows with n8n, LLMs, and Open WebUI.",
  },
]

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { file: { contentType: { eq: "application/pdf" } } }) {
        nodes {
          title
          file {
            url
            fileName
          }
        }
      }
    }
  `)

  const pdfs = data.allContentfulAsset.nodes
  const cv =
    pdfs.find(
      (node) =>
        /cv/i.test(node.file?.fileName || "") || /cv/i.test(node.title || "")
    ) || (pdfs.length === 1 ? pdfs[0] : null)
  const cvUrl = cv?.file?.url
    ? cv.file.url.startsWith("//")
      ? `https:${cv.file.url}`
      : cv.file.url
    : null

  return (
    <section id="services" className="experience">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>What I do</strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Software engineering, AI systems, integrations, and automation
            </h3>
          </Col>

          <div className="offer-grid">
            {offers.map(({ icon: Icon, title, text }) => (
              <div key={title} className="offer-card glass-card">
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="now-card glass-card">
            <p className="now-label">Currently</p>
            <h3>Software Developer · Gremi Media SA</h3>
            <p className="now-meta">Jun 2022 — Present · Warsaw, remote</p>
            <ul>
              <li>rp.pl, parkiet.com, and the czytaj.* product stores</li>
              <li>Paywall, regwall, and a CMS for marketing landing pages</li>
              <li>Workflow automations and integrations with n8n and LLMs</li>
            </ul>
            {cvUrl && (
              <a className="cv-link" href={cvUrl}>
                <FaDownload aria-hidden="true" />
                Download CV (PDF)
              </a>
            )}
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Experience
