import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/GreetingCss.css";
import "../App.css";

class Greeting extends React.Component {
  render() {
    return (
      <div className="greetings">
        <h1 className="cheer" data-aos="fade-down" data-aos-duration="1000">
          {" "}
          Hello, I am{" "}
        </h1>
        <p className="name" data-aos="fade-up" data-aos-duration="1000">
          {" "}
          Nguyen Duy Tung{" "}
        </p>
        <button className="btn">
          {" "}
          <a href="#">See more about me</a>{" "}
        </button>
      </div>
    );
  }
}

export default Greeting;
