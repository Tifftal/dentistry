import React from "react";
import { useState } from "react";
import PortalReactDOM from 'react-dom'
import Note from "../../Popup/Note/Note";
import "./FirstContainer.css"
const FirstContainer = () => {
    const [isOpen, setIsOpen] = useState('false');

    const HandleOpenNote = () => {
        setIsOpen(!isOpen)
    }

    const HandleCloseNote = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="firstComponent">
            {PortalReactDOM.createPortal(
                <Note isOpen={isOpen} onClose={HandleCloseNote} />,
                document.body
            )}
            <div className="WelcomeContainer">
                <h1>
                    Мы дарим вам бесплатную
                </h1>
                <h1>
                    чистку зубов
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
