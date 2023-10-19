import React, { useState } from 'react'

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // const sendEmail = event => {
  //   event.preventDefault();

  //   console.log('We will fill this up shortly.');
  //   // code to trigger Sending email
  // };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <form>
      <div className="form-group">
        <label>Full Name:</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Full Name"
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="name@example.com"
          onChange={onInputChange}
        />
      </div>      
      <div className="form-group">
        <label>Subject:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Subject"
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea 
          className="form-control"
          placeholder="Message" 
          rows="3"
          onChange={onInputChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default ContactForm