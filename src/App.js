import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Slide } from '@material-ui/core';
import Slogan from './components/Slogan';
import WordCard from './components/WordCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="/image/vietslang-logo.png" alt=""/>
        </nav>
        <Slogan/>
        <WordCard/>
    </div>
    )
  }
}
export default App;
