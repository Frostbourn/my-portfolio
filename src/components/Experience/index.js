import React from "react"
import { Container, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

const experienceData = [
  {
    company: "Gremi Media SA",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGg7r5PmUHMpA/company-logo_100_100/company-logo_100_100/0/1630555292426/gremi_media_sa_logo?e=1746057600&v=beta&t=bBiqWnc9oWrK6sCgHLxO7SsHCXWoxb8JFwS0Z6dPfHw",
    title: "Software Developer",
    type: "Self-employed",
    period: "Jun 2022 - Present",
    duration: "3 yrs 8 mos",
    location: "Warsaw, Poland · Remote",
    highlights: [
      "Development, maintenance, and implementation of new versions of nationwide information websites: rp.pl, parkiet.com, wiescirolnicze.pl",
      "Developing dynamic products store with secure payment integration and a seamless user experience: czytaj.rp.pl, czytaj.parkiet.com",
      "Building custom CMS platform for managing and deploying landing pages, ensuring high performance, scalability, and ease of use for marketing teams",
      "Implementing regwall solutions to optimize user registration flow and enhance data collection",
      "Improving paywall system to increase conversion rates and ensure a smooth user experience",
      "Designing and implementing intelligent workflow automations and system integrations with AI using n8n, LLMs, and Open WebUI to enhance operational efficiency",
      "Experience with containerization and orchestration tools: Docker for environment consistency, Kubernetes and Helm Charts for streamlined deployment processes",
      "Proficient in designing and implementing CI/CD pipelines to automate testing, deployment, and delivery processes, ensuring efficient and reliable software releases, with GitOps and Rancher for centralized cluster management",
      "Cooperation with the design and marketing team in the field of interface and components implementation",
      "Small projects support: coding landing pages, content updating, ad hoc updates, and fixes",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Docker", "Kubernetes", "n8n", "AI/LLMs", "CI/CD", "Helm"],
    isCurrent: true,
  },
  {
    company: "ADVOX Studio",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHxvW5W1_HxKg/company-logo_100_100/company-logo_100_100/0/1630569289657?e=1746057600&v=beta&t=eN5VG0rMfKUaA0wPXO0mV0nSmCpP_Pw-8dAAC6d4UT4",
    title: "React Developer",
    type: "Part-time",
    period: "Feb 2023 - Sep 2023",
    duration: "8 mos",
    location: "Remote",
    highlights: [
      "Managed and continuously enhanced company's website for optimal performance and user experience",
      "Developed new features and integrated cutting-edge technologies",
      "Implemented web development best practices to ensure high-quality standards",
      "Collaborated with cross-functional teams to align technical solutions with business needs, driving engagement and achieving strategic objectives",
    ],
    skills: ["Gatsby", "React.js"],
    isCurrent: false,
  },
  {
    company: "WLDevs.com",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH4P5S0JjKpEA/company-logo_100_100/company-logo_100_100/0/1631312632574?e=1746057600&v=beta&t=0b3E0kO0a0a0a0a0a0a0a0a0a0a0a0a0a0a0",
    title: "Frontend Engineer",
    type: "Self-employed",
    period: "Aug 2021 - Jun 2022",
    duration: "11 mos",
    location: "Remote",
    highlights: [
      "Implemented high fidelity prototype into actual code to deliver the microsite",
      "Writing and maintaining code. Working on bug fixes",
      "Create solutions using a variety of technologies including Gatsby, React, GraphQL, various content management systems such as WordPress, Contentful and continuous integration/continuous delivery (CI/CD)",
    ],
    skills: ["Gatsby", "React.js", "GraphQL", "WordPress", "Contentful"],
    isCurrent: false,
  },
  {
    company: "Blue Owl | Shopify Agency",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHqvH8vAkfK5g/company-logo_100_100/company-logo_100_100/0/1630509721445?e=1746057600&v=beta&t=QO0vL8kPLdCFQQQ2y9B9B9B9B9B9B9B9B9B9B9B9",
    title: "Frontend Engineer",
    type: "Self-employed",
    period: "Mar 2021 - Jun 2022",
    duration: "1 yr 4 mos",
    location: "Poznań, Poland",
    description: "Independent contract work building custom websites for small to medium business clients.",
    highlights: [
      "Built websites / eCommerce stores for clients using TypeScript, React, Gatsby, WordPress, Styled-Components, GraphQL & Rest API",
      "Organized UI/UX in order to give users a positive and efficient visit to a website",
      "Built web applications in an agile and iterative way using Git/Github version control",
      "Consider accessibility, SEO, and code best practices to make the website highly usable",
    ],
    skills: ["Gatsby", "React.js", "TypeScript", "Shopify", "GraphQL", "WordPress"],
    isCurrent: false,
  },
  {
    company: "JS Nextgen Solutions",
    logo: null,
    title: "Freelance Web Developer",
    type: "Self-employed",
    period: "May 2014 - Dec 2020",
    duration: "6 yrs 8 mos",
    location: "Kraków, Poland",
    description: "Freelance web development and consulting for clients.",
    highlights: [
      "Specialized in websites using HTML, CSS, and JavaScript",
      "Built responsive websites using the Bootstrap CSS framework and jQuery library",
      "Wireframed website designs and optimized assets such as images for performance",
      "Worked with clients to understand their business needs and deliver fitting solutions",
      "Provided consulting, maintenance, and hosting services for clients",
      "Creating premium plugins for various CMS: WordPress, Joomla!, Prestashop",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "WordPress", "Joomla", "Prestashop"],
    isCurrent: false,
  },
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <Fade triggerOnce>
        <Container>
          <Col md={12}>
            <h2 className="mbr-section-title mbr-fonts-style align-center display-2">
              <strong>Work Experience</strong>
            </h2>
            <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pt-3 align-center display-5">
              My professional journey in software development
            </h3>
          </Col>

          <div className="timeline">
            {experienceData.map((job, index) => (
              <Fade
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                triggerOnce
                delay={index * 100}
              >
                <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${job.isCurrent ? "current" : ""}`}>
                  <div className="timeline-marker">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-content glass-card">
                    <div className="timeline-header">
                      <div className="company-info">
                        {job.logo ? (
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="company-logo"
                            width="50"
                            height="50"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = "none"
                            }}
                          />
                        ) : (
                          <div className="company-logo-placeholder">
                            <FaBriefcase />
                          </div>
                        )}
                        <div>
                          <h4 className="job-title">{job.title}</h4>
                          <p className="company-name">
                            {job.company} · {job.type}
                          </p>
                        </div>
                      </div>
                      {job.isCurrent && <span className="badge-current">Current</span>}
                    </div>

                    <div className="timeline-meta">
                      <span>
                        <FaCalendarAlt /> {job.period} · {job.duration}
                      </span>
                      <span>
                        <FaMapMarkerAlt /> {job.location}
                      </span>
                    </div>

                    {job.description && (
                      <p className="job-description">{job.description}</p>
                    )}

                    <ul className="highlights">
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>

                    <div className="skills-tags">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </Container>
      </Fade>
    </section>
  )
}

export default Experience
