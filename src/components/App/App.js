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

const englishKeyboard = {
  49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 48: "0", 189: "-", 187: "=",
  81: "q", 87: "w", 69: "e", 82: "r", 84: "t", 89: "y", 85: "u", 73: "i", 79: "o", 80: "p", 219: "[", 221: "]",
  65: "a", 83: "s", 68: "d", 70: "f", 71: "g", 72: "h", 74: "j", 75: "k", 76: "l", 186: ";", 222: "\'", 13: "enter",
  90: "z", 88: "x", 67: "c", 86: "v", 66: "b", 78: "n", 77: "m", 188: ",", 190: ".", 191: "/", 16: "shift"
}

const keyCodes = [
  49, 50, 51, 81, 87, 69, 65, 83, 68, 90, 88, 67,
  52, 53, 54, 82, 84, 89, 70, 71, 72, 86, 66, 78,
  55, 56, 57, 85, 73, 79, 74, 75, 76, 77, 188, 190,
  48, 189, 187, 80, 219, 221, 186, 222, 13, 191, 16, ""
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      emojis: [],
      category: faces,
      searchTerm: '',
      textBox: '',
      keyboard: englishKeyboard,
      emojiKeyboardActivated: false
    }
  }

  componentDidMount() {
    this.fetchEmojis()
  }

  fetchEmojis = () => {
    fetch('https://key-moji-backend.herokuapp.com/emojis')
      .then(res => res.json())
      .then(this.groupEmojisByCategory)
  }

  groupEmojisByCategory = (emojis) => { // only filters emojis where emoji has a keyword included from category array
    const categorizedEmojis = emojis.filter(emoji => {
      return this.state.category.some(word => (emoji.keywords.includes(word))) // returns true/false
    })
    this.setState({ emojis: categorizedEmojis })
  } // purpose of function: set "emojis" state to new array of emojis that includes keywords from category array

  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value.toLowerCase()}, this.searchEmojis)
  }

  searchEmojis = () => {
    fetch('https://key-moji-backend.herokuapp.com/emojis')
      .then(res => res.json())
      .then(this.groupEmojisBySearchTerm)
  }

  groupEmojisBySearchTerm = (emojis) => {
    if (this.state.searchTerm !== '') {
      const categorizedEmojis = emojis.filter(emoji => emoji.keywords.includes(this.state.searchTerm) || emoji.title.toLowerCase().includes(this.state.searchTerm))
      this.setState({ emojis: categorizedEmojis })
    } else {
      this.fetchEmojis()
    }
  }

  handleCategoryClick = (event) => {
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
      default:
        this.setState({category: faces})
        break
    }
    this.fetchEmojis()
  }

  handleKeyboardClick = (selectedSymbol) => {
    this.setState((prevState) => ({textBox: prevState.textBox + selectedSymbol}))
  }

  handleTextBoxChange = (input) => {
    this.setState({textBox: input})
  }

  activateKeyboard = (event) => {
    event.persist()
    this.setState((prevState) => ({emojiKeyboardActivated: !prevState.emojiKeyboardActivated}), () => {
      const currentKeyboard = event.target.nodeName === "P" ?
      event.target.parentElement.parentElement.parentElement.parentElement :
      event.target.parentElement.parentElement.parentElement
      const currentHexs = currentKeyboard.querySelectorAll(".hexagon")
      if (this.state.emojiKeyboardActivated) {
        let newKeyboard = {}
        currentHexs.forEach((hex, idx) => {
          hex.style.border = "1px solid red"
          let emoji = hex.children[0].innerText
          newKeyboard[keyCodes[idx]] = `${emoji}`
        })
        this.setState({ keyboard: newKeyboard })
      } else {
        const allHexs = document.querySelectorAll(".hexagon")
        allHexs.forEach((hex) => { hex.style.border = "none" })
        this.setState({ keyboard: englishKeyboard })
      }
    })
  }

  handleKeyDown = (event) => {
      const emoji = this.state.keyboard[`${event.keyCode}`]
      const text = this.state.textBox
      if (emoji && emoji !== "enter" && emoji !== "shift") {
        this.setState({
          textBox: text + emoji
        })
      } else if (event.keyCode === 8) { // delete
        if (!this.state.textBox.substr(-1).match(/[a-z]/i) && isNaN(this.state.textBox.substr(-1))){
          this.setState({ textBox: text.slice(0, -2) })
        } else {
          this.setState({ textBox: text.slice(0, -1) })
        }
      } else if (event.keyCode === 32){ // space
        this.setState({
          textBox: text.concat(" ")
        })
      }
  }

  render() {
    return (
      <div>
        <Navbar handleSearchChange={this.handleSearchChange} handleCategoryClick={this.handleCategoryClick}/>
        <KeyboardContainer emojis={this.state.emojis} handleKeyboardClick={this.handleKeyboardClick}
        activateKeyboard={this.activateKeyboard}
        emojiActivatedState={this.state.emojiKeyboardActivated}/>
        <TextBox textBox={this.state.textBox} handleTextBoxChange={this.handleTextBoxChange} handleKeyDown={this.handleKeyDown} />
      </div>
    );
  }
}

export default App;
