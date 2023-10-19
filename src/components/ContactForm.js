import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [result, setResult] = useState(null)

  const sendEmail = event => {
    event.preventDefault()
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data)
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
      .catch(() => {
        setResult({
          sucess: false,
          message: 'Something went wrong. Try again later'
        })
      })
  }

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
          value={state.name}
          placeholder="Full Name"
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input 
          type="email" 
          className="form-control" 
          value={state.email}
          placeholder="name@example.com"
          onChange={onInputChange}
        />
      </div>      
      <div className="form-group">
        <label>Subject:</label>
        <input
          type="text"
          className="form-control"
          value={state.subject}
          placeholder="Subject"
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea 
          className="form-control"
          value={state.message}
          rows="3"
          placeholder="Message" 
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