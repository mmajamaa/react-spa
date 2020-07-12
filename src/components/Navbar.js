import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import ResponsiveMenu from 'react-responsive-navbar';

import FaBars from '../assets/bars-solid.svg';
import FaTimes from '../assets/times-solid.svg';
import fi from '../assets/fi.png';
import gb from '../assets/gb.png';
import ru from '../assets/ru.png';


class Navbar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<img className="menuButton" src={FaBars} alt="menuOpenButton" />}
        menuCloseButton={<img className="menuButton" src={FaTimes} alt="menuCloseButton" />}
        changeMenuOn="689px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul className="header">
            <li><Link to="/" className="link">{this.props.getContent['main']}</Link></li>
            <li><Link to="/aboutme" className="link">{this.props.getContent['aboutme']}</Link></li>
            <li><Link to="/projects" className="link">{this.props.getContent['projects']}</Link></li>
            <li><Link to="/contact" className="link">{this.props.getContent['contact']}</Link></li>
            <li className="flag-li" onClick={this.props.setlang('en')}>
              <img src={gb} alt="EN" className="flag" />
            </li>
            <li className="flag-li" onClick={this.props.setlang('fi')}>
              <img src={fi} alt="FI" className="flag" />
            </li>
            <li className="flag-li" onClick={this.props.setlang('ru')}>
              <img src={ru} alt="RU" className="flag" />
            </li>
          </ul>
        }
      />)
  }
};

export default Navbar;
