import React, {useState} from 'react';

const ContactForm = ({onSubmit, sourceUrl, organization, validationErrors}) => {
  const form = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    // todo do validation
		if (form.current.checkValidity()) {
      const formData = new FormData(form.current);
      onSubmit(formData)
	  } 
		form.current.classList.add('was-validated');
	}

  return (
    <form ref={form} className="row g-3 pt-3 needs-validation" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="source" value={sourceUrl}/>
      <div className="col-12">
        <label htmlFor="email" className="form-label">Email Address *</label>
        <input 
          type="email"
          className={"form-control" + (validationErrors&&validationErrors.email?" is-invalid":"")}
          id="email"
          name="email"
          placeholder="Email Address" 
          required 
        />
        <div className="invalid-feedback">
          Please provide a valid email address.
        </div>
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="name" className="form-label">Name *</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
        <div className="invalid-feedback">
          Please provide your name.
        </div>
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      { !!organization &&
        <div className="col-12">
          <label htmlFor="organization" className="form-label">Organization *</label>
          <input type="text" className="form-control" id="organization" name="organization" placeholder="Your Organization" required />
          <div className="invalid-feedback">
            Please provide your organization.
          </div>
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
      }
      <div className="col-12">
        <label htmlFor="message" className="form-label">How can we help you? *</label>
        <textarea type="textarea" className="form-control" id="message" name="content" placeholder="Message" style={{height: '10rem'}} required></textarea>
        <div className="invalid-feedback">
          Please include a message.
        </div>
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-12 text-center mt-4">
        <button className="btn p2pu-btn blue" type="submit">Submit form</button>
      </div>
    </form>
  );
}

export default ContactForm;
