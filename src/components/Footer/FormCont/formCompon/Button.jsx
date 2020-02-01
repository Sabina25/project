import React from "react";
import './Button.css';

const Button = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type == "primary" ? "btn-primary" : "btn-secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;