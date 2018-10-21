import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar'
import KeyboardContainer from '../KeyboardContainer/KeyboardContainer'
import TextBox from '../TextBox/TextBox'

const faces = ['face', 'smiley', 'monster', 'hands', 'body', 'people', 'hand', 'person']
const clothing = ['fashion', 'accessories']
const nature = ['animal', 'plant', 'earth', 'space', 'sun', 'star', 'weather']
const food = ['food', 'drink']
const sports = ['sport']
const civilization = ['home', 'civilization', 'office']
const symbol = ['symbol']

class App extends Component {

  constructor() {
    super()
    this.state = {
      emojis: [],
      category: faces
    }
  }

  componentDidMount() {
    this.fetchEmojis()
  }

  fetchEmojis = () => {
    fetch('http://localhost:3000/emojis')
      .then(res => res.json())
      .then(this.groupEmojis)
  }

  groupEmojis = (emojis) => {
    const categorizedEmojis = emojis.filter(emoji => {
      return this.state.category.some(word => (emoji.keywords.includes(word)))
    })
    this.setState({ emojis: categorizedEmojis })
  }

  handleClick = (event) => {
    console.log(event.target.dataset.name)
    switch (event.target.dataset.name) {
      case "faces":
        this.setState({category: faces})
        break
      case "clothing":
        this.setState({category: clothing})
        break
      case "nature":
        this.setState({category: nature})
        break
      case "food":
        this.setState({category: food})
        break
      case "sports":
        this.setState({category: sports})
        break
      case "civilization":
        this.setState({category: civilization})
        break
      case "symbol":
        this.setState({category: symbol})
        break
    }
    this.fetchEmojis()
  }

  render() {
    return (
      <div>
        <Navbar handleClick={this.handleClick}/>
        <KeyboardContainer emojis={this.state.emojis}/>
        <TextBox />
      </div>
    );
  }
}

export default App;
