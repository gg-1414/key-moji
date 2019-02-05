import React, {Component} from 'react';
import './Hexagon.css'

class Hexagon extends Component {
  render() {
    // console.log(this.props.emoji)

    return (
      <li>
        <div
          className={this.props.activateBtn ? "hexagon activateBtn" : "hexagon"}
          data-key={this.props.keyVal}
          onClick={(event) => {
            return this.props.activateKeyboard !== undefined ?
              this.props.activateKeyboard(event) :
              (this.props.emoji && this.props.emoji.symbol) ?   this.props.handleKeyboardClick(this.props.emoji.symbol) : null}}>
          <p>{(this.props.emoji && this.props.emoji.symbol) ? this.props.emoji.symbol : this.props.activateBtn}</p>
          <p>{this.props.keyVal}</p>
        </div>
      </li>
    )
  }
}

export default Hexagon
