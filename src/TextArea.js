import React, { Component } from "react";
import "./TextArea.css";

export default class TextArea extends Component {
  render() {
    return (
      <div className="Inner">
        <h1>CounterBot {this.props.version}</h1>
        <h3>Word Count: {this.props.wordCount}</h3>
        <h3>Character Count: {this.props.characterCount}</h3>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.props.value}
            onChange={this.props.handleChange}
            tabIndex="0"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
