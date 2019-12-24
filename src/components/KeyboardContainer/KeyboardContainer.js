import React, {Component} from 'react';
import Keyboard from '../Keyboard/Keyboard'
import './KeyboardContainer.scss'

class KeyboardContainer extends Component {
  state = {
    activated: null // keyboard div itself
  }

  generateKeyboards = () => {
    const length = this.props.emojis.length
    const numOfKeyboards = Math.ceil(length / 47)
    let keyboards = []
    for (let i = 0; i < numOfKeyboards; i++){
      keyboards.push(<Keyboard emojis={this.props.emojis.slice(i * 47, (i + 1)* 47)} key={i} handleKeyboardClick={this.props.handleKeyboardClick}
      activateKeyboard2={this.props.activateKeyboard2}
      emojiActivatedState={this.props.emojiActivatedState}
      activateKeyboard={this.props.activateKeyboard}
      />)
    }
    // console.log(keyboards[0])
    return keyboards
  }

  render() {
    // console.log(this.state.emojis)
    return (
      <div id="emoji-container">
        {this.generateKeyboards()}
      </div>
    )
  }
}

export default KeyboardContainer
