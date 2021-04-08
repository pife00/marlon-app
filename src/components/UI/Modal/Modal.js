import React from "react";

const Modal = (props) => {

  const closeModal = () =>{
    props.closeModal('modal')
  }



  return (
    <div className={props.modalStatus}>
      <div className="modal-background"></div>
      <div className="modal-content">{props.children}</div>
      <button 
      onClick={closeModal}
      className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default Modal;
