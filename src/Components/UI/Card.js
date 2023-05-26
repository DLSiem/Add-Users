import React from "react";

import card from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${card.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
