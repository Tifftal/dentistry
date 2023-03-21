import React, { useState } from "react";
import "./KebabMenu.css";

const KebabMenu = (props) => {
    return (
        <div className="menu">
            <button onClick={props.toggleMenu}>Крестик</button>
            <div>
                <p>Портфолио</p>
                <p>Команда</p>
                <p>Услуги</p>
                <p>Стоматология Детям</p>
                <p>О компании</p>
                <p>Блог</p>
                <p>FAQ</p>
                <p>Анкета пациента</p>
                <p>Документы</p>
                <p>Контакты</p>
                <p>Онлайн-консультация</p>
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