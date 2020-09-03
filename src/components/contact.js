import React, { useState } from "react"
import axios from "axios"

import { Container, Button, Alert } from "react-bootstrap"
import { FaFacebookF, FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"

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
          "Dziękuję za wiadomość! Skontaktuje się z Tobą najszybciej jak to możliwe.",
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <>
      <section
        id="contact"
        className="contact features8 mbr-section form2 mbr-parallax-background"
      >
        <div className="mbr-overlay"></div>
        <Fade delay="300" triggerOnce>
          <Container>
            <div className="media-container-row">
              {/* <div className="animation_background" style={{"position" : "fixed", "z-index" : "-1"}}>
          <div className="big_circle1"></div>
          <div className="big_circle2"></div>
          <div className="big_circle3"></div>
        </div>  */}
              <div className="col-md-6 col-lg-6 block-content">
                <div className="col-md-12">
                  <form onSubmit={handleOnSubmit} className="text-center">
                    <h4 className="mb-4 mbr-fonts-style display-6 text-left">
                      Leave me a message
                    </h4>
                    {serverState.status && (
                      <Alert
                        variant={serverState.status.ok ? "success" : "danger"}
                      >
                        {serverState.status.msg}
                      </Alert>
                    )}
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email address"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="exampleTextareaName"
                        placeholder="How may I help you?"
                        rows="3"
                        required="required"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-form btn-bgr display-4"
                      disabled={serverState.submitting}
                    >
                      Send mail
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="text-block">
                  <h2 className="mb-4 mbr-fonts-style mbr-section-title display-2">
                    <strong>Contact me</strong>
                  </h2>
                  <h3 className="mbr-section-subtitle mbr-fonts-style mb-4 display-5">
                    You can find me in a few places on the web, but if if you
                    prefer to do it the "old way" then just write to me message.
                  </h3>
                </div>
                <div className="mb-4 pt-5 mbr-fonts-style subtext display-7">
                  <div className="social-media col-md-12 col-sm-12">
                    <ul className="social-list">
                      <li>
                        <a
                          className="icon-transition"
                          href="https://www.facebook.com/skowronski.jakub"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="mbr-iconfont">
                            <FaFacebookF />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon-transition"
                          href="https://github.com/Frostbourn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="mbr-iconfont">
                            <FaGithub />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon-transition"
                          href="https://www.linkedin.com/in/jakubskowronki"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="mbr-iconfont">
                            <FaLinkedin />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Fade>
      </section>
      <Button variant="primary" className="btn-circle">
        <a href="#top">
          <FaChevronUp value={{ style: { color: "#ffffff !important" } }} />
        </a>
      </Button>
    </>
  )
}

export default ContactForm
