import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <input type="text" name="emoji" placeholder="Search.." />
        {/* category icons go here
          <div id="nav-icons">
            <img src="icon1-faces" />
            <img src="icon2-clothing" />
            <img src="icon3-nature" />
            <img src="icon4-food" />
            <img src="icon5-sports" />
            <img src="icon6-civilization" />
            <img src="icon7-symbols" />
          </div>
          */}
      </div>
    )
  }
}

export default Navbar
