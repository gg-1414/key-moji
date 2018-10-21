import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <input type="text" name="emoji" placeholder="Search..." />
          <div id="category-bar">
            <img src="./images/faces.png" data-name="faces" onClick={(event) => this.props.handleClick(event)}/>
            <img src="./images/clothing.png" data-name="clothing" onClick={(event) => this.props.handleClick(event)}/>
            <img src="./images/nature.png" data-name="nature" onClick={(event) => this.props.handleClick(event)} />
            <img src="./images/food.png" data-name="food" onClick={(event) => this.props.handleClick(event)} />
            <img src="./images/sports.png" data-name="sports" onClick={(event) => this.props.handleClick(event)} />
            <img src="./images/civilization.png" data-name="civilization" onClick={(event) => this.props.handleClick(event)} />
            <img src="./images/symbol.png" data-name="symbol" onClick={(event) => this.props.handleClick(event)} />
          </div>
      </div>
    )
  }
}

export default Navbar
