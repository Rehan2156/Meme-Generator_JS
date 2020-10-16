import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import Meme from './Meme'

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
