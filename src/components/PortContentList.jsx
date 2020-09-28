import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/PortContentListCss.css";
import "../grid.css";
import PortContent from "./PortContent";
import poster1 from "../img/poster1.jpg";
import poster2 from "../img/poster2.png";
import poster3 from "../img/poster3.JPG";

class PortContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [poster1, poster2, poster3],
      describeHeader: [
        "Landing poster 'Air max day'",
        "UIT Summer music fest",
        "UIT Leader 2020",
      ],
    };
  }

  renderContent = (i) => {
    return (
      <PortContent
        source={this.state.source[i]}
        describeHeader={this.state.describeHeader[i]}
      />
    );
  };

  render() {
    return (
      <div className="wide grid row portfolio-content">
        {this.renderContent(0)}
        {this.renderContent(1)}
        {this.renderContent(2)}
        {this.renderContent(1)}
      </div>
    );
  }
}

export default PortContentList;
