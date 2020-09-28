import React from "react";
import ReactDOM from "react-dom";
import "../componentCss/CommentListCss.css";
import ClientComment from "./ClientComment";
import Duc from "../img/Duc.jpg";
import Thao from "../img/Thao.jpg";
import Kel from "../img/Kel.jpg";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [Duc, Thao, Kel],
    };
  }

  render() {
    const { source } = this.state;
    return (
      <div className="grid wide list-comment-wrapper">
        <div className="row">
          <ClientComment source={source[0]} />
          <ClientComment source={source[1]} />
          <ClientComment source={source[2]} />
          <ClientComment source={source[0]} />
        </div>
      </div>
    );
  }
}

export default CommentList;
