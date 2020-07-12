import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

import mikko_2019 from "../assets/mikko_2019.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>{this.props.getContent['aboutme']}</h2>
        <div className="img-wrapper">
          <img src={mikko_2019} className="mikko" style={this.props.width < 689 ? { width: '100%' } : {}} alt="IMGmikko" />
        </div>
        <p>{this.props.getContent['aboutme_intro']} <a href="https://lutpub.lut.fi/handle/10024/160977" target="_blank" rel="noopener noreferrer">{this.props.getContent['here']}</a>.</p><br />
        <p className="about_list_header">{this.props.getContent['aboutme_p_langs']}</p>
        <ul>
          <li>Python</li>
          <li>C</li>
          <li>CUDA</li>
          <li>Java</li>
          <li>Ruby</li>
          <li>JavaScript (Angular, React.js, Vue.js, Node.js, Express.js...)</li>
          <li>HTML5, css, SQL (SQLite, Oracle), MongoDB, Docker</li>
          <li>MATLAB, R</li>
          <li>etc...</li>
        </ul>
        <p className="aboutme_projects">{this.props.getContent['aboutme_projects']}&nbsp;</p>
        <NavLink to="/projects" className="aboutme_projects">{this.props.getContent['projects']}</NavLink><br /><br />
        <p className="about_list_header">{this.props.getContent['aboutme_langs']}</p>
        <ul>
          <li>{this.props.getContent['aboutme_fi']}</li>
          <li>{this.props.getContent['aboutme_en']}</li>
          <li>{this.props.getContent['aboutme_swe']}</li>
          <li>{this.props.getContent['aboutme_ru']}</li>
        </ul>
      </div>
    );
  }
}

export default About;
