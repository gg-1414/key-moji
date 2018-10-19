import React, {Component} from 'react';
import '../FirstHexGrid/Grid.css'
import './NextGrid.css'
import Hexagon from '../Hexagon/Hexagon'

class NextHexGrid extends Component {
  render() {
    let hexagons = []
    for (let i = 0; i < 12; i++){
      hexagons.push(<Hexagon emoji={this.props.emojis[i]}/>)
    }

    return (
      <ul className="grid next-grid">
        {hexagons}
      </ul>
    )
  }
}

export default NextHexGrid
