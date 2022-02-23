import React, { useState } from "react"
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Alert } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import Emoji from "../Emoji"

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: {
        ok,
        msg,
      },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/ebb8a620-f834-449b-a6f6-44add2b30dda",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          "Thank you for message! I will contact you asap.",
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "about-photo.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <section id="contact" className="contact features8">
        <div className="contact-shapes"></div>
        <Fade triggerOnce>
          <Container>
            <div className="media-container-row">
              <div className="col-lg-6 block-content">
                <div className="text-block">
                  <div className="mb-4 mbr-fonts-style mbr-section-title display-2">
                    <strong>
                      Get In Touch <Emoji symbol="📬" label="contact" />
                    </strong>
                  </div>
                  <p className="mbr-section-subtitle mbr-fonts-style mb-4 display-7">
                    If you’re ever interested in learning about my work and my
                    working process with clients, please feel free to contact me
                    with information about the projects. We can set up a call or
                    a meet to discuss how I can utilize my skills in achieving
                    the success of your project. <br />
                    You can find me in a few places on the web, but if if you
                    prefer to do it the "old way" then just write to me message.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <form onSubmit={handleOnSubmit} className="row gy-3 d-flex">
                  <p className="mbr-section-subtitle mbr-fonts-style m-2 display-7">
                    <span className="pulsate"></span> I’m currently available
                    for freelance work.
                  </p>
                  {serverState.status && (
                    <Alert
                      variant={serverState.status.ok ? "success" : "danger"}
                    >
                      {serverState.status.msg}
                    </Alert>
                  )}
                  <div className="form-group my-0">
                    <label htmlFor="emailAddress"></label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="emailAddress"
                      aria-describedby="emailHelp"
                      placeholder="Email address"
                      required="required"
                    />
                  </div>
                  <div className="form-group my-0">
                    <label htmlFor="contactName"></label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="contactName"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group my-0">
                    <label htmlFor="contactMessage"></label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="contactMessage"
                      placeholder="How may I help you?"
                      rows="3"
                      required="required"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-form btn-bgr display-4 mt-4"
                    disabled={serverState.submitting}
                  >
                    Send a message
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </Fade>
      </section>
      <a
        onClick={handleScrollToTop}
        className="btn-primary btn-circle"
        aria-label="Go to top"
      >
        <FaChevronUp value={{ style: { color: "#ffffff !important" } }} />
      </a>
    </>
  )
}

export default ContactForm
