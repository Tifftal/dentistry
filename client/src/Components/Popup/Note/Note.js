import React from 'react';
import './Note.css'

function Modal(props) {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <form className='formNote'>
          <input type="text" name="name" placeholder="Имя" id="name" required />
          <input type="text" name="name" placeholder="Телефон" id="name" required />
          <input type="text" name="name" placeholder="Причина обращения" id="name" required />
          <div className='formDivNote'>
            <input type="checkbox" id="courses" />
            <label for="courses">
              Выражаю свое согласие на обработку персональных данных в соответствии с <a href="#">Федеральном законом "О персональных данных" от 27.07.2006 № 152-ФЗ</a>, с условиями обработки персональных данных ознакомлен(а).
            </label>
          </div>
          <button type="submit">Отправить заявку</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
