import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import KebabMenu from './kebabmenu';

const Navbar = () => {
    const [isOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!isOpen)
    }

    return (
        <div>
            {isOpen && (
                <KebabMenu toggleMenu={toggleMenu} />
            )}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button type="button" className="btn btn-outline-success" onClick={toggleMenu}>Иконка</button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Услуги</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Цены</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">О нас</a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <img src="/Users/vaarty/Desktop/dentistry/client/src/IMG/Новый проект-2.png" />
                    </div>
                    <span className="navbar-text">
                        Navbar text with an inline element
                    </span>

                </div>

            </nav>
        </div>
    );
}

export default Navbar;