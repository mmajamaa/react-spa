import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.getContent(this.props.lang, 'main')}</h2>
        <p>{this.props.getContent(this.props.lang, 'mainContent')}</p>
      </div>
    );
  }
}

export default Home;
