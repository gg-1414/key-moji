import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <input type="text" name="emoji" placeholder="Search..." />
          <div id="category-bar">
            <img src="./images/faces.png" />
            <img src="./images/clothing.png" />
            <img src="./images/nature.png" />
            <img src="./images/food.png" />
            <img src="./images/sports.png" />
            <img src="./images/civilization.png" />
            <img src="./images/symbol.png" />
          </div>
      </div>
    )
  }
}

export default Navbar
