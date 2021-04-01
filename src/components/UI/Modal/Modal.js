import React from "react";
import classes from "./modal.module.css";

const modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className="modal-content ">
      {props.children}
      </div>
    </div>
  );
};

export default modal;
