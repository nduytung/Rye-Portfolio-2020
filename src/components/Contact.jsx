import React from "react";
import ReactDOM from "react-dom";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "../componentCss/ContactCss.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid wide row contact-total-wrapper">
        <ContactForm />
        <ContactInfo />
      </div>
    );
  }
}

export default Contact;
