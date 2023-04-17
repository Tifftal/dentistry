import React from 'react';
import './Sent.css'

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <p>Заявка отправлена, наши специалисты скоро свяжутся с Вами!</p>
      </div>
    </div>
  );
}

export default Modal;
