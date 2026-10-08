import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { FaCertificate, FaGraduationCap, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa"
import Emoji from "../Emoji"

const Certifications = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCertifications {
        nodes {
          title
          issuer
          issueDate
          type
          featured
          order
          link
        }
      }
    }
  `)

  const sortedCerts = data.allContentfulCertifications.nodes
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  const certifications = sortedCerts.filter(c => c.type === "certification")
  const education = sortedCerts.filter(c => c.type === "education")

  const isPdfLink = (url) => url && url.toLowerCase().endsWith('.pdf')

  return (
    <section id="certifications" className="certifications">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>
                Certifications & Education <Emoji symbol="🎓" label="education" />
              </strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              Continuous learning and professional development
            </h3>
          </Col>

          <Row className="cert-grid">
            {certifications.map((cert, index) => (
              <Col lg={6} md={6} sm={12} key={index}>
                <Fade direction="up" triggerOnce delay={index * 100}>
                  <div className={`cert-card glass-card ${cert.featured ? "featured" : ""}`}>
                    <div className="cert-icon">
                      <FaCertificate />
                    </div>
                    <div className="cert-content">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-date">Issued {cert.issueDate}</p>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          {isPdfLink(cert.link) ? (
                            <><FaFilePdf /> View Certificate</>
                          ) : (
                            <><FaExternalLinkAlt /> Show Credential</>
                          )}
                        </a>
                      )}
                    </div>
                    {cert.featured && (
                      <div className="cert-badge">
                        <span>AI</span>
                      </div>
                    )}
                  </div>
                </Fade>
              </Col>
            ))}

            {education.map((edu, index) => (
              <Col lg={6} md={6} sm={12} key={`edu-${index}`}>
                <Fade direction="up" triggerOnce delay={(certifications.length + index) * 100}>
                  <div className="cert-card glass-card education">
                    <div className="cert-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="cert-content">
                      <h4 className="cert-title">{edu.title}</h4>
                      <p className="cert-issuer">{edu.issuer}</p>
                      <p className="cert-date">{edu.issueDate}</p>
                      {edu.link && (
                        <a 
                          href={edu.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          {isPdfLink(edu.link) ? (
                            <><FaFilePdf /> View Diploma</>
                          ) : (
                            <><FaExternalLinkAlt /> View Details</>
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </Fade>
    </section>
  )
}

export default Certifications
