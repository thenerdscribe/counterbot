import React, { Component } from "react";
import TextArea from "./TextArea.js";
import List from "./List.js";
import SaveButton from "./SaveButton.js";
import "./App.css";

export const getLength = item => {
  const length = item
    .trim()
    .replace(/(?:\r\n|\r|\n)/g, " ")
    .replace("-", " ")
    .split(" ");
  return length.length;
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      version: "1.0.1",
      lines: [],
      text: "",
      wordCount: 0,
      characterCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    document.title = `CounterBot ${this.state.version}`;
    const localLines = localStorage.getItem("lines");
    if (localLines) {
      const stateLines = JSON.parse(localLines);
      this.setState({ lines: stateLines });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = event.target.text.value;
    if (text) {
      const joined = this.state.lines.concat(text);
      this.setState({
        lines: joined,
        text: "",
        wordCount: 0,
        characterCount: 0
      });
      localStorage.setItem("lines", JSON.stringify(joined));
    }
  }

  handleChange(event) {
    const wordCount = getLength(event.target.value);
    const characterCount = event.target.value.length;
    this.setState({
      text: event.target.value,
      wordCount: wordCount,
      characterCount: characterCount
    });
  }

  removeItem(event) {
    event.preventDefault();
    const filteredLines = this.state.lines.filter(
      (line, index) =>
        line !== event.target.text.replace(` ${getLength(line)}`, "")
    );
    this.setState({
      lines: filteredLines
    });
    localStorage.setItem("lines", JSON.stringify(filteredLines));
  }

  render() {
    return (
      <main className="App">
        <TextArea
          version={this.state.version}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.text}
          wordCount={this.state.wordCount}
          characterCount={this.state.characterCount}
        />
        {this.state.lines.length > 0 && (
          <section className="Results">
            <List list={this.state.lines} onClick={this.removeItem} />
            <SaveButton lines={this.state.lines} />
          </section>
        )}
      </main>
    );
  }
}
