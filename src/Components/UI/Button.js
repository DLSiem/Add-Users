import React from "react";
import button from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${button.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
