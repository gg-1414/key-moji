import React, {Component} from 'react';
import './Hexagon.css'

class Hexagon extends Component {
  render() {
    console.log(this.props.emoji)
    return (
      <li>
        <div className="hexagon">
          <p>{(this.props.emoji && this.props.emoji.symbol) && this.props.emoji.symbol}</p>
          <p></p>
        </div>
      </li>
    )
  }
}

export default Hexagon
