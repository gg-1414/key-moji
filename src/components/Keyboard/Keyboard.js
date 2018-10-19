import React, {Component} from 'react';
import FirstHexGrid from '../FirstHexGrid/FirstHexGrid'
import NextHexGrid from '../NextHexGrid/NextHexGrid'
import './Keyboard.css'

class Keyboard extends Component {
  render() {
    // console.log(this.props.emojis)
    return (
      <div id="keyboard">
        <FirstHexGrid emojis={this.props.emojis.slice(0,12)} />
        <NextHexGrid emojis={this.props.emojis.slice(12,24)} />
        <NextHexGrid emojis={this.props.emojis.slice(24,36)} />
        <NextHexGrid emojis={this.props.emojis.slice(36,48)} />
      </div>
    )
  }
}

export default Keyboard
