import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
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
