import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import Meme from './Meme'
import 'react-bootstrap'
import Select from './Select'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <Header/>
      <Switch> 
              <Route exact path='/' component={Select}></Route> 
              <Route exact path='/meme' component={Meme}></Route> 
      </Switch> 
    </Router>
  );
}

export default App;
