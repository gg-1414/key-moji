import React, {Component} from 'react';
import FirstHexGrid from '../FirstHexGrid/FirstHexGrid'
import NextHexGrid from '../NextHexGrid/NextHexGrid'
import './Keyboard.css'

const keyValues = [
  '1', '2', '3', 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C',
  '4', '5', '6', 'R', 'T', 'Y', 'F', 'G', 'H', 'V', 'B', 'N',
  '7', '8', '9', 'U', 'I', 'O', 'J', 'K', 'L', 'M', ',', '.',
  '0', '-', '=', 'P', '[', ']', ';', '\'', 'enter', '?', 'shift'
]

class Keyboard extends Component {
  render() {
    // console.log(this.props.emojis)
    return (
      <div className="keyboard">
        <FirstHexGrid emojis={this.props.emojis.slice(0,12)} keys={keyValues.slice(0,12)}/>
        <NextHexGrid emojis={this.props.emojis.slice(12,24)} keys={keyValues.slice(12,24)} />
        <NextHexGrid emojis={this.props.emojis.slice(24,36)} keys={keyValues.slice(24,36)} />
        <NextHexGrid emojis={this.props.emojis.slice(36,48)} keys={keyValues.slice(36,48)} />
      </div>
    )
  }
}

export default Keyboard
