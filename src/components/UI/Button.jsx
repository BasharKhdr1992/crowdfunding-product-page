import React from "react";
import "./Button.css";

const Button = ({ children, className, disabled, onClick }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} type="button" className={className}>
      {children}
    </button>
  );
};

export default Button;
