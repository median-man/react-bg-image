import React, { Component } from 'react';
import Background from './halfDome.jpg';

export default class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${Background}")`;
  }
  render() {
    return (
      <div className="HalfDome">
        <p>Photo by DAVID ILIFF. License: <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></p>
      </div>
    );
  }
}
