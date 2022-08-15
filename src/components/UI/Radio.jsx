import React from "react";
import "./Radio.css";

const Radio = ({ value, onClick, disabled, checked }) => {
  return (
    <label className="radio-container">
      <input
        defaultChecked={checked}
        type="radio"
        name="pledge"
        value={value}
        disabled={disabled}
        onClick={() => onClick(value)}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Radio;
