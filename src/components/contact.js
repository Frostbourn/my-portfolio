import React, { useState } from "react"
import axios from "axios"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
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
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <section
      id="contact"
      className="contact features8 mbr-section form2 mbr-parallax-background"
    >
      <div className="mbr-overlay"></div>
      <Container>
        <div className="media-container-row">
          <div className="col-md-6 col-lg-6 block-content">
            <div className="col-md-12">
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Twój e-mail"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Twoje imię"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="textarea"
                    name="message"
                    className="form-control"
                    id="exampleTextareaName"
                    placeholder="W czym mogę Ci pomóc?"
                    rows="3"
                    required="required"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={serverState.submitting}
                >
                  Wyślij
                </button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="text-block">
              <h2 className="mb-4 mbr-fonts-style mbr-section-title display-2">
                <strong>KONTAKT</strong>
              </h2>
              <h3 className="mbr-section-subtitle mbr-fonts-style mb-4 display-5">
                Możesz mnie znaleźć w paru miejscach w sieci, ale jeśli wolisz
                zrobić to „po staremu” to po prostu napisz do mnie wiadomość.
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
                    >
                      <span className="mbr-iconfont socicon-facebook socicon"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-transition"
                      href="https://github.com/Frostbourn?tab=repositories"
                      target="_blank"
                    >
                      <span className="mbr-iconfont socicon-github socicon"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-transition"
                      href="https://www.linkedin.com/in/jakubskowronki"
                      target="_blank"
                    >
                      <span className="mbr-iconfont socicon-linkedin socicon"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
)
}

export default ContactForm
