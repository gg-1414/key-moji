import React, {Component} from 'react';
import './Grid.css'
import Hexagon from '../Hexagon/Hexagon'

class FirstHexGrid extends Component {
  render() {
    let hexagons = []
    for (let i = 0; i < 12; i++){
      hexagons.push(<Hexagon emoji={this.props.emojis[i]}/>)
    }

    return (
      <ul className="grid">
        {hexagons}
      </ul>
    )
  }
}

export default FirstHexGrid
