import React, { useState } from "react";
import "./KebabMenu.css";

const KebabMenu = (props) => {
    return (
        <div className="menu">
            <button onClick={props.toggleMenu}>Крестик</button>
            <div>
                <p><a href="#">Портфолио</a></p>
                <p><a href="#">Команда</a></p>
                <p><a href="#">Услуги</a></p>
                <p><a href="#">Стоматология Детям</a></p>
                <p><a href="#">О компании</a></p>
                <p><a href="#">Блог</a></p>
                <p><a href="#">FAQ</a></p>
                <p><a href="#">Анкета пациента</a></p>
                <p><a href="#">Документы</a></p>
                <p><a href="#">Контакты</a></p>
                <p><a href="#">Онлайн-консультация</a></p>
            </div>
            <div>
                <button>Записаться на прием {">>"}</button>
                <p>+7 123 456 78 90</p>
                <p>Москва, Московская, 11</p>
                <button>Задать вопрос доктору</button>
            </div>
            <div>
                <img href="#" alt="Twitter" />
                <img href="#" alt="VK" />
                <img href="#" alt="Facebook" />
            </div>

        </div>
    )
}

export default KebabMenu;