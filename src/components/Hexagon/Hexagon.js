import React, {Component} from 'react';
import './Hexagon.css'

class Hexagon extends Component {
  render() {
    // console.log(this.props.emoji)
    return (
      <li>
        <div className="hexagon" data-key={this.props.keyVal} onClick={() => {return (this.props.emoji && this.props.emoji.symbol) ? this.props.handleKeyboardClick(this.props.emoji.symbol) : null}}>
          {/*}<p>{(this.props.emoji && this.props.emoji.symbol) && this.props.emoji.symbol}</p>*/}
          <p>{(this.props.emoji && this.props.emoji.symbol) ? this.props.emoji.symbol : <br></br>}</p>
          <p>{this.props.keyVal}</p>
        </div>
      </li>
    )
  }
}

export default Hexagon
