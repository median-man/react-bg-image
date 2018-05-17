import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HalfDome from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Route exact path="/" component={HalfDome} />
          <Route path="/halfdome" component={HalfDome} />
        </div>
      </Router>
    </div>);
}

export default App;
