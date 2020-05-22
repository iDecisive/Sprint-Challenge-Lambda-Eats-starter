import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BuildPizza from './components/buildpizza/BuildPizza';

import './App.css';

const App = () => {

  let [formState, setFormState] = useState({

    'name': '',
    'size': '',
    'mushrooms': false,
    'onions': false,
    'feta': false,
    'garlic': false,
    'instructions': ''

  });

  const [inputErrors, setInputErrors] = useState({ //State for form input validation errors
    'name': '',
    'size': '',
    'mushrooms': '',
    'onions': '',
    'feta': '',
    'garlic': '',
    'instructions': ''
  });

  return (
    <Router>
      <div className='App'>

        <nav>
          <Link to='/'>Home</Link>  
        </nav>

        <Link to='/pizza'>Build your pizza</Link>

        <Route path='/pizza'>

          <BuildPizza 
          formState={formState} 
          setFormState={setFormState} 
          
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}/> 

        </Route>

      </div>
    </Router>
  );
};
export default App;
