import React from 'react';
import Background from './halfDome.jpg';
import './HalfDome.css';

export default function Home() {
  const style = {
    backgroundImage: `url("${Background}")`,
  };
  return (
    <div className="HalfDome" style={style} >
      <p>Photo by DAVID ILIFF. License: <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></p>
    </div>
  );
}
