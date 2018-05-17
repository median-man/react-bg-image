import React, { Component } from 'react';
import Background from './cathedralPeak.jpg';

export default class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${Background}")`;
  }
  render() {
    return (
      <div>
        <p>Photo by Frank Kovalchek. License: <a href="https://creativecommons.org/licenses/by/2.0/">CC-BY-SA 2.0</a></p>
      </div>
    );
  }
}
