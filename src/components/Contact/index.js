import React from "react"

import { Container } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import Emoji from "../Emoji"
import Form from "./components/Form"

const ContactForm = () => {
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
                <Form />
              </div>
            </div>
          </Container>
        </Fade>
      </section>
      <div
        onClick={handleScrollToTop}
        className="btn-primary btn-circle"
        aria-label="Go to top"
      >
        <FaChevronUp value={{ style: { color: "#ffffff !important" } }} />
      </div>
    </>
  )
}

export default ContactForm
