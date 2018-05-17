import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HalfDome from './pages/HalfDome';
import CathedralPeak from './pages/CathedralPeak';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/halfdome">Half Dome</Link> | <Link to="/cathedralpeak">Cathedral Peak</Link>
          </nav>
          <Route exact path="/" component={HalfDome} />
          <Route path="/halfdome" component={HalfDome} />
          <Route path="/cathedralpeak" component={CathedralPeak} />
        </div>
      </Router>
    </div>);
}

export default App;
