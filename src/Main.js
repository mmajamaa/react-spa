import React, { Component } from 'react';
import {
  Switch, Route, BrowserRouter
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import languages from './data/languages.json'

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
    this.setState({ languages });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  fetchLanguages() {
    this.setState({ languages });
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
    });
  }

  setlang = (language) => () => {
    if (this.state.lang === language) {
      return
    }
    this.setState({ lang: language })
  }

  render() {
    if (this.state.languages.length === 0) {
      return <div></div>
    }

    return (
      <BrowserRouter>
        <div>
          <Navbar getContent={this.state.languages[this.state.lang]} setlang={this.setlang} />
          <div>
            <div className="content">
              <Switch>
                <Route exact path="/" render={() => <Home getContent={this.state.languages[this.state.lang]} />} />
                <Route path="/aboutme" render={() => <About width={window.innerWidth} getContent={this.state.languages[this.state.lang]} />} />
                <Route path="/projects" render={() => <Projects getContent={this.state.languages[this.state.lang]} />} />
                <Route path="/contact" render={() => <Contact getContent={this.state.languages[this.state.lang]} />} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
