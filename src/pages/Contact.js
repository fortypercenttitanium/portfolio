import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import Socialicons from '../components/Socialicons';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';

const phoneNumber = '856-471-7881';
const emailAddress = 'alex@ayweb.dev';

function Contact() {
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage('Name is required');
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formdata.email,
      )
    ) {
      setError(true);
      setMessage('Valid email required');
    } else if (!formdata.subject) {
      setError(true);
      setMessage('Subject is required');
    } else if (!formdata.message) {
      setError(true);
      setMessage('Message is required');
    } else {
      setError(false);
      setMessage('You message has been sent!!!');
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    }
    if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    }
    return null;
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Alex Younger Personal Portfolio Contact Page"
        />
      </Helmet>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form
                  action="#"
                  className="mi-form mi-contact-form"
                  onSubmit={submitHandler}
                >
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formdata.name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      Enter your email*
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="contact-form-email"
                      value={formdata.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Subject*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formdata.subject}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Message*</label>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={formdata.message}
                    />
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">
                      Send Mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.Phone />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Phone</h6>
                    <p>
                      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.Mail />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Email</h6>
                    <p key={emailAddress}>
                      <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.ThumbsUp />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Social Media</h6>
                    <Socialicons bordered />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
