import React from "react";
import { saveAs } from "file-saver/FileSaver";
import "./TextArea.css";

const SaveButton = props => {
  const handleSave = () => {
    var blob = new Blob([this.props.lines.join("\n")], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "lines.txt");
  };

  return (
    <React.Fragment>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default SaveButton;
