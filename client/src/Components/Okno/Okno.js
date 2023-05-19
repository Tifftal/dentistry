import React from 'react';
import './Okno.css'
import axios from "axios";

function Okno(props) {

    const handleSubmitForm = (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        const data = {
            name: name,
            phone: phone,
            timestamp: new Date().toISOString(),
        };

        console.log(data);

        axios.post('api?', data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
                <form className='formNote' onSubmit={handleSubmitForm}>
                    <input type="text" name="name" placeholder="Имя" id="name" required pattern="[a-zA-Zа-яА-ЯЁё\s]+" title="Введите имя на русском или английском" />
                    <input type="text" name="phone" placeholder="Телефон" id="phone" required pattern="^\+?[1-9]\d{1,10}$" title="Введите корректный номер телефона" />
                    <button type="submit">Отправить заявку</button>
                    <label>Нажимая на кнопку "Отправить заявку", Вы выражаете свое согласие на <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/">обработку персональных данных</a></label>
                </form>
            </div>
        </div>
    );
}

export default Okno;
