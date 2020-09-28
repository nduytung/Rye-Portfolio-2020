import React from "react";
import ReactDOM from "react-dom";
import "./grid.css";
import NavBar from "./components/NavBar";
import "./App.css";
import Greeting from "./components/Greeting";
import PortContentList from "./components/PortContentList";
import AboutMe from "./components/AboutMe";
import CommentList from "./components/CommentList";
import Header from "./components/Header";
import SkillList from "./components/SkillList";
import Contact from "./components/Contact";
import "./fonts/BungeeInline-Regular.ttf";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: ["PRODUCTS", "SKILLS", "ABOUT", "PORTFOLIO", "CONTACT"],
      linkContent: [
        "Posters",
        "Prizes",
        "Projects",
        "Event Managing",
        "Social Contents",
      ],
    };
  }

  render() {
    return (
      <div className="body">
        <div className="main-background"> </div>
        <div className="cover">
          <NavBar content={this.state.navBar} linkId={this.state.linkId} />
          <Greeting />
        </div>

        <div className="content">
          <div className="portfolio" id="section1">
            <Header
              title="Deployed "
              titleEmph="Projects and Media Publication"
            />
            <NavBar content={this.state.linkContent} />
            <PortContentList />
          </div>

          <div className="my-skill" id="section2">
            <Header title="Personal" titleEmph="Qualifications" />
            <SkillList />
          </div>

          <div className="about-me" id="section3">
            <AboutMe />
          </div>

          <div className="comment" id="section4">
            <Header title="Coleagues " titleEmph="Observations" />
            <CommentList />
          </div>

          <div className="contact" id="section5">
            <Header title="Get in touch" titleEmph="with me" />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
