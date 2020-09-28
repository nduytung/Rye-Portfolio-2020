import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/ContactFormCss.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="m-6 l-6 c-12 contact-wrapper"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        ><p className="contact-message"> Leave a message for me </p>
        <input type="text" placeholder="Your name" className="form-input" />
        <input
          type="text"
          placeholder="Your Email address "
          className="form-input"
        />
        <input
          type="text"
          placeholder="Contacting phone number"
          className="form-input"
        />
        <div className="form-input special">
          <input
            type="text"
            placeholder="Extended message"
            className="form-input special-form"
          />
        </div>
        <button className="btn">
          {" "}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
          >
            Send this message
          </a>{" "}
        </button>
      </div>
    );
  }
}

export default ContactForm;
