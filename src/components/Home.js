import React, { Component } from "react";

import { Helmet } from 'react-helmet'

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Mikko Majamaa - {this.props.getContent['main']}</title>
          <meta name="description" content="On this website I'll introduce myself and some of my programming projects. -Mikko Majamaa :)" />
        </Helmet>
        <h2>{this.props.getContent['main']}</h2>
        <p>{this.props.getContent['mainContent']}</p>
      </div>
    );
  }
}

export default Home;
