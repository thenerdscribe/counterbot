import React, { Component } from "react";
import { saveAs } from "file-saver/FileSaver";
import "./TextArea.css";

const SaveButton = props => {
  handleSave = () => {
    var blob = new Blob([this.props.lines.join("\n")], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "lines.txt");
  };

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
};

export default SaveButton;
