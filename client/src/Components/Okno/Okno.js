import React from 'react';
import './Okno.css'

function Okno(props) {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <form className='formNote'>
          <input type="text" name="name" placeholder="Имя" id="name" required />
          <input type="text" name="name" placeholder="Телефон" id="name" required />
          <input type="text" name="name" placeholder="Причина обращения" id="name" required />
          <button type="submit">Отправить заявку</button>
          <label>Нажимая на кнопку "Отправить заявку", Вы выражаете свое согласие на <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/">обработку персональных данных</a></label>
        </form>
      </div>
    </div>
  );
}

export default Okno;
