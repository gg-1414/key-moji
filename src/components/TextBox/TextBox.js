import React, { Component } from 'react'
import './TextBox.scss'
import Clipboard from "clipboard";

class TextBox extends Component {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  render() {
    return (
      <div id="text-box">
        <textarea rows="15" cols="150" placeholder="Type here..."  value={this.props.textBox} onKeyDown={this.props.handleKeyDown}></textarea>
        <div className="options">
          <img src="./images/add-to-messages.png" alt="Add to my messages" title="Add to my messages" />
          <img src="./images/clipboard.png" alt="Copy to clipboard" title="Copy to clipboard" className="copy-to-clipboard" data-clipboard-text={this.props.textBox}/>
        </div>
      </div>
    );
  }
}

export default TextBox
