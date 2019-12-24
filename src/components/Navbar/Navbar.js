import React, {Component} from 'react';
import './Navbar.scss'

class Navbar extends Component {

  addEmojiFocus = (event) => {
    const dropDown = this.refs.dropDown
    dropDown.style.visibility = "visible"
  }

  render() {
    return (
      <div id="nav-bar">
        <input type="text" name="emoji" placeholder="Search..." onChange={(event) => this.props.handleSearchChange(event)}/>
          <div id="category-bar">
            <img src="./images/faces.png" alt="faces" data-name="faces" onClick={(event) => this.props.handleCategoryClick(event)}/>
            <img src="./images/clothing.png" alt="clothing" data-name="clothing" onClick={(event) => this.props.handleCategoryClick(event)}/>
            <img src="./images/nature.png" alt="nature" data-name="nature" onClick={(event) => this.props.handleCategoryClick(event)} />
            <img src="./images/food.png" alt="food" data-name="food" onClick={(event) => this.props.handleCategoryClick(event)} />
            <img src="./images/sports.png" alt="sports" data-name="sports" onClick={(event) => this.props.handleCategoryClick(event)} />
            <img src="./images/civilization.png" alt="civilization" data-name="civilization" onClick={(event) => this.props.handleCategoryClick(event)} />
            <img src="./images/symbol.png" alt="symbol" data-name="symbol" onClick={(event) => this.props.handleCategoryClick(event)} />
          </div>
          {/* <div id="add-emoji-container">
            <img id="add-emoji" src="./images/add-to-emoji.png" alt="Add emoji to my keyboard" title="Add emoji to my keyboard" onMouseEnter={this.addEmojiFocus} onMouseLeave={() => this.refs.dropDown.style.visibility = "hidden"}/>
            <div className="drop-down" ref="dropDown" onMouseEnter={this.addEmojiFocus} onMouseLeave={() => this.refs.dropDown.style.visibility = "hidden"}>
              <ul>
                <li>Add emoji to keyboard</li>
                <li>My keyboard</li>
              </ul>
            </div>
          </div> */}
            {/*<span>&#x2B22;</span>*/}

      </div>
    )
  }
}

export default Navbar
