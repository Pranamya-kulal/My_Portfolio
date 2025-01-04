import React, { useState } from 'react';
import './Contact.css';  // Ensure you import the CSS file

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${name} (${email}): ${message}`);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message" className="label">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            className="textarea"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
