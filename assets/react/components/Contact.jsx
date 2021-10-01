import React, {useState} from 'react';

import ContactForm from './ContactForm';

const Contact = props => {
  const {apiOrigin} = props;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const onSubmit = formData => {
    console.log(formData);
    setLoading(true);
    setError(false);
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
        setError(true);
      }
    });
  }

  return (
    <>
      { result.status == 'sent' &&
        <p>Your message has been sent. <a onClick={() => setResult({})} >Send another</a></p>
      }
      { error &&
        <p>Something went wrong. <a onClick={() => {setResult({}); setError(false)}} >Try again</a></p>
      }
      { loading && <div className="spinner">sending</div> }
      { !loading && !error &&
        <ContactForm {...props} onSubmit={onSubmit} />
      }
    </>
  )

}

export default Contact;
