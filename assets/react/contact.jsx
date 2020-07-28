import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { InputWithLabel, TextareaWithLabel } from 'p2pu-components';
import axios from 'axios';

import 'p2pu-components/dist/build.css';

const ContactForm = props => {
  const initialState = {
    form: {},
    error: null,
    loading: false,
    success: false,
  }
  const [ state, setState ] = useState(initialState)
  const onSubmit = (e) => {
    e.preventDefault()
    setState({ ...state, loading: true })

    const url = `${props.origin}/api/contact-form/`
    axios({
      method: "POST",
      url: url,
      data: state.form,
    })
    .then(res => {
      console.log(res)
      if (res.status === 200 && res.data.status === "success") {
        setState({ form: {}, success: true, loading: false })
      } else {
        setState({ ...state, error: true, loading: false })
      }
    })
    .catch(err => {
      console.log(err)
      setState({ ...state, error: true, loading: false })
    })
  }

  const onUpdateForm = input => {
    setState({
      form: {
        ...state.form,
        ...input
      }
    })
  }

  const { form, loading, error, success } = state;

  return(
    <div>
      { error && <div className="alert alert-warning">There was a problem submitting the form. Please retry or send us an email.</div> }
      <form onSubmit={onSubmit}>
        <InputWithLabel
          name="name"
          label="Name"
          value={form.name}
          handleChange={onUpdateForm}
          required
        />
        <InputWithLabel
          name="email"
          type="email"
          label="Email"
          value={form.email}
          handleChange={onUpdateForm}
          required
        />
        <InputWithLabel
          name="phone"
          type="tel"
          label="Phone number (optional)"
          value={form.phone}
          handleChange={onUpdateForm}
        />
        <TextareaWithLabel
          name="message"
          label="Message"
          value={form.message}
          handleChange={onUpdateForm}
          required
        />
        {
          loading ?
          <p className="d-flex align-items-center"><span className="material-icons mr-2 text-yellow">pending</span>Sending...</p> :
          success ? <p className="d-flex align-items-center"><span className="material-icons mr-2 text-blue">check_circle</span>Your form has been submitted! We will be in touch with you soon.</p> :
          <input type="submit" label="Submit" className="btn p2pu-btn blue" />
        }
      </form>
    </div>
  )
}

ContactForm.defaultProps = {
  origin: "https://learningcircles.p2pu.org",
}

const origin = window.origin === "http://localhost:4000" ? "http://localhost:8000" : "https://learningcircles.p2pu.org"

ReactDOM.render(
  <ContactForm origin={origin} />, document.getElementById('contact-form')
);

