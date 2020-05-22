import React, { useState } from "react";
import {
  BrowserRouter as Router,
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

        <Link to='/pizza' id='buildlink'>Build your pizza</Link>

        <Route path='/pizza'>

          <BuildPizza 
          formState={formState} 
          setFormState={setFormState} 
          
          inputErrors={inputErrors}
          setInputErrors={setInputErrors}/> 

        </Route>

        <Route path='/thanks'> 

          <h1>Congrats! Pizza is on its way!</h1>

          <img src='https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif' alt='gif' />

        </Route>

      </div>
    </Router>
  );
};
export default App;
