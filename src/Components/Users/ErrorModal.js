import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorStyles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.closeErr} className={ErrorStyles.backdrop} />
      <Card className={ErrorStyles.modal}>
        <header className={ErrorStyles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={ErrorStyles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={ErrorStyles.actions}>
          <Button onClick={props.closeErr}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
