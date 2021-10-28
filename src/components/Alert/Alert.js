import React from "react";
import "./styles.css";
import { CSSTransition } from "react-transition-group";

const Alert = ({ visible, error }) => {
  console.log(error);
  return visible ? (
    <CSSTransition appear in timeout={250} classNames="alert">
      <div className="alert">{error}</div>
    </CSSTransition>
  ) : null;
};

export default Alert;
