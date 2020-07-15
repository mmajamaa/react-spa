import React, { Component } from "react";

import { Helmet } from 'react-helmet'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Helmet>
          <title>Mikko Majamaa - {this.props.getContent['contact']}</title>
          <meta name="description" content="Fan post/love letters/job offers? Feel free to contact me." />
        </Helmet>
        <h2>{this.props.getContent['contact']}</h2>
        <p>{this.props.getContent['contactEmail']}
          <a href="mailto:mikko.majamaa@outlook.com">mikko.majamaa@outlook.com</a>
        </p>
        <p>{this.props.getContent['contactPhone']} +358452115615
        </p>
      </div>
    );
  }
}

export default Contact;
