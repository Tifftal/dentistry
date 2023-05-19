import React from 'react';
import './Comment.css'
import axios from 'axios';

function Comment(props) {

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const comment = document.getElementById('comment').value;

    const data = {
      name: name,
      number: number,
      comment: comment,
      date: new Date().toISOString(),
    }

    console.log(data);

    axios.post("http://localhost:8082/comments/send", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="modalOtz">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>&times;</span>
        <form className='formNote' onSubmit={handleSubmitForm}>
          <input type="text" name="name" placeholder="Имя" id="name" required pattern="[a-zA-Zа-яА-ЯЁё\s]+" title="Введите имя на русском или английском" />
          <input type="text" name="phone" placeholder="Номер телефона" id="number" required pattern="^\+?[1-9]\d{1,10}$" title="Введите корректный номер телефона" />
          <input type="text" name="comment" placeholder="Отзыв" id="comment" required />
          <button type="submit">Отправить отзыв</button>
          <label>Нажимая на кнопку "Отправить отзыв", Вы выражаете свое согласие на <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/">обработку персональных данных</a></label>
        </form>
      </div>
    </div>
  );
}

export default Comment;
