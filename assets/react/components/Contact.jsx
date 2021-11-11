import React, {useState} from 'react';

import ContactForm from './ContactForm';

const Contact = props => {
  const {apiOrigin} = props;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);
  const [validationErrors, setValidationErrors] = useState(null);

  const onSubmit = formData => {
    setLoading(true);
    setError(false);
    setValidationErrors(null);
    const url = `${apiOrigin}/api/contact/`
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'omit',
      body: JSON.stringify(Object.fromEntries(formData))
    }).then(response => {
      setLoading(false);
      setError(!response.ok);
      return response.json();
    }).then(jsonBody => {
      console.log(jsonBody);
      setResult(jsonBody);
      if (jsonBody.status != 'sent') {
        if ( jsonBody.email && jsonBody.email.length > 0) {
          setValidationErrors(jsonBody);
        } else {
          setError(true);
        }
      }
    }).catch(error => {
      setLoading(false);
      setError(true);
    });
  }

  return (
    <>
      { loading && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div> }
      { result.status == 'sent' &&
        <>
          <p>Your message has been sent.</p>
          <a className="btn p2pu-btn blue" onClick={() => setResult({})} >Send another</a>
        </>
      }
      { error && !validationErrors &&
        <>
          <p>Something went wrong.</p>
          <a className="btn p2pu-btn blue" onClick={() => {setResult({}); setError(false)}} >Try again</a>
        </>
      }
      { !loading && (!error || validationErrors) && result.status != 'sent' &&
        <ContactForm {...props} onSubmit={onSubmit} validationErrors={validationErrors} />
      }
    </>
  )

}

export default Contact;
