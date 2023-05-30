import React from "react";

import "./Doctor.css"

const Modal = ({ image, handleClose }) => {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <span className="closeButton" onClick={handleClose}>
          &times;
        </span>
        <img src={image} alt="Full-size" />
      </div>
    </div>
  );
};

export default Modal;
