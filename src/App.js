import React, {PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

import GameBoard from "./GameBoard"

class App extends PureComponent {
  render() {
    return (
      <GameBoard/>
    );
  }
}

export default App;
