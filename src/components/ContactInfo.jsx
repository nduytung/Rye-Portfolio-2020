import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/ContactInfoCss.css";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="m-6 l-6 c-12"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        ><p className="contact-message"> My contact information </p>
        <div className="info-content-wrapper">
          <div className="info-content">
            <h4> EMAIL</h4>
            <p>
              {" "}
              <a> nduytung.1611@gmail.com</a>{" "}
            </p>
          </div>
          <div className="info-content">
            <h4> PHONE </h4>
            <p> +84 919516377</p>
          </div>

          <div className="info-content">
            <h4> HOME ADDRESS</h4>
            <p> Block B, Khang Gia Apartment, Quận 12, TP.HCM </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
