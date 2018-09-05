import React, { Component } from "react";
import { saveAs } from "file-saver/FileSaver";
import "./TextArea.css";

export default class SaveButton extends Component {
  handleSave() {
    var blob = new Blob([this.props.lines.join("\n")], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "lines.txt");
  }
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.handleSave();
          }}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}
