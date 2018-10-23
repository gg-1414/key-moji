import React, { Component } from 'react'
import './TextBox.css'

class TextBox extends Component {
  render() {
    return (
      <div id="text-box">
        <textarea rows="15" cols="150" placeholder="Type here..." onChange={(event) => this.props.handleTextBoxChange(event.target.value)} value={this.props.textBox}></textarea>
        <img src="./images/add-to-messages.png" alt="Add to my messages" title="Add to my messages" />
        <img src="./images/clipboard.png" alt="Copy to clipboard" title="Copy to clipboard" />
      </div>
    );
  }
}

export default TextBox
