import React, {Component} from 'react';
import Keyboard from '../Keyboard/Keyboard'

const faces = ['face', 'smiley', 'monster', 'hands', 'body', 'people', 'hand', 'person']
const clothing = ['fashion', 'accessories']
const nature = ['animal', 'plant', 'earth', 'space', 'sun', 'star', 'weather']
const food = ['food', 'drink']
const sports = ['sport']
const civilization = ['home', 'civilization', 'office']
const symbols = ['symbol']

class KeyboardContainer extends Component {

  constructor() {
    super()
    this.state = {
      emojis: [],
      category: faces
    }
  }

  componentDidMount() {
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

  generateKeyboards = () => {
    const length = this.state.emojis.length
    const numOfKeyboards = Math.ceil(length / 48)
    let keyboards = []
    for (let i = 0; i < numOfKeyboards; i++){
      keyboards.push(<Keyboard emojis={this.state.emojis.slice(i * 48, (i + 1)* 48)}/>)
    }
    return keyboards
  }

  render() {
    // console.log(this.state.emojis)
    return (
      <div >
        {this.generateKeyboards()}
      </div>
    )
  }
}

export default KeyboardContainer
