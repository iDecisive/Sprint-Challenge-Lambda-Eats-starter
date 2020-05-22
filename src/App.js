import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BuildPizza from './components/buildpizza/BuildPizza';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>

        <nav>
          <Link to='/'>Home</Link>  
        </nav>

        <Link to='/pizza'>Build your pizza</Link>

        <Route path='/pizza'> <BuildPizza /> </Route>

      </div>
    </Router>
  );
};
export default App;
