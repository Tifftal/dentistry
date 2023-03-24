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
            <div className="navbarContent">
                <button className="openSideMenuButton" onClick={toggleMenu}>Три точки</button>
                <div className="NavBarLinks">
                    <a href="#">Услуги</a>
                    <a href="#">Цены</a>
                    <a href="#">О нас</a>
                </div>
                <div className="brandNameNavbar">
                    <img src="../logo.png" alt="логотип"/>
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