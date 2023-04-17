import React from "react";
import { useState } from "react";

import Note from "../../Popup/Note/Note";
import "./FirstContainer.css"
const FirstContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }
    return (
        <div className="firstComponent">
            {isOpen && (
                <Note onClose={HandleCloseNote} />
            )}
            <div className="WelcomeContainer">
                <h1>
                    Мы дарим вам бесплатную&nbsp; чистку зубов
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
