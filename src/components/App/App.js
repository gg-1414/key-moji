import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar'
import KeyboardContainer from '../KeyboardContainer/KeyboardContainer'
import TextBox from '../TextBox/TextBox'

class App extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <KeyboardContainer />
        <TextBox />
      </div>
    );
  }
}

export default App;
