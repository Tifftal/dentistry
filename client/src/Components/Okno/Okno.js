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
          <label>Нажимая на кнопку "Отправить заявку", Вы выражаете свое согласие на <a href="http://localhost:3000/#:~:text=%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%20%22%D0%9E%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%22%20%D0%BE%D1%82%2027.07.2006%20%E2%84%96%20152%2D%D0%A4%D0%97">обработку персональных данных</a></label>
        </form>
      </div>
    </div>
  );
}

export default Okno;
