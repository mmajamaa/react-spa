import React, { Component } from "react";
import fi from './fi.png';
import gb from './gb.png';
import ru from './ru.png';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import ResponsiveMenu from 'react-responsive-navbar';
import FaBars from './bars-solid.svg';
import FaTimes from './times-solid.svg';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'fi',
      width: window.innerWidth,
      languages: []
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    fetch('/languages')
    .then(res => res.json())
    .then(languages => this.setState({ languages }));
}

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
    }

    fetchLanguages() {
      fetch('/languages')
      .then(res => res.json())
      .then(languages => this.setState({ languages }));
    }

  updateDimensions() {
      console.log(this.state.languages[this.state.lang]['main'])
      this.setState({
        width: window.innerWidth,
      });
    }

  render() {
    if (this.state.languages.length === 0) {
      return <div></div>
    }
    const setlang = (language) => () => {
      if (this.state.lang === language) {
        return
      }
      this.setState({lang: language})
    }

    return (
      <HashRouter>
        <div>
        <ResponsiveMenu
        menuOpenButton={<img className="menuButton" src={FaBars} alt="menuOpenButton"/>}
        menuCloseButton={<img className="menuButton" src={FaTimes} alt="menuCloseButton"/>}
        changeMenuOn="689px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul className="header">
            <li><NavLink exact to="/" className="link">{this.state.languages[this.state.lang]['main']}</NavLink></li>
            <li><NavLink to="/aboutme" className="link">{this.state.languages[this.state.lang]['aboutme']}</NavLink></li>
            <li><NavLink to="/projects" className="link">{this.state.languages[this.state.lang]['projects']}</NavLink></li>
            <li><NavLink to="/contact" className="link">{this.state.languages[this.state.lang]['contact']}</NavLink></li>
              <li className="flag-li" onClick={setlang('en')}>
                  <img src={gb} alt="EN" className="flag"/>
              </li>
              <li className="flag-li" onClick={setlang('fi')}>
                    <img src={fi} alt="FI" className="flag"/>
              </li>
              <li className="flag-li" onClick={setlang('ru')}>
                  <img src={ru} alt="RU" className="flag"/>
            </li>
          </ul>
        }
      />
      <div>
          <div className="content">
            <Route exact path="/" render={()=><Home getContent={this.state.languages[this.state.lang]}/>}/>
            <Route path="/aboutme" render={()=><About width={window.innerWidth} getContent={this.state.languages[this.state.lang]}/>}/>
            <Route path="/projects" render={()=><Projects getContent={this.state.languages[this.state.lang]}/>}/>
            <Route path="/contact" render={()=><Contact getContent={this.state.languages[this.state.lang]}/>}/>
          </div>
        </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
