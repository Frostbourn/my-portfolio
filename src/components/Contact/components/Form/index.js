import React, { useState, useEffect, useRef } from "react"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"

import axios from "axios"
import { Alert } from "react-bootstrap"
import emailjs from "@emailjs/browser"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const defaultValues = {
  email: "",
  name: "",
  message: "",
}

const notLetterRegexp = /.*[0-9-!$%^&*()_+|~=`{}/[\]://;<>?,.@#/'/"\\].*/

const schema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required")
    .min(3, "This field has to have min 3 characters")
    .test(
      "onlyLetter",
      "You can use only letters here",
      value => !notLetterRegexp.exec(String(value))
    ),
  email: yup
    .string()
    .required("This field is required")
    .email("Enter valid email address"),

  content: yup
    .string()
    .required("This field is required")
    .min(15, "This field has to have min 15 characters"),
})

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const form = useRef()
  // const methods = useForm({
  //   defaultValues,
  //   resolver: yupResolver(schema),
  // })
  // const { handleSubmit, setValue, reset, watch } = methods
  // const watched = watch()

  // const sendEmail = e => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       "service_4263ebq",
  //       "template_yxmodj6",
  //       form.current,
  //       "user_GiucUjJhWeoW5309DMn6a"
  //     )
  //     .then(
  //       result => {
  //         console.log(result.text)
  //         console.log(form)
  //       },
  //       error => {
  //         console.log(error.text)
  //       }
  //     )
  // }

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

  const onSubmit = e => {
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

  return (
    <form ref={form} onSubmit={onSubmit} className="row gy-3 d-flex">
      <p className="mbr-section-subtitle mbr-fonts-style m-2 display-7">
        <span className="pulsate"></span> I’m currently available for freelance
        work.
      </p>
      {serverState.status && (
        <Alert variant={serverState.status.ok ? "success" : "danger"}>
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
  )
}

export default Form
