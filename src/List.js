import React, { Component } from "react";
import { getLength } from "./App.js";
import "./List.css";

export default class List extends Component {
  render() {
    const items = this.props.list.map((item, index) => {
      return (
        <li key={index}>
          <a href="#0" key={index} onClick={this.props.onClick}>
            {item}
          </a>
          <ul>
            <li>
              <strong>Word Count: </strong>
              {getLength(item)}
            </li>
            <li>
              <strong>Character Count: </strong>
              {item.length}
            </li>
          </ul>
        </li>
      );
    });
    return (
      <div className="List">
        <h3>Results</h3>
        <ul>{items}</ul>
      </div>
    );
  }
}
