import React from "react";
import { getLength } from "./App.js";
import "./List.css";

const List = props => {
  const items = props.list.map((item, index) => {
    return (
      <li key={index}>
        <a href="#0" key={index} onClick={props.onClick}>
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
};

export default List;
