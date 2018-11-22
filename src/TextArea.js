import React, { Component } from "react";
import "./TextArea.css";

const TextArea = props => {
  return (
    <div className="Inner">
      <h1>CounterBot {props.version}</h1>
      <h3>Word Count: {props.wordCount}</h3>
      <h3>Character Count: {props.characterCount}</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="text"
          value={props.value}
          onChange={props.handleChange}
          tabIndex="0"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TextArea;
