import React from "react";

const Note = (props) => {
    const handleClick = () => {
        props.onClose()
    }
    return props.isOpen ? (
        <div className="popup-menu">
            <div className="popup-menu-head">
                <button onClick={handleClick}>Закрыть</button>
            </div>
            <div className="popup-menu-body">
                <form>
                    <input placeholder="Имя" />
                    <input placeholder="Фамилия" />
                    <input placeholder="Номер" />
                    <button type="submit">Записаться</button>
                </form>
            </div>
            <div className="popup-menu-footer">

            </div>
        </div>
    ) : null;
}

export default Note;