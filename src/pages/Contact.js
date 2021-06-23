import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import Socialicons from '../components/Socialicons';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';

const phoneNumber = '856-471-7881';
const emailAddress = 'alex@ayweb.dev';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formData.name) {
      setError(true);
      setMessage('Name is required');
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email,
      )
    ) {
      setError(true);
      setMessage('Valid email required');
    } else if (!formData.subject) {
      setError(true);
      setMessage('Subject is required');
    } else if (!formData.message) {
      setError(true);
      setMessage('Message is required');
    } else {
      const result = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
        }),
      });

      if (result.ok || process.env.NODE_ENV === 'development') {
        setError(false);
        setFormData(initialFormData);
        return setMessage('You message has been sent!');
      }

      setError(true);
      return setMessage('Form submission failed, please try again later.');
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
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
                  data-netlify="true"
                  method="POST"
                  className="mi-form mi-contact-form"
                  onSubmit={submitHandler}
                >
                  <input
                    hidden
                    name="form-name"
                    value="contact"
                    onChange={() => {}}
                  />
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formData.name}
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
                      value={formData.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Subject*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formData.subject}
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
                      value={formData.message}
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
