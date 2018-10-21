import React, {Component} from 'react';
import './Grid.css'
import Hexagon from '../Hexagon/Hexagon'

class FirstHexGrid extends Component {
  render() {
    // console.log(this.props.keys)
    let hexagons = []
    for (let i = 0; i < 12; i++){
      hexagons.push(<Hexagon emoji={this.props.emojis[i]} keyVal={this.props.keys[i]} key={i} />)
    }

    return (
      <ul className="grid">
        {hexagons}
      </ul>
    )
  }
}

export default FirstHexGrid
