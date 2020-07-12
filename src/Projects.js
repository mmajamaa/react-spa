import React, { Component } from "react";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCHidden: true,
      isPHidden: true,
      isJHidden: true,
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.getContent['gh']} <a href="https://github.com/mmajamaa/" target="_blank" rel="noopener noreferrer"> GitHub</a></p>
        <h2>{this.props.getContent['projects']}</h2><br />

        <div id="this_site">
          <h3>{this.props.getContent['this_site_project']}{" (React.js)"}</h3>
          <p>
            {this.props.getContent['this_site']}
            <a href="https://github.com/mikkomajamaa/react-spa" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
        <div id="caloriesCounter">
          <h3>Calories counter (Java, SQLite)</h3>
          <p>
            {this.props.getContent['CaloriesCounter']}
            <a href="https://github.com/mikkomajamaa/caloriesCounter" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
        <div id="SmartPostApp">
          <h3>Smartpost App{" (Java, SQLite)"}</h3>
          <p>
            {this.props.getContent['SmartPostApp']}
            <a href="https://github.com/mikkomajamaa/SmartPostApp" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
        <div id="name_file_analyzer">
          <h3>Name file analyzer{" (C)"}</h3>
          <p>
            {this.props.getContent['name_file_analyzer']}
            <a href="https://github.com/mikkomajamaa/name_file_analyzer" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
        <div id="compute_taxes_by_year_and_emission_classes">
          <h3>Compute taxes by year and emission classes{" (Python)"}</h3>
          <p>
            {this.props.getContent['compute_taxes_by_year_and_emission_classes']}
            <a href="https://github.com/mikkomajamaa/compute_taxes_by_year_and_emission_classes" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
        <div id="testdatacreator">
          <h3>Test data creator{" (Python)"}</h3>
          <p>
            {this.props.getContent['testdatacreator']}
            <a href="https://github.com/mikkomajamaa/testdatacreator" target="_blank" rel="noopener noreferrer"> GitHub</a>.
            </p>
        </div>
      </div>
    );
  }
}

export default Projects;
