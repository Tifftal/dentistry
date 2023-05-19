import React from 'react';
import './Comment.css'

function Comment(props) {

  return (
    <div className="modalOtz">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <form className='formNote'>
          <input type="text" name="name" placeholder="Имя" id="name" required />
          <input type="date" name="date" placeholder="Дата Вашего приема" id="date" required />
          <input type="text" name="comment" placeholder="Отзыв" id="comment" required />
          <button type="submit">Отправить отзыв</button>
          <label>Нажимая на кнопку "Отправить отзыв", Вы выражаете свое согласие на <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/">обработку персональных данных</a></label>
        </form>
      </div>
    </div>
  );
}

export default Comment;
