import React, { Component } from 'react';
import './App.css';
import Game from './Game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tic tac toe</h1>
        <Game />
      </div>
    );
  }
}

export default App;
