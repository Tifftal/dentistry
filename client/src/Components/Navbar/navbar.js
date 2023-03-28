import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import KebabMenu from './kebabmenu';
import './navbar.css'

const Navbar = () => {
    const [isOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!isOpen)
    }

    return (
        <div className="navigationBar">
            {isOpen && (
                <KebabMenu toggleMenu={toggleMenu} />
            )}
            <div className='kebabMenu'>
                <div id="menuToggle">
                    <input type="checkbox" defaultChecked/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="#"><li>Команда</li></a>
                        <a href="#"><li>Портфолио</li></a>
                        <a href="#"><li>Услуги</li></a>
                        <a href="#"><li>Стоматология Детям</li></a>
                        <a href="#"><li>О компании</li></a>
                        <a href="#"><li>Блог</li></a>
                        <a href="#"><li>FAQ</li></a>
                        <a href="#"><li>Анкета пациента</li></a>
                        <a href="#"><li>Документы</li></a>
                        <a href="#"><li>Контакты</li></a>
                        <a href="#"><li>Онлайн-консультация</li></a>
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
                    </ul>
                </div>
            </div>
            <div className="navbarContent">
                {/* <button className="openSideMenuButton" onClick={toggleMenu}></button> */}
                <div className="NavBarLinks">
                    <a href="#">Услуги</a>
                    <a href="#">Цены</a>
                    <a href="#">О нас</a>
                </div>
                <div className="brandNameNavbar">
                    <img src="../IMG/logo.png" alt="логотип" />
                    <h1>Формула улыбки</h1>
                </div>
                <div className="contactInfoNavbar">
                    <div className="contactBar1">
                        <p>+7 929 123 45 67</p>
                        <button>Заказать обратный звонок</button>
                    </div>
                    <div className="contactBar2">
                        <p>Московская, 11</p>
                        <button>Изменить клинику</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;