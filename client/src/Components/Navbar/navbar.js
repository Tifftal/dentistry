import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KebabMenu from './kebabmenu';
import './navbar.css'
import Note from "../Popup/Note/Note";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }

    return (
        <div className="navigationBar">
            {isOpen && (
                <Note onClose={HandleCloseNote} />
            )}
            <div className='kebabMenu'>
                <div id="menuToggle">
                    <input type="checkbox" defaultChecked />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu" >
                        {/* <img src='../IMG/2023-02-26 02.05.17.jpg'/> */}
                        <a href="/about"><li>Команда</li></a>
                        <a href="/about"><li>Портфолио</li></a>
                        <a href="/services"><li>Услуги</li></a>
                        <a href="/services"><li>Стоматология Детям</li></a>
                        <a href="/about"><li>О компании</li></a>
                        <a href="/about"><li>Блог</li></a>
                        <a href="/about"><li>FAQ</li></a>
                        <a href="/about"><li>Анкета пациента</li></a>
                        <a href="/about"><li>Документы</li></a>
                        <a href="/about"><li>Контакты</li></a>
                        {/* <a href="/"><li>Онлайн-консультация</li></a> */}
                        <div>
                            <div className='priem'>
                                <button onClick={HandleOpenNote}>Записаться на прием {">>"}</button>
                            </div>
                            <div className='infBar'>
                                <div className='iconBar'>
                                    <img src="../IMG/phone-call.png" />
                                </div>
                                <div className='textBar'>
                                    <p>+7 123 456 78 90</p>
                                </div>
                                <div className='iconBar'>
                                    <img src="../IMG/placeholder.png" />
                                </div>
                                <div className='textBar'>
                                    <p>Москва, Московская, 11</p>
                                </div>
                            </div>
                        </div>
                        <div className='lastInf'>
                            <button onClick={HandleOpenNote}>Задать вопрос доктору</button>
                            <div className='socialBar'>
                                <div></div>
                                <div className='scBtn'>
                                    <a href="#"><img src="../IMG/free-icon-whatsapp-3670302.png" width="90%" height="90%" /></a>
                                </div>
                                <div className='scBtn'>
                                    <a href="#"><img src="../IMG/free-icon-vkontakte-4494490.png" width="90%" height="90%" /></a>
                                </div>
                                <div className='scBtn'>
                                    <a href="#"><img src="../IMG/free-icon-telegram-2111710.png" width="90%" height="90%" /></a>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >

            <div className="navbarContent">
                {/* <button className="openSideMenuButton" onClick={toggleMenu}></button> */}
                <div className="NavBarLinks">
                    <a href="#">Услуги</a>
                    <a href="#">Цены</a>
                    <a href="#">О нас</a>
                </div>
                <div className="brandNameNavbar">
                    <img src="../IMG/logo.png" alt="логотип" />
                </div>
                <div>
                    <h1>Формула улыбки</h1>
                </div>
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

    );
}

export default Navbar;