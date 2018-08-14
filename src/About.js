import React, { Component } from "react";
import cwhGz52w from "./cwhGz52w.jpeg";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Projects from "./Projects";

class About extends Component {
  render() {
    return (
      <HashRouter>
        <div className="about">
          <h2>{this.props.getContent(this.props.lang, 'aboutme')}</h2>
          <img src={cwhGz52w} className="mikko" alt="IMG"/>
          <p>{this.props.getContent(this.props.lang, 'aboutme_intro')}</p><br/>
          <p className="about_list_header">{this.props.getContent(this.props.lang, 'aboutme_p_langs')}</p>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>Java</li>
            <li>JavaScript (React)</li>
            <li>HTML, css, SQL</li>
          </ul>
          <p className="aboutme_projects">{this.props.getContent(this.props.lang, 'aboutme_projects')}</p>
          <NavLink to="/projects" className="aboutme_projects">{this.props.getContent(this.props.lang, 'projects')}</NavLink><br/><br/>
          <p className="about_list_header">{this.props.getContent(this.props.lang, 'aboutme_langs')}</p>
          <ul>
            <li>{this.props.getContent(this.props.lang, 'aboutme_fi')}</li>
            <li>{this.props.getContent(this.props.lang, 'aboutme_en')}</li>
            <li>{this.props.getContent(this.props.lang, 'aboutme_swe')}</li>
            <li>{this.props.getContent(this.props.lang, 'aboutme_ru')}</li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}

export default About;
