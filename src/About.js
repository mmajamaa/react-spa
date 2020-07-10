import React, { Component } from "react";
import cwhGz52w from "./cwhGz52w.jpeg";

import {
  NavLink,
  HashRouter
} from "react-router-dom";

class About extends Component {
  render() {
    return (
      <HashRouter>
        <div className="about">
          <h2>{this.props.getContent['aboutme']}</h2>
          <div className="img-wrapper">
            <img src={cwhGz52w} className="mikko" style={this.props.width < 689 ? { width: '100%' } : {}} alt="IMGmikko" />
          </div>
          <p>{this.props.getContent['aboutme_intro']}</p><br />
          <p className="about_list_header">{this.props.getContent['aboutme_p_langs']}</p>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>Java</li>
            <li>JavaScript (React.js, Vue.js, Node.js...)</li>
            <li>HTML5, css, SQL (SQLite, Oracle), MongoDB, Docker</li>
            <li>etc...</li>
          </ul>
          <p className="aboutme_projects">{this.props.getContent['aboutme_projects']}</p>
          <NavLink to="/projects" className="aboutme_projects">{this.props.getContent['projects']}</NavLink><br /><br />
          <p className="about_list_header">{this.props.getContent['aboutme_langs']}</p>
          <ul>
            <li>{this.props.getContent['aboutme_fi']}</li>
            <li>{this.props.getContent['aboutme_en']}</li>
            <li>{this.props.getContent['aboutme_swe']}</li>
            <li>{this.props.getContent['aboutme_ru']}</li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}

export default About;
