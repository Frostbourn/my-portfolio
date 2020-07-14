import React, { useState } from "react"
import axios from "axios"
import { Link } from "gatsby"

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
      <div>
        <div className="col-md-8 mt-5">
          <h3>Getform.io Gatsby Form Example</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" required="required">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputName">Imię</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName"
                placeholder="Imię"
                required="required"
              />
            </div>
            <div className="form-group">
              <label for="exampleTextareaName">Wiadomość</label>
              <input
                type="textarea"
                name="message"
                className="form-control"
                id="exampleTextareaName"
                placeholder="Wiadomość"
                required="required"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={serverState.submitting}
            >
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
  )
}

export default ContactForm
