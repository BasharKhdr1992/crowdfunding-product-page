import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ width, height }) => {
  return (
    <div style={{ height: `${height}rem` }} className="progress-bar-container">
      <div style={{ width: `${width}%` }} className="progress-bar"></div>
    </div>
  );
};

export default ProgressBar;
