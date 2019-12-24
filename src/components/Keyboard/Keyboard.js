import React, {Component} from 'react';
import FirstHexGrid from '../FirstHexGrid/FirstHexGrid'
import NextHexGrid from '../NextHexGrid/NextHexGrid'
import './Keyboard.scss'

const keyValues = [
  '1', '2', '3', 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C',
  '4', '5', '6', 'R', 'T', 'Y', 'F', 'G', 'H', 'V', 'B', 'N',
  '7', '8', '9', 'U', 'I', 'O', 'J', 'K', 'L', 'M', ',', '.',
  '0', '-', '=', 'P', '[', ']', ';', '\'', 'enter', '?', 'shift'
]

class Keyboard extends Component {

  render() {
    return (
      <div className="keyboard">
        <FirstHexGrid emojis={this.props.emojis.slice(0,12)} keys={keyValues.slice(0,12)} handleKeyboardClick={this.props.handleKeyboardClick}/>
        <NextHexGrid emojis={this.props.emojis.slice(12,24)} keys={keyValues.slice(12,24)} handleKeyboardClick={this.props.handleKeyboardClick} />
        <NextHexGrid emojis={this.props.emojis.slice(24,36)} keys={keyValues.slice(24,36)} handleKeyboardClick={this.props.handleKeyboardClick} />
        <NextHexGrid emojis={this.props.emojis.slice(36,47)} keys={keyValues.slice(36,48)} handleKeyboardClick={this.props.handleKeyboardClick}
        activateKeyboard2={this.props.activateKeyboard2}
        emojiActivatedState={this.props.emojiActivatedState} />
      </div>
    )
  }
  
}

export default Keyboard
