import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.getContent['main']}</h2>
        <p>{this.props.getContent['mainContent']}</p>
      </div>
    );
  }
}

export default Home;
