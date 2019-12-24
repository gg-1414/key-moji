import React, {Component} from 'react';
import '../FirstHexGrid/Grid.scss'
import './NextGrid.css'
import Hexagon from '../Hexagon/Hexagon'

class NextHexGrid extends Component {
  render() {
    // console.log(this.props.emojis)

    let hexagons = []
    for (let i = 0; i < 12; i++){
      hexagons.push(this.props.activateKeyboard2 && i === 11 ?
        <Hexagon activateBtn={this.props.emojiActivatedState ? ':)' : 'A/a'} keyVal={this.props.keys[i]} key={i} handleKeyboardClick={this.props.handleKeyboardClick}
        activateKeyboard2={this.props.activateKeyboard2} /> :
        <Hexagon emoji={this.props.emojis[i]} keyVal={this.props.keys[i]} key={i}  handleKeyboardClick={this.props.handleKeyboardClick} />)
    }
    // console.log('NextHexGrid', hexagons);
    return (
      <ul className="grid next-grid">
        {hexagons}
      </ul>
    )
  }
}

export default NextHexGrid
