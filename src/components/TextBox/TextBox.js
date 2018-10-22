import React, { Component } from 'react'
import './TextBox.css'

class TextBox extends Component {
  render() {
    return (
      <div id="text-box">
        <textarea rows="15" cols="150" placeholder="Type here..." onChange={(event) => this.props.handleTextBoxChange(event.target.value)} value={this.props.textBox}></textarea>
      </div>
    );
  }
}

export default TextBox
