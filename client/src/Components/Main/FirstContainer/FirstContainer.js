import React from "react";
import { useState } from "react";

import "./FirstContainer.css"

const FirstContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }
    return (
        <div className="firstComponent">
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={HandleCloseNote}>&times;</span>
                        <form className='formNote'>
                            <input type="text" name="name" placeholder="Имя" id="name" required />
                            <input type="text" name="name" placeholder="Телефон" id="name" required />
                            <input type="text" name="name" placeholder="Причина обращения" id="name" required />
                            <button type="submit">Отправить заявку</button>
                            <label>Нажимая на кнопку "Отправить заявку", Вы выражаете свое согласие на <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/">обработку персональных данных</a></label>
                        </form>
                    </div>
                </div>
            )}
            <div className="WelcomeContainer">
                <h1>
                    Мы дарим вам бесплатную чистку зубов
                </h1>
                <p>
                    Наши врачи - профессионалы своего дела
                </p>
                <button onClick={HandleOpenNote}>Записаться на прием</button>
            </div>
        </div>
    )
}

export default FirstContainer;
