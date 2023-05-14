import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Note onClose={HandleCloseNote} setIsOpen={setIsOpen} />
            )}

            <div className='kebabMenu'>
                <div id="menuToggle">
                    <input type="checkbox" defaultChecked />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu" >
                        <a href="/doctors"><li>Команда</li></a>
                        <a href="/services"><li>Услуги</li></a>
                        <a href="/about"><li>О компании</li></a>
                        <a href="/documents"><li>Документы</li></a>
                        <a href="/portfolio"><li>Наши работы</li></a>
                        <div>
                            <div className='infBar'>
                                <div className='iconBar'>
                                    <img src="../IMG/phone-call.png" />
                                </div>
                                <div className="textBar">
                                    <p>+7 (967) 317-00-00</p>
                                </div>
                                <div className='iconBar'>
                                    <img src="../IMG/placeholder.png" />
                                </div>
                                <div className="textBar">
                                    <p>Краснодар, Ставропольская, 83</p>
                                </div>
                            </div>
                        </div>
                        <div className='lastInf'>
                            <button onClick={HandleOpenNote}>Записаться на прием</button>
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
            </div>
            <div className="NavBarLinks">
                <div><a href="/services">Услуги и цены</a></div>
                <div><a href="/about">О нас</a></div>
            </div>
            <div className="brandNameNavbar">

                <a href='/'><img src="../IMG/logo.png" alt="логотип" /></a>

                <h1><a href="/">Формула Улыбки</a></h1>

            </div>
            <div className="contactInfoNavbar">
                <div className="contactBar1">
                    <p>+7 (967) 317-00-00</p>
                    <button onClick={HandleOpenNote}>Заказать обратный звонок</button>
                </div>
                <div className="contactBar2">
                    <p>г. Краснодар, ул.Ставропольская, д. 83</p>
                </div>
            </div>
        </div>

    );
}

export default Navbar;