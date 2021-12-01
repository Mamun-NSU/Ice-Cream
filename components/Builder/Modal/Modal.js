import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modalBody}>{props.childern}</div>
    </div>
  );
};

export default Modal;
